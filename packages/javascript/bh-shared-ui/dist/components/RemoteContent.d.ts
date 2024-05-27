import React from 'react';
declare const RemoteContent: React.FC<{
    url: string;
    baseURL?: string;
    markdown?: boolean;
    fallback?: string | React.ReactNode;
}>;
export default RemoteContent;
