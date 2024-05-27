export type CommonSearchType = {
    subheader: string;
    category: string;
    queries: {
        description: string;
        cypher: string;
    }[];
};
export declare const CommonSearches: CommonSearchType[];
