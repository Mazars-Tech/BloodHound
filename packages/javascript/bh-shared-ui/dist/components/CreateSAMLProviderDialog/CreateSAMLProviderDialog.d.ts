/// <reference types="react" />
import { CreateSAMLProviderFormInputs } from '../CreateSAMLProviderForm/CreateSAMLProviderForm';
declare const CreateSAMLProviderDialog: React.FC<{
    open: boolean;
    error?: string;
    onClose: () => void;
    onSubmit: (data: CreateSAMLProviderFormInputs) => void;
}>;
export default CreateSAMLProviderDialog;
