import React from 'react';
declare const PasswordDialog: React.FC<{
    open: boolean;
    onClose: () => void;
    userId: string;
    showNeedsPasswordReset?: boolean;
    onSave: ({ userId, secret, needsPasswordReset, }: {
        userId: string;
        secret: string;
        needsPasswordReset: boolean;
    }) => void;
}>;
export default PasswordDialog;
