/// <reference types="react" />
import Sigma from "sigma/sigma";
export interface SigmaContextInterface {
    sigma: Sigma;
    container: HTMLElement;
}
export declare const SigmaContext: import("react").Context<SigmaContextInterface | null>;
export declare const SigmaProvider: import("react").Provider<SigmaContextInterface | null>;
export declare function useSigmaContext(): SigmaContextInterface;
