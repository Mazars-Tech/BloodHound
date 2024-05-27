import React from 'react';
declare const CreateUserTokenDialog: React.FC<{
    open: boolean;
    onCancel: () => void;
    onSubmit: (newToken: {
        token_name: string;
    }) => void;
}>;
export default CreateUserTokenDialog;
