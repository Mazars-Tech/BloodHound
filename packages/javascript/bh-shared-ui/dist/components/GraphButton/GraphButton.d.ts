import { FC } from 'react';
export interface GraphButtonProps {
    onClick: (e?: any) => void;
    displayText: string | JSX.Element;
    disabled?: boolean;
}
declare const GraphButton: FC<GraphButtonProps>;
export default GraphButton;
