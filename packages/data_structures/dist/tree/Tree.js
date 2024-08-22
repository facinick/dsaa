"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
const Node_1 = require("./Node");
/**
 * Represents a tree.
 * @template T The type of elements in the tree.
 */
class Tree {
    /**
     * Constructs a new tree with the specified comparator function.
     *
     * @param {(a: T, b: T) => -1 | 0 | 1} comparator - The function used for comparing elements. Function returns -1 to select a, 0 to equate and 1 to select b.
     */
    constructor(comparator) {
        this.root = null;
        this.comparator = comparator;
    }
}
exports.Tree = Tree;
/**
* Node class for the Tree.
* @template T - Type of element stored in the node.
*/
Tree.Node = Node_1.Node;
