export type EntityPropertyKind = 'ad' | 'az' | 'cm' | null;
export type EntityField = {
    label: string;
    value: string | number | boolean | any[];
    kind?: EntityPropertyKind;
    keyprop?: string;
};
export declare enum ADSpecificTimeProperties {
    WHEN_CREATED = "whencreated",
    LAST_LOGON = "lastlogon",
    LAST_LOGON_TIMESTAMP = "lastlogontimestamp",
    PASSWORD_LAST_SET = "pwdlastset"
}
export declare const formatADSpecificTime: (timeValue: number, keyprop: ADSpecificTimeProperties) => string;
export declare const formatNumber: (value: number, kind?: EntityPropertyKind, keyprop?: string) => string;
export declare const formatBoolean: (value: boolean) => string;
export declare const formatString: (value: string, keyprop?: string) => any;
export declare const formatList: (field: EntityField) => string[];
export declare const format: (field: EntityField) => string | string[];
