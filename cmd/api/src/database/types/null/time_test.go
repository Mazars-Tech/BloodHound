// Copyright 2023 Specter Ops, Inc.
// 
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// 
// SPDX-License-Identifier: Apache-2.0

package null

import (
	"encoding/json"
	"errors"
	"testing"
	"time"
)

var (
	timeString1   = "2012-12-21T21:21:21Z"
	timeString2   = "2012-12-21T22:21:21+01:00" // Same time as timeString1 but in a different timezone
	timeString3   = "2018-08-19T01:02:03Z"
	timeJSON      = []byte(`"` + timeString1 + `"`)
	nullTimeJSON  = []byte(`null`)
	timeValue1, _ = time.Parse(time.RFC3339, timeString1)
	timeValue2, _ = time.Parse(time.RFC3339, timeString2)
	timeValue3, _ = time.Parse(time.RFC3339, timeString3)
	timeObject    = []byte(`{"Time":"2012-12-21T21:21:21Z","Valid":true}`)
	nullObject    = []byte(`{"Time":"0001-01-01T00:00:00Z","Valid":false}`)
	badObject     = []byte(`{"hello": "world"}`)
)

func TestUnmarshalTimeJSON(t *testing.T) {
	var ti Time
	err := json.Unmarshal(timeJSON, &ti)
	maybePanic(err)
	assertTime(t, ti, "UnmarshalJSON() json")

	var null Time
	err = json.Unmarshal(nullTimeJSON, &null)
	maybePanic(err)
	assertNullTime(t, null, "null time json")

	var fromObject Time
	err = json.Unmarshal(timeObject, &fromObject)
	if err == nil {
		panic("expected error")
	}

	var nullFromObj Time
	err = json.Unmarshal(nullObject, &nullFromObj)
	if err == nil {
		panic("expected error")
	}

	var invalid Time
	err = invalid.UnmarshalJSON(invalidJSON)
	var syntaxError *json.SyntaxError
	if !errors.As(err, &syntaxError) {
		t.Errorf("expected wrapped json.SyntaxError, not %T", err)
	}
	assertNullTime(t, invalid, "invalid from object json")

	var bad Time
	err = json.Unmarshal(badObject, &bad)
	if err == nil {
		t.Errorf("expected error: bad object")
	}
	assertNullTime(t, bad, "bad from object json")

	var wrongType Time
	err = json.Unmarshal(int64JSON, &wrongType)
	if err == nil {
		t.Errorf("expected error: wrong type JSON")
	}
	assertNullTime(t, wrongType, "wrong type object json")
}

func TestUnmarshalTimeText(t *testing.T) {
	ti := TimeFrom(timeValue1)
	txt, err := ti.MarshalText()
	maybePanic(err)
	assertJSONEquals(t, txt, timeString1, "marshal text")

	var unmarshal Time
	err = unmarshal.UnmarshalText(txt)
	maybePanic(err)
	assertTime(t, unmarshal, "unmarshal text")

	var null Time
	err = null.UnmarshalText(nullJSON)
	maybePanic(err)
	assertNullTime(t, null, "unmarshal null text")
	txt, err = null.MarshalText()
	maybePanic(err)
	assertJSONEquals(t, txt, "", "marshal null text")

	var invalid Time
	err = invalid.UnmarshalText([]byte("hello world"))
	if err == nil {
		t.Error("expected error")
	}
	assertNullTime(t, invalid, "bad string")
}

func TestMarshalTime(t *testing.T) {
	ti := TimeFrom(timeValue1)
	data, err := json.Marshal(ti)
	maybePanic(err)
	assertJSONEquals(t, data, string(timeJSON), "non-empty json marshal")

	ti.Valid = false
	data, err = json.Marshal(ti)
	maybePanic(err)
	assertJSONEquals(t, data, string(nullJSON), "null json marshal")
}

func TestTimeFrom(t *testing.T) {
	ti := TimeFrom(timeValue1)
	assertTime(t, ti, "TimeFrom() time.Time")
}

func TestTimeFromPtr(t *testing.T) {
	ti := TimeFromPtr(&timeValue1)
	assertTime(t, ti, "TimeFromPtr() time")

	null := TimeFromPtr(nil)
	assertNullTime(t, null, "TimeFromPtr(nil)")
}

func TestTimeSetValid(t *testing.T) {
	var ti time.Time
	change := NewTime(ti, false)
	assertNullTime(t, change, "SetValid()")
	change.SetValid(timeValue1)
	assertTime(t, change, "SetValid()")
}

func TestTimePointer(t *testing.T) {
	ti := TimeFrom(timeValue1)
	ptr := ti.Ptr()
	if *ptr != timeValue1 {
		t.Errorf("bad %s time: %#v ≠ %v\n", "pointer", ptr, timeValue1)
	}

	var nt time.Time
	null := NewTime(nt, false)
	ptr = null.Ptr()
	if ptr != nil {
		t.Errorf("bad %s time: %#v ≠ %s\n", "nil pointer", ptr, "nil")
	}
}

func TestTimeScanValue(t *testing.T) {
	var ti Time
	err := ti.Scan(timeValue1)
	maybePanic(err)
	assertTime(t, ti, "scanned time")
	if v, err := ti.Value(); v != timeValue1 || err != nil {
		t.Error("bad value or err:", v, err)
	}

	var null Time
	err = null.Scan(nil)
	maybePanic(err)
	assertNullTime(t, null, "scanned null")
	if v, err := null.Value(); v != nil || err != nil {
		t.Error("bad value or err:", v, err)
	}

	var wrong Time
	err = wrong.Scan(int64(42))
	if err == nil {
		t.Error("expected error")
	}
}

func TestTimeValueOrZero(t *testing.T) {
	valid := TimeFrom(timeValue1)
	if valid.ValueOrZero() != valid.Time || valid.ValueOrZero().IsZero() {
		t.Error("unexpected ValueOrZero", valid.ValueOrZero())
	}

	invalid := valid
	invalid.Valid = false
	if !invalid.ValueOrZero().IsZero() {
		t.Error("unexpected ValueOrZero", invalid.ValueOrZero())
	}
}

func TestTimeIsZero(t *testing.T) {
	str := TimeFrom(timeValue1)
	if str.IsZero() {
		t.Errorf("IsZero() should be false")
	}

	zero := TimeFrom(time.Time{})
	if zero.IsZero() {
		t.Errorf("IsZero() should be false")
	}

	null := TimeFromPtr(nil)
	if !null.IsZero() {
		t.Errorf("IsZero() should be true")
	}
}

func TestTimeEqual(t *testing.T) {
	t1 := NewTime(timeValue1, false)
	t2 := NewTime(timeValue2, false)
	assertTimeEqualIsTrue(t, t1, t2)

	t1 = NewTime(timeValue1, false)
	t2 = NewTime(timeValue3, false)
	assertTimeEqualIsTrue(t, t1, t2)

	t1 = NewTime(timeValue1, true)
	t2 = NewTime(timeValue2, true)
	assertTimeEqualIsTrue(t, t1, t2)

	t1 = NewTime(timeValue1, true)
	t2 = NewTime(timeValue1, true)
	assertTimeEqualIsTrue(t, t1, t2)

	t1 = NewTime(timeValue1, true)
	t2 = NewTime(timeValue2, false)
	assertTimeEqualIsFalse(t, t1, t2)

	t1 = NewTime(timeValue1, false)
	t2 = NewTime(timeValue2, true)
	assertTimeEqualIsFalse(t, t1, t2)

	t1 = NewTime(timeValue1, true)
	t2 = NewTime(timeValue3, true)
	assertTimeEqualIsFalse(t, t1, t2)
}

func TestTimeExactEqual(t *testing.T) {
	t1 := NewTime(timeValue1, false)
	t2 := NewTime(timeValue1, false)
	assertTimeExactEqualIsTrue(t, t1, t2)

	t1 = NewTime(timeValue1, false)
	t2 = NewTime(timeValue2, false)
	assertTimeExactEqualIsTrue(t, t1, t2)

	t1 = NewTime(timeValue1, true)
	t2 = NewTime(timeValue1, true)
	assertTimeExactEqualIsTrue(t, t1, t2)

	t1 = NewTime(timeValue1, true)
	t2 = NewTime(timeValue1, false)
	assertTimeExactEqualIsFalse(t, t1, t2)

	t1 = NewTime(timeValue1, false)
	t2 = NewTime(timeValue1, true)
	assertTimeExactEqualIsFalse(t, t1, t2)

	t1 = NewTime(timeValue1, true)
	t2 = NewTime(timeValue2, true)
	assertTimeExactEqualIsFalse(t, t1, t2)

	t1 = NewTime(timeValue1, true)
	t2 = NewTime(timeValue3, true)
	assertTimeExactEqualIsFalse(t, t1, t2)
}

func assertTime(t *testing.T, ti Time, from string) {
	if ti.Time != timeValue1 {
		t.Errorf("bad %v time: %v ≠ %v\n", from, ti.Time, timeValue1)
	}
	if !ti.Valid {
		t.Error(from, "is invalid, but should be valid")
	}
}

func assertNullTime(t *testing.T, ti Time, from string) {
	if ti.Valid {
		t.Error(from, "is valid, but should be invalid")
	}
}

func assertTimeEqualIsTrue(t *testing.T, a, b Time) {
	t.Helper()
	if !a.Equal(b) {
		t.Errorf("Equal() of Time{%v, Valid:%t} and Time{%v, Valid:%t} should return true", a.Time, a.Valid, b.Time, b.Valid)
	}
}

func assertTimeEqualIsFalse(t *testing.T, a, b Time) {
	t.Helper()
	if a.Equal(b) {
		t.Errorf("Equal() of Time{%v, Valid:%t} and Time{%v, Valid:%t} should return false", a.Time, a.Valid, b.Time, b.Valid)
	}
}

func assertTimeExactEqualIsTrue(t *testing.T, a, b Time) {
	t.Helper()
	if !a.ExactEqual(b) {
		t.Errorf("ExactEqual() of Time{%v, Valid:%t} and Time{%v, Valid:%t} should return true", a.Time, a.Valid, b.Time, b.Valid)
	}
}

func assertTimeExactEqualIsFalse(t *testing.T, a, b Time) {
	t.Helper()
	if a.ExactEqual(b) {
		t.Errorf("ExactEqual() of Time{%v, Valid:%t} and Time{%v, Valid:%t} should return false", a.Time, a.Valid, b.Time, b.Valid)
	}
}
