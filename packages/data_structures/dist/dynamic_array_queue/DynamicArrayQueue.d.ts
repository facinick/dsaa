declare class DynamicArrayQueue<T> {
    private q;
    private head;
    private tail;
    private comparator;
    constructor(comparator: (a: T, b: T) => -1 | 0 | 1);
}
export { DynamicArrayQueue };
