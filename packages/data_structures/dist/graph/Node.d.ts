type Id = number;
declare class Node<T extends {
    id: Id;
}> {
    data: T;
    next: Node<T> | null;
    constructor(data: T, next?: Node<T> | null);
}
export { Node, Id };
