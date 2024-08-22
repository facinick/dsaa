import { Node } from "./Node";
/**
 * Represents a tree.
 * @template T The type of elements in the tree.
 */
declare class Tree<T> {
    private root;
    private comparator;
    /**
     * Constructs a new tree with the specified comparator function.
     *
     * @param {(a: T, b: T) => -1 | 0 | 1} comparator - The function used for comparing elements. Function returns -1 to select a, 0 to equate and 1 to select b.
     */
    constructor(comparator: (a: T, b: T) => -1 | 0 | 1);
    /**
    * Node class for the Tree.
    * @template T - Type of element stored in the node.
    */
    static Node: typeof Node;
}
export { Tree };
