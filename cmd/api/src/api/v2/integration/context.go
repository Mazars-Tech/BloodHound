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

package integration

import (
	"context"
	"sync"

	"github.com/specterops/bloodhound/src/api/v2/apiclient"
	"github.com/specterops/bloodhound/src/config"
	"github.com/specterops/bloodhound/src/database"
	"github.com/specterops/bloodhound/src/test"
	"github.com/specterops/bloodhound/src/test/fixtures"
	"github.com/specterops/bloodhound/dawgs/graph"
)

// Context holds integration test relevant information to be passed around to functions
type Context struct {
	adminClient   *apiclient.Client
	cfg           *config.Configuration
	DB            database.Database
	Graph         graph.Database
	FixtureLoader fixtures.Loader
	TestCtrl      test.Controller
	Ctx           context.Context
	CtxDoneFunc   func()
	WaitGroup     *sync.WaitGroup
}

// NewContext creates a new integration Context
func NewContext(testCtrl test.Controller, startFunc APIStartFunc) Context {
	ctx, ctxDoneFunc := context.WithCancel(context.Background())

	testCtx := Context{
		TestCtrl:      testCtrl,
		Ctx:           ctx,
		CtxDoneFunc:   ctxDoneFunc,
		FixtureLoader: fixtures.NewLoader(fixtures.NewTestErrorHandler(testCtrl)),
		WaitGroup:     &sync.WaitGroup{},
	}

	// Enable the API
	testCtx.EnableAPI(startFunc)

	// Register teardown after starting the server since we have now mutated the environment
	testCtrl.Cleanup(testCtx.Teardown)

	return testCtx
}

func (s *Context) Init() {

}

// Teardown stops the integration test server
func (s *Context) Teardown() {
	s.CtxDoneFunc()
	s.WaitGroup.Wait()
}
