import React from 'react';
interface InfiniteScrollingTableProps {
    fetchDataCallback: ({ skip, limit }: {
        skip: number;
        limit: number;
    }) => Promise<{
        data: any[];
        total: number;
        limit: number;
        skip: number;
    }>;
    itemCount?: number;
    onClick?: (item: any) => void;
}
declare const InfiniteScrollingTable: React.FC<InfiniteScrollingTableProps>;
export default InfiniteScrollingTable;
