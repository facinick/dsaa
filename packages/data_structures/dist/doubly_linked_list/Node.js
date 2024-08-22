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
export { Node };
