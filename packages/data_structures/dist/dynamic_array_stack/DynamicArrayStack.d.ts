declare class DynamicArrayStack<T> {
    private stack;
    private top;
    constructor();
    push(element: T): void;
    pop(): T | null;
    private resize;
    getSize(): number;
    get(index: number): T | null;
    set(index: number, value: T): void;
    search(element: T): T | null;
    isEmpty(): boolean;
    getMaxSpace(): number;
    [Symbol.iterator](): IterableIterator<T>;
}
export { DynamicArrayStack };
