declare class DynamicArrayStack<T> {
    private stack;
    private top;
    private comparator;
    constructor(comparator: (a: T, b: T) => -1 | 0 | 1);
    push(element: T): void;
    pop(): T | null;
    private resize;
    getSize(): number;
    search(element: T): T | null;
    isEmpty(): boolean;
    getMaxSpace(): number;
    [Symbol.iterator](): IterableIterator<T>;
}
export { DynamicArrayStack };
