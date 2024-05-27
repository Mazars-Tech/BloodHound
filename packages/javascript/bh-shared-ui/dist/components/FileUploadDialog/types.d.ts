export type FileForIngest = {
    file: File;
    status: FileStatus;
    errors?: string[];
};
export declare enum FileStatus {
    READY = 0,
    UPLOADING = 1,
    FAILURE = 2,
    DONE = 3
}
export declare enum FileUploadStep {
    ADD_FILES = 0,
    CONFIRMATION = 1,
    UPLOAD = 2
}
