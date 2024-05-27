/// <reference types="react" />
declare const SAMLProviderTable: React.FC<{
    SAMLProviders: any[];
    loading: boolean;
    onDeleteSAMLProvider: (SAMLProviderId: string) => void;
}>;
export default SAMLProviderTable;
