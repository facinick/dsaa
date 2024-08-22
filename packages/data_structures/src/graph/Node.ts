type Id = number

class Node<T extends {id: Id}> {
    data: T;
    next: Node<T> | null;

    constructor(data: T, next: Node<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

export {
    Node, 
    Id
}