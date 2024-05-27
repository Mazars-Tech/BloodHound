export declare const LUXON_DATETIME_REGEX: RegExp;
export declare enum LuxonFormat {
    DATETIME = "yyyy-MM-dd T ZZZZ '(GMT'ZZZ')'",
    TIME = "T ZZZZ' (GMT'ZZZ')'",
    DATETIME_WITH_LINEBREAKS = "yyyy-MM-dd '\n'T ZZZZ\n'(GMT'ZZZ')'",
    TIME_WITH_LINEBREAKS = "T ZZZZ'\n(GMT'ZZZ')'"
}
export type ISO_DATE_STRING = string;
export declare const calculateJobDuration: (start: ISO_DATE_STRING, end: ISO_DATE_STRING) => string;
