declare class Deque<T> {
    private dll;
    private comparator;
    constructor(comparator: (a: T, b: T) => -1 | 0 | 1);
    insertAtStart(element: T): boolean;
    insertAtEnd(element: T): boolean;
    removeAtStart(): T | null;
    removeAtEnd(): T | null;
    isEmpty(): boolean;
    getSize(): number;
    [Symbol.iterator](): IterableIterator<T>;
}
export { Deque };
