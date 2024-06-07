declare class DoublyLinkedList<T> {
    private size;
    private head;
    private tail;
    private comparator;
    constructor(comparator: (a: T, b: T) => -1 | 0 | 1);
    insertAtTail(element: T): boolean;
    insertAtHead(element: T): boolean;
    insertAtIndex(index: number, element: T): boolean;
    deleteAtIndex(index: number): T | null;
    deleteAtTail(): T | null;
    deleteAtHead(): T | null;
    search(data: T): T | null;
    getSize(): number;
    isEmpty(): boolean;
    [Symbol.iterator](): IterableIterator<T>;
}
export { DoublyLinkedList };
