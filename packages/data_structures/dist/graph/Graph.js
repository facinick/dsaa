"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
const Node_1 = require("./Node");
/*
Map()
1 -> 4 -> 3 -> null
2 -> null
3 -> 1 -> null
4 -> null
*/
class Graph {
    constructor(comparator) {
        this._adjacencyList = new Map();
        this.comparator = comparator;
    }
    get adjacencyList() {
        return this._adjacencyList;
    }
    set adjacencyList(list) { }
    addNode(data) {
        if (!this._adjacencyList.has(data.id)) {
            const newNode = new Node_1.Node(data);
            this._adjacencyList.set(data.id, newNode);
        }
        return this._adjacencyList.get(data.id);
    }
    getNode(id) {
        if (this.hasNode(id)) {
            return this._adjacencyList.get(id);
        }
        else {
            return null;
        }
    }
    hasNode(id) {
        if (this._adjacencyList.has(id)) {
            return true;
        }
        else {
            return false;
        }
    }
    removeNode(id) {
        const nodeToRemove = this._adjacencyList.get(id);
        if (!nodeToRemove)
            return null;
        // Remove the node from all adjacency lists
        this._adjacencyList.forEach((node, key) => {
            this.removeBidirectionalEdge(id, key);
        });
        this._adjacencyList.delete(id);
        return nodeToRemove;
    }
    addEdge(sourceId, destinationId) {
        const sourceNodeExists = this.hasNode(sourceId);
        const destinationNodeExists = this.hasNode(destinationId);
        if (sourceNodeExists && destinationNodeExists) {
            this.addAdjacent(sourceId, destinationId);
        }
    }
    addBidirectionalEdge(nodeAId, nodeBId) {
        this.addEdge(nodeAId, nodeBId);
        this.addEdge(nodeBId, nodeAId);
    }
    addAdjacent(sourceNodeId, adjacentNodeId) {
        const sourceNode = this._adjacencyList.get(sourceNodeId);
        const adjacentNode = this._adjacencyList.get(adjacentNodeId);
        if (sourceNode.next === null) {
            sourceNode.next = new Node_1.Node(adjacentNode.data);
        }
        else {
            let current = sourceNode;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = new Node_1.Node(adjacentNode.data);
        }
    }
    removeBidirectionalEdge(nodeAId, nodeBId) {
        this.removeEdge(nodeAId, nodeBId);
        this.removeEdge(nodeBId, nodeAId);
    }
    removeEdge(sourceId, destinationId) {
        const sourceNodeExists = this.hasNode(sourceId);
        const destinationNodeExists = this.hasNode(destinationId);
        if (sourceNodeExists && destinationNodeExists) {
            this.removeFromAdjacencyList(sourceId, destinationId);
        }
    }
    removeFromAdjacencyList(sourceNodeId, nodeToRemoveId) {
        const sourceNode = this._adjacencyList.get(sourceNodeId);
        const nodeToRemove = this._adjacencyList.get(nodeToRemoveId);
        if (sourceNode === undefined || nodeToRemove === undefined)
            return;
        if (sourceNode === null)
            return;
        let current = sourceNode;
        // Special case: removing the node from the head of the adjacency list
        if (this.comparator(current.data, nodeToRemove.data) === 0) {
            if (current.next !== null) {
                sourceNode.data = current.next.data;
                sourceNode.next = current.next.next;
            }
            else {
                // If the node to remove is the only element in the list
                sourceNode.next = null;
            }
        }
        else {
            // Traverse the list to find the node to remove
            while (current.next !== null && this.comparator(current.next.data, nodeToRemove.data) !== 0) {
                current = current.next;
            }
            if (current.next !== null) {
                current.next = current.next.next;
            }
        }
    }
}
exports.Graph = Graph;
