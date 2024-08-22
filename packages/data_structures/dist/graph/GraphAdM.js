"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
class Graph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this._adjacencyMatrix = Array.from({ length: numVertices }, () => Array(numVertices).fill(0));
    }
    get adjacencyMatrix() {
        return this._adjacencyMatrix;
    }
    isConnected(sourceId, destinationId) {
        return this._adjacencyMatrix[sourceId][destinationId] === 1;
    }
    addEdge(sourceId, destinationId) {
        this._adjacencyMatrix[sourceId][destinationId] = 1;
    }
    addBidirectionalEdge(nodeAId, nodeBId) {
        this.addEdge(nodeAId, nodeBId);
        this.addEdge(nodeBId, nodeAId);
    }
    removeEdge(sourceId, destinationId) {
        this._adjacencyMatrix[sourceId][destinationId] = 0;
    }
    removeBidirectionalEdge(nodeAId, nodeBId) {
        this.removeEdge(nodeAId, nodeBId);
        this.removeEdge(nodeBId, nodeAId);
    }
}
exports.Graph = Graph;
