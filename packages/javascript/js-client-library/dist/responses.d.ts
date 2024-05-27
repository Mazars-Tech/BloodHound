export type BasicResponse<T> = {
    data: T;
};
export type TimeWindowedResponse<T> = BasicResponse<T> & {
    start: string;
    end: string;
};
export type PaginatedResponse<T> = Partial<TimeWindowedResponse<T>> & Required<BasicResponse<T>> & {
    count: number;
    limit: number;
    skip: number;
};
type TimestampFields = {
    created_at: string;
    updated_at: string;
    deleted_at: {
        Time: string;
        Valid: boolean;
    };
};
type PostureStat = TimestampFields & {
    domain_sid: string;
    exposure_index: number;
    tier_zero_count: number;
    critical_risk_count: number;
    id: number;
};
export type PostureResponse = PaginatedResponse<PostureStat[]>;
export type AuthToken = TimestampFields & {
    hmac_method: string;
    id: string;
    last_access: string;
    name: string;
    user_id: string;
};
export type ListAuthTokensResponse = BasicResponse<{
    tokens: AuthToken[];
}>;
export type NewAuthToken = AuthToken & {
    key: string;
};
export type CreateAuthTokenResponse = BasicResponse<NewAuthToken>;
export type SavedQuery = {
    id: number;
    name: string;
    query: string;
    user_id: string;
};
export {};
