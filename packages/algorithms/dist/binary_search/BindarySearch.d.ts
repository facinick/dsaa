declare class BinarySearch<T> {
    private array;
    private comparator;
    constructor(array: T[], comparator: (a: T, b: T) => -1 | 0 | 1);
    search(target: T): number;
}
export { BinarySearch };
