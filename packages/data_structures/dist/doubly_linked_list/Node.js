"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
/**
 * Class representing a node in a doubly linked list.
 * @template T - Type of element stored in the node.
 */
class Node {
    /**
     * Creates an instance of a doubly linked list Node.
     * @template T - Type of element stored in the node.
     * @param {T} value - Value / element that this node will have.
     */
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}
exports.Node = Node;
