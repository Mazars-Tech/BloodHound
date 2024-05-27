import { SxProps } from '@mui/material';
import { FC } from 'react';
import { FlatNode, GraphNodes } from './types';
export declare const PLACEHOLDER_TEXT = "Search Current Results";
export declare const NO_RESULTS_TEXT = "No result found in current results";
declare const SearchCurrentNodes: FC<{
    sx?: SxProps;
    currentNodes: GraphNodes;
    onSelect: (node: FlatNode) => void;
    onClose?: () => void;
}>;
export default SearchCurrentNodes;
