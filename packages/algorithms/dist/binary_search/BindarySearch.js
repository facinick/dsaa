"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearch = void 0;
class BinarySearch {
    constructor(array, comparator) {
        this.array = array;
        this.comparator = comparator;
    }
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
