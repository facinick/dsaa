class Node<T> {
    public value: T;
    public left: Node<T> | null
    public right: Node<T> | null

    constructor(value: T) {
        this.value = value
        this.left = null
        this.right = null
    }
}

export {
    Node
};
