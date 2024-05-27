/// <reference types="react" />
import { FileForIngest } from './types';
declare const FileUploadDialog: React.FC<{
    files: FileForIngest[];
    open: boolean;
    submitDisabled: boolean;
    onClose: () => void;
    onAppendFiles: (files: FileForIngest[]) => void;
    onRemoveFile: (index: number) => void;
    onUpload: () => void;
    onExited?: () => void;
    uploadMessage?: string;
}>;
export default FileUploadDialog;
