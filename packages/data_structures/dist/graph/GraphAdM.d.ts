import { Id } from './Node';
export declare class Graph<T extends {
    id: Id;
}> {
    private readonly numVertices;
    private readonly _adjacencyMatrix;
    constructor(numVertices: number);
    get adjacencyMatrix(): number[][];
    isConnected(sourceId: Id, destinationId: Id): boolean;
    addEdge(sourceId: Id, destinationId: Id): void;
    addBidirectionalEdge(nodeAId: Id, nodeBId: Id): void;
    removeEdge(sourceId: Id, destinationId: Id): void;
    removeBidirectionalEdge(nodeAId: Id, nodeBId: Id): void;
}
