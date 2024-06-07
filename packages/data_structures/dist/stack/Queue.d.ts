declare class Queue<T> {
    private q;
    private comparator;
    constructor(comparator: (a: T, b: T) => -1 | 0 | 1);
    enqueue(element: T): void;
    dequeue(): T | null;
    isEmpty(): boolean;
    getSize(): number;
    search(element: T): T | null;
    [Symbol.iterator](): IterableIterator<T>;
}
export { Queue };
