/// <reference types="react" />
export interface CreateSAMLProviderFormInputs {
    name: string;
    metadata: FileList;
}
declare const CreateSAMLProviderForm: React.FC<{
    error?: string;
    onClose: () => void;
    onSubmit: (data: CreateSAMLProviderFormInputs) => void;
}>;
export default CreateSAMLProviderForm;
