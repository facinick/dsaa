declare class Node<T> {
    value: T;
    left: Node<T> | null;
    right: Node<T> | null;
    constructor(value: T);
}
export { Node };
