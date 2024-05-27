import React from 'react';
declare const Enable2FADialog: React.FC<{
    open: boolean;
    onClose: () => void;
    onCancel: () => void;
    onSavePassword: (password: string) => Promise<void>;
    onSaveOTP: (OTP: string) => Promise<void>;
    onSave: () => void;
    QRCode: string;
    TOTPSecret: string;
    error?: string;
}>;
export default Enable2FADialog;
