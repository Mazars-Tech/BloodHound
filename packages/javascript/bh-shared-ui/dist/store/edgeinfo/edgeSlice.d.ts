import { PayloadAction } from '@reduxjs/toolkit';
export type EdgeInfoState = {
    open: boolean;
    selectedEdge: SelectedEdge;
    expandedSections: ExpandedEdgeSections;
};
export type SelectedEdge = {
    id: string;
    name: string;
    data: Record<string, any>;
    sourceNode: {
        name: string;
        id: string | number;
        objectId: string;
        type: string;
        haslaps?: boolean;
    };
    targetNode: {
        name: string;
        id: string | number;
        objectId: string;
        type: string;
        haslaps?: boolean;
    };
} | null;
export type ExpandedEdgeSections = Record<keyof typeof EdgeSections, boolean>;
export declare const EdgeSections: {
    readonly data: "Relationship Information";
    readonly general: "General";
    readonly abuse: "Abuse";
    readonly windowsAbuse: "Windows Abuse";
    readonly linuxAbuse: "Linux Abuse";
    readonly opsec: "OPSEC";
    readonly references: "References";
};
export declare const initialState: EdgeInfoState;
export declare const edgeInfoSlice: import("@reduxjs/toolkit").Slice<EdgeInfoState, {
    setEdgeInfoOpen: (state: import("immer/dist/internal.js").WritableDraft<EdgeInfoState>, action: PayloadAction<boolean>) => void;
    setSelectedEdge: (state: import("immer/dist/internal.js").WritableDraft<EdgeInfoState>, action: PayloadAction<SelectedEdge>) => void;
    edgeSectionToggle: (state: import("immer/dist/internal.js").WritableDraft<EdgeInfoState>, action: PayloadAction<{
        section: keyof typeof EdgeSections;
        expanded: boolean;
    }>) => void;
    collapseAllSections: (state: import("immer/dist/internal.js").WritableDraft<EdgeInfoState>) => void;
}, "edgeinfo">;
export declare const setEdgeInfoOpen: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "edgeinfo/setEdgeInfoOpen">, setSelectedEdge: import("@reduxjs/toolkit").ActionCreatorWithPayload<SelectedEdge, "edgeinfo/setSelectedEdge">, edgeSectionToggle: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    section: keyof typeof EdgeSections;
    expanded: boolean;
}, "edgeinfo/edgeSectionToggle">, collapseAllSections: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"edgeinfo/collapseAllSections">;
declare const _default: import("redux").Reducer<EdgeInfoState>;
export default _default;
