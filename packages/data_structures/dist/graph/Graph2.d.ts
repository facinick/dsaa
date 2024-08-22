interface PathFindingAlgorithm {
}
type IsValidMoveFunction = (source: GraphNode, destination: GraphNode) => boolean;
interface GraphNode {
}
declare class Graph<GraphNode> {
    private nRows;
    private nCols;
    private _adjacencyMatrix;
    private pathFindingAlgorithm;
    private isValidMoveFunction;
    constructor(nRows: number, nCols: number, pathFindingAlgorithm: PathFindingAlgorithm, isValidMoveFunction: IsValidMoveFunction);
    private initializeAdjacencyMatrix;
    setPathFindingAlgorithm: (algorithm: PathFindingAlgorithm) => void;
    setIsValidMoveFunction: (func: IsValidMoveFunction) => void;
}
