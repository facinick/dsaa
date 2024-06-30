/**
 * Sorts an array in place of numbers in order decided by a comparator function using the selection sort algorithm. O(n) = ~(N^2)/2
 *
 * @param {Array<number>} values - The array of numbers to be sorted.
 * @param {(a: number, b: number) => -1 | 0 | 1} comparator - A function that compares two numbers.
 * It should return -1 if a is to the left of b, 0 if they rank similarly, and 1 if a is to the right of b.
 */
declare function SelectionSort(values: Array<number>, comparator: (a: number, b: number) => -1 | 0 | 1): void;
export { SelectionSort };
