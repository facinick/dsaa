import { Node } from "./Node";
declare class LinkedList<T> {
    private size;
    private head;
    private comparator;
    constructor(comparator: (a: T, b: T) => -1 | 0 | 1);
    append(element: T): boolean;
    prepend(element: T): boolean;
    insertAtIndex(index: number, element: T): boolean;
    deleteAtIndex(index: number): T | null;
    pop(): T | null;
    shift(): T | null;
    delete(element: T): void;
    search(data: T): Node<T> | null;
    print(): void;
    getSize(): number;
    isEmpty(): boolean;
}
export { LinkedList };
