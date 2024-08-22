/**
 * Sorts an array in place of numbers in order decided by a comparator function using the selection sort algorithm. O(n) = ~(N^2)/2
 *
 * @param {Array<number>} values - The array of numbers to be sorted.
 * @param {(a: number, b: number) => -1 | 0 | 1} comparator - A function that compares two numbers.
 * It should return -1 if a is to the left of b, 0 if they rank similarly, and 1 if a is to the right of b.
 */
function SelectionSort(values, comparator) {
    let n = values.length;
    // when we reach last element, no need to do anything as it's already sorted hence i<n-1
    for (let i = 0; i < n - 1; i++) {
        // each outer for loop we are sorting all elements from i to end of list. any before i is sorted.
        let minimumIndex = i;
        // assume minimim is i, now we check all to the right, find the least that's lesser than i, swap it with i.
        // this loop after running ensures the element at i is sorted now, so we can move on to next i.
        for (let j = i + 1; j < n; j++) {
            if (comparator(values[j], values[minimumIndex]) === -1) {
                minimumIndex = j;
            }
        }
        const temp = values[i];
        values[i] = values[minimumIndex];
        values[minimumIndex] = temp;
    }
}
export { SelectionSort };
// n:       6
// index:  [0,1,2,3,4,5]
// values: [4,5,8,2,3,1]
// 0
//   1 2 3 4 5
//   [1,5,8,2,3,4]
// 1
//   2 3 4 5
//   [1,2,8,5,3,4
// 2 
//   3 4 5
//   [1,5,2,3,3,4
// 3
//   4 5
//   [1,5,8,2,3,4
// 4 
//   5
//   [1,5,8,2,3,4
