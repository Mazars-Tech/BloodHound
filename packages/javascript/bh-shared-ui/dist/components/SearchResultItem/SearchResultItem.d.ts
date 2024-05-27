import { FC } from 'react';
type NodeSearchResult = {
    label: string;
    objectId: string;
    kind: string;
};
declare const SearchResultItem: FC<{
    item: NodeSearchResult;
    index: number;
    highlightedIndex?: number;
    keyword: string;
    getItemProps: (options: any) => any;
}>;
export default SearchResultItem;
