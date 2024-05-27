"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoadGraph = void 0;
const react_1 = require("react");
const useSigma_1 = require("./useSigma");
function useLoadGraph() {
    const sigma = (0, useSigma_1.useSigma)();
    return (0, react_1.useCallback)((graph, clear = true) => {
        if (sigma && graph) {
            if (clear && sigma.getGraph().order > 0)
                sigma.getGraph().clear();
            sigma.getGraph().import(graph);
            sigma.refresh();
        }
    }, [sigma]);
}
exports.useLoadGraph = useLoadGraph;
//# sourceMappingURL=useLoadGraph.js.map