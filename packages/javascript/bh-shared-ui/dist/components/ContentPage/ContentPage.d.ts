import React, { DataHTMLAttributes } from 'react';
interface ContentPageProps extends DataHTMLAttributes<HTMLDivElement> {
    title?: string;
    children?: React.ReactNode;
    actionButton?: React.ReactNode;
}
declare const ContentPage: React.FC<ContentPageProps>;
export default ContentPage;
