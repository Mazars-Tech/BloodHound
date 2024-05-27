export type FileUploadJob = {
    id: number;
    user_id: string;
    user_email_address: string;
    status: FileUploadJobStatus;
    status_message: string;
    start_time: string;
    end_time: string;
    last_ingest: string;
};
export declare enum FileUploadJobStatus {
    INVALID = -1,
    READY = 0,
    RUNNING = 1,
    COMPLETE = 2,
    CANCELED = 3,
    TIMED_OUT = 4,
    FAILED = 5,
    INGESTING = 6
}
export declare const FileUploadJobStatusToString: Record<FileUploadJobStatus, string>;
