/// <reference types="react" />
import { FileForIngest } from '../FileUploadDialog/types';
declare const FileStatusListItem: React.FC<{
    file: FileForIngest;
    onRemove: () => void;
}>;
export default FileStatusListItem;
