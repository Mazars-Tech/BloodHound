import { FC, MouseEvent, PropsWithChildren } from 'react';
interface Props {
    tip?: string;
    tipPlacment?: 'left' | 'bottom';
    click?: (event: MouseEvent) => void;
    size?: 'small' | 'medium';
    badge?: number;
    className?: string;
}
declare const Icon: FC<PropsWithChildren<Props>>;
export default Icon;
