/**
 * Binary search implementation for a sorted array.
 *
 * This class provides a binary search algorithm that can be used to efficiently search for a target element within a sorted array.
 *
 * @template T The type of elements in the array.
 */
declare class BinarySearch<T> {
    /**
     * The internal array that holds the sorted elements.
     */
    private array;
    /**
     * A comparator function used to compare elements in the array.
     *
     * This function should take two arguments of type T and return -1 if the first argument is less than the second, 0 if they are equal, and 1 if the first argument is greater than the second.
     */
    private comparator;
    /**
     * Constructs a new BinarySearch instance.
     *
     * @param array The sorted array to search within.
     * @param comparator The comparator function used to compare elements in the array.
     */
    constructor(array: T[], comparator: (a: T, b: T) => -1 | 0 | 1);
    /**
     * Searches for a target element within the sorted array.
     *
     * This method implements the binary search algorithm to find the index of the target element within the array. If the target element is not found, it returns -1.
     *
     * @param target The element to search for.
     * @returns The index of the target element if found, otherwise -1.
     */
    search(target: T): number;
}
export { BinarySearch };
