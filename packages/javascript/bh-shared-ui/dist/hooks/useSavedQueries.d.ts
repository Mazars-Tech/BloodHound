import { RequestOptions, SavedQuery, CreateUserQueryRequest } from 'js-client-library';
export declare const savedQueryKeys: {
    all: readonly ["savedQueries"];
};
export declare const getSavedQueries: (options?: RequestOptions) => Promise<SavedQuery[]>;
export declare const createSavedQuery: (savedQuery: CreateUserQueryRequest, options?: RequestOptions) => Promise<SavedQuery>;
export declare const deleteSavedQuery: (id: number) => Promise<void>;
export declare const useSavedQueries: () => import("react-query").UseQueryResult<SavedQuery[], unknown>;
export declare const useCreateSavedQuery: () => import("react-query").UseMutationResult<SavedQuery, unknown, CreateUserQueryRequest, unknown>;
export declare const useDeleteSavedQuery: () => import("react-query").UseMutationResult<void, unknown, number, unknown>;
