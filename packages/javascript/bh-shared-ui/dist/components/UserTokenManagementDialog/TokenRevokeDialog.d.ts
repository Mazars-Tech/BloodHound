import { AuthToken } from 'js-client-library';
import React from 'react';
declare const TokenRevokeDialog: React.FC<{
    open: boolean;
    onCancel: () => void;
    onConfirm: () => void;
    token?: AuthToken;
}>;
export default TokenRevokeDialog;
