declare class RandomizedQueue<T> {
    private dll;
    private comparator;
    constructor(comparator: (a: T, b: T) => -1 | 0 | 1);
    isEmpty(): boolean;
    getSize(): number;
    enqueue(element: T): boolean;
    dequeue(): T | null;
    sample(): T | null;
}
export { RandomizedQueue };
