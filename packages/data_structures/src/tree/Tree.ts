import { Node } from "./Node";

/**
 * Represents a tree.
 * @template T The type of elements in the tree.
 */
class Tree<T> {
  private root: Node<T> | null;
  private comparator: (a: T, b: T) => -1 | 0 | 1;

  /**
   * Constructs a new linked list with the specified comparator function.
   *
   * @param {(a: T, b: T) => -1 | 0 | 1} comparator - The function used for comparing elements. Function returns -1 to select a, 0 to equate and 1 to select b.
   */
  constructor(comparator: (a: T, b: T) => -1 | 0 | 1) {
    this.root = null;
    this.comparator = comparator
  }

  

   /**
   * Node class for the linked list.
   * @template T - Type of element stored in the node.
   */
  static Node = Node;
}

export {
  Tree
};
