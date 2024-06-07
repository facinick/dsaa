declare class Stack<T> {
    private s;
    private comparator;
    constructor(comparator: (a: T, b: T) => -1 | 0 | 1);
    push(element: T): void;
    pop(): T | null;
    isEmpty(): boolean;
    getSize(): number;
    search(element: T): T | null;
    [Symbol.iterator](): IterableIterator<T>;
}
export { Stack };
