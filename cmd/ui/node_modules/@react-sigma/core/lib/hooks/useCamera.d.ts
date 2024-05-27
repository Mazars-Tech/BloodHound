import { AnimateOptions } from "sigma/utils/animate";
import { CameraState } from "sigma/types";
declare type CameraOptions = Partial<AnimateOptions> & {
    factor?: number;
};
export declare function useCamera(options?: CameraOptions): {
    zoomIn: (options?: CameraOptions) => void;
    zoomOut: (options?: CameraOptions) => void;
    reset: (options?: Partial<AnimateOptions>) => void;
    goto: (state: Partial<CameraState>, options?: Partial<AnimateOptions>) => void;
    gotoNode: (nodeKey: string, options?: Partial<AnimateOptions>) => void;
};
export {};
