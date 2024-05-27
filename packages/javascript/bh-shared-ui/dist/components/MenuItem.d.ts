import React, { DataHTMLAttributes } from 'react';
interface MenuItemProps extends DataHTMLAttributes<HTMLDivElement> {
    title: string;
    active: boolean;
    icon?: React.ReactElement;
    onClick: () => void;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
