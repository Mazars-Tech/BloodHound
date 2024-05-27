import React from 'react';
interface OneTimePasscodeFormProps {
    onSubmit: (otp: string) => void;
    onCancel: () => void;
    loading?: boolean;
}
declare const OneTimePasscodeForm: React.FC<OneTimePasscodeFormProps>;
export default OneTimePasscodeForm;
