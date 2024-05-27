import React, { DataHTMLAttributes } from 'react';
interface PageWithTitleProps extends DataHTMLAttributes<HTMLDivElement> {
    title?: string;
    children?: React.ReactNode;
}
declare const PageWithTitle: React.FC<PageWithTitleProps>;
export default PageWithTitle;
