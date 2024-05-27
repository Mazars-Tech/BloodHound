/// <reference types="react" />
declare const WriteOwner: {
    general: import("react").FC<import("..").EdgeInfoProps>;
    windowsAbuse: import("react").FC<import("..").EdgeInfoProps & {
        targetId: string;
    }>;
    linuxAbuse: import("react").FC<import("..").EdgeInfoProps & {
        haslaps: boolean;
    }>;
    opsec: import("react").FC;
    references: import("react").FC;
};
export default WriteOwner;
