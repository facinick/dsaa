"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearch = void 0;
/**
 * Binary search implementation for a sorted array.
 *
 * This class provides a binary search algorithm that can be used to efficiently search for a target element within a sorted array.
 *
 * @template T The type of elements in the array.
 */
class BinarySearch {
    /**
     * Constructs a new BinarySearch instance.
     *
     * @param array The sorted array to search within.
     * @param comparator The comparator function used to compare elements in the array.
     */
    constructor(array, comparator) {
        this.array = array;
        this.comparator = comparator;
    }
    /**
     * Searches for a target element within the sorted array.
     *
     * This method implements the binary search algorithm to find the index of the target element within the array. If the target element is not found, it returns -1.
     *
     * @param target The element to search for.
     * @returns The index of the target element if found, otherwise -1.
     */
    search(target) {
        let left = 0;
        let right = this.array.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const comparison = this.comparator(this.array[mid], target);
            if (comparison === 0) {
                return mid;
            }
            else if (comparison < 0) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return -1;
    }
}
exports.BinarySearch = BinarySearch;
