import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
export type IconInfo = {
    icon: IconDefinition;
    color: string;
    url?: string;
};
export type IconDictionary = {
    [index: string]: IconInfo;
};
export type GlyphDictionary = {
    [index: string]: IconInfo & {
        iconColor: string;
    };
};
export declare enum GlyphKind {
    TIER_ZERO = 0,
    EXPAND = 1,
    COLLAPSE = 2
}
export declare const NODE_ICON: IconDictionary;
export declare const GLYPHS: GlyphDictionary;
export declare const UNKNOWN_ICON: IconInfo;
