/// <reference types="react" />
import { FileUploadJob } from './types';
declare const FinishedIngestLog: React.FC<{
    ingestJobs: FileUploadJob[];
    paginationProps?: {
        page: number;
        rowsPerPage: number;
        count: number;
        onPageChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => void;
        onRowsPerPageChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    };
}>;
export default FinishedIngestLog;
