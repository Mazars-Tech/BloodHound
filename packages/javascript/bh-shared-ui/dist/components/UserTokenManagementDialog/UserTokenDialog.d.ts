import { NewAuthToken } from 'js-client-library';
import React from 'react';
declare const UserTokenDialog: React.FC<{
    open: boolean;
    onClose: () => void;
    token?: NewAuthToken;
}>;
export default UserTokenDialog;
