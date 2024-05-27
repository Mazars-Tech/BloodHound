/// <reference types="react" />
declare const Owns: {
    general: import("react").FC<import("..").EdgeInfoProps>;
    windowsAbuse: import("react").FC<import("..").EdgeInfoProps & {
        targetId: string;
        haslaps: boolean;
    }>;
    linuxAbuse: import("react").FC<import("..").EdgeInfoProps & {
        targetId: string;
        haslaps: boolean;
    }>;
    opsec: import("react").FC;
    references: import("react").FC;
};
export default Owns;
