/**
 * Class representing a node in a doubly linked list.
 * @template T - Type of element stored in the node.
 */
declare class Node<T> {
    value: T;
    next: Node<T> | null;
    previous: Node<T> | null;
    /**
     * Creates an instance of a doubly linked list Node.
     * @template T - Type of element stored in the node.
     * @param {T} value - Value / element that this node will have.
     */
    constructor(value: T);
}
export { Node };
