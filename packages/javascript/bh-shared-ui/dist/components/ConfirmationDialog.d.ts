import React from 'react';
declare const ConfirmationDialog: React.FC<{
    open: boolean;
    title: string;
    text: string;
    onClose: (response: boolean) => void;
    isLoading?: boolean;
    error?: string;
}>;
export default ConfirmationDialog;
