// [0...i-1] = sorted
// i = element to insert in sorted list on left, needs to swap with i-1 until i-1 < i or i-1 >= 0
// [i...n-1] = not sorted
/**
 * Sorts an array in place of numbers in order decided by a comparator function using the insertion sort algorithm. O(n) = ~(N^2)/2
 *
 * @param {Array<number>} values - The array of numbers to be sorted.
 * @param {(a: number, b: number) => -1 | 0 | 1} comparator - A function that compares two numbers.
 * It should return -1 if a is to the left of b, 0 if they rank similarly, and 1 if a is to the right of b.
 */
function InsertionSort(values, comparator) {
    const n = values.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j > 0 && comparator(values[j - 1], values[j]) === 1; j--) {
            let temp = values[j - 1];
            values[j - 1] = values[j];
            values[j] = temp;
        }
    }
}
export { InsertionSort };
