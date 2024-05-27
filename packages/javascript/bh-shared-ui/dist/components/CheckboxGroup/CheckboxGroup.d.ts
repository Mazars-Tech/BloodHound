/// <reference types="react" />
export interface CheckboxGroupProps {
    groupTitle: string;
    handleCheckboxFilter: any;
    options: {
        name: string;
        label: string;
    }[];
}
declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
export default CheckboxGroup;
