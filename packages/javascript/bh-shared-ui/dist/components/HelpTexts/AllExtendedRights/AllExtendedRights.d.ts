/// <reference types="react" />
declare const AllExtendedRights: {
    general: import("react").FC<import("..").EdgeInfoProps>;
    windowsAbuse: import("react").FC<import("..").EdgeInfoProps & {
        haslaps: boolean;
    }>;
    linuxAbuse: import("react").FC<import("..").EdgeInfoProps & {
        haslaps: boolean;
    }>;
    opsec: import("react").FC;
    references: import("react").FC;
};
export default AllExtendedRights;
