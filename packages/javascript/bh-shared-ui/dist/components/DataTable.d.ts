import React from 'react';
export interface Header {
    label: string;
    alignment?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}
export interface DataTableProps {
    headers: Header[];
    data?: any[][];
    isLoading?: boolean;
    showPaginationControls?: boolean;
    paginationProps?: {
        page: number;
        rowsPerPage: number;
        count: number;
        onPageChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => void;
        onRowsPerPageChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    };
}
declare const DataTable: React.FC<DataTableProps>;
export default DataTable;
