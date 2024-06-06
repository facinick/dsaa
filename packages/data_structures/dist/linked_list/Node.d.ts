declare class Node<T> {
    value: T;
    next: Node<T> | null;
    constructor(value: T);
}
export { Node };
