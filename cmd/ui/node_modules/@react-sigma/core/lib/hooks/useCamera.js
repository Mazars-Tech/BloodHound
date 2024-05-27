"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCamera = void 0;
const react_1 = require("react");
const lodash_1 = require("lodash");
const useSigma_1 = require("./useSigma");
function useCamera(options) {
    const sigma = (0, useSigma_1.useSigma)();
    const defaultOptions = (0, react_1.useRef)();
    if (!(0, lodash_1.isEqual)(defaultOptions.current, options))
        defaultOptions.current = options;
    const zoomIn = (0, react_1.useCallback)((options) => {
        sigma.getCamera().animatedZoom(Object.assign(Object.assign({}, defaultOptions.current), options));
    }, [sigma, defaultOptions]);
    const zoomOut = (0, react_1.useCallback)((options) => {
        sigma.getCamera().animatedUnzoom(Object.assign(Object.assign({}, defaultOptions.current), options));
    }, [sigma, defaultOptions]);
    const reset = (0, react_1.useCallback)((options) => {
        sigma.getCamera().animatedReset(Object.assign(Object.assign({}, defaultOptions.current), options));
    }, [sigma, defaultOptions]);
    const goto = (0, react_1.useCallback)((state, options) => {
        sigma.getCamera().animate(state, Object.assign(Object.assign({}, defaultOptions.current), options));
    }, [sigma, defaultOptions]);
    const gotoNode = (0, react_1.useCallback)((nodeKey, options) => {
        const nodeDisplayData = sigma.getNodeDisplayData(nodeKey);
        if (nodeDisplayData)
            sigma.getCamera().animate(nodeDisplayData, Object.assign(Object.assign({}, defaultOptions.current), options));
        else
            console.log(`Node ${nodeKey} not found`);
    }, [sigma, defaultOptions]);
    return { zoomIn, zoomOut, reset, goto, gotoNode };
}
exports.useCamera = useCamera;
//# sourceMappingURL=useCamera.js.map