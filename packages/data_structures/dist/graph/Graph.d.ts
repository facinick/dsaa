import { Id, Node } from './Node';
export declare class Graph<T extends {
    id: Id;
}> {
    private _adjacencyList;
    private comparator;
    constructor(comparator: (a: T, b: T) => -1 | 0 | 1);
    get adjacencyList(): Map<Id, Node<T> | null>;
    set adjacencyList(list: any);
    addNode(data: T): Node<T>;
    getNode(id: T['id']): Node<T> | null;
    hasNode(id: T['id']): boolean;
    removeNode(id: T['id']): Node<T> | null;
    addEdge(sourceId: T['id'], destinationId: T['id']): void;
    addBidirectionalEdge(nodeAId: T['id'], nodeBId: T['id']): void;
    private addAdjacent;
    removeBidirectionalEdge(nodeAId: T['id'], nodeBId: T['id']): void;
    removeEdge(sourceId: T['id'], destinationId: T['id']): void;
    private removeFromAdjacencyList;
}
