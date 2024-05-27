import React from 'react';
declare const Disable2FADialog: React.FC<{
    open: boolean;
    onClose: () => void;
    onCancel: () => void;
    onSave: (secret: string) => void;
    error?: string;
    secret: string;
    onSecretChange: (e: any) => void;
    contentText: string;
}>;
export default Disable2FADialog;
