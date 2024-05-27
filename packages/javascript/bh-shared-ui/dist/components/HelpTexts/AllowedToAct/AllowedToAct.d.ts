/// <reference types="react" />
declare const AllowedToAct: {
    general: import("react").FC<import("..").EdgeInfoProps>;
    windowsAbuse: import("react").FC<{
        sourceName: string;
    }>;
    linuxAbuse: import("react").FC;
    opsec: import("react").FC;
    references: import("react").FC;
};
export default AllowedToAct;
