import { Node } from "./Node";
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
/**
* Node class for the Tree.
* @template T - Type of element stored in the node.
*/
Tree.Node = Node;
export { Tree };
