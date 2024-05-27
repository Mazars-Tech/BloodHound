import { FC } from 'react';
interface PrebuiltSearchListProps {
    listSections: ListSection[];
    clickHandler: (query: string) => void;
    deleteHandler?: (id: number) => void;
}
type ListSection = {
    subheader: string;
    lineItems: LineItem[];
};
export type LineItem = {
    id?: number;
    description: string;
    cypher: string;
    canEdit?: boolean;
};
declare const PrebuiltSearchList: FC<PrebuiltSearchListProps>;
export default PrebuiltSearchList;
