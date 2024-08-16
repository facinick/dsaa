// Function to swap two elements in an array
function swap(nums: number[], i: number, j: number) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

/**
* Main function to generate all permutations of an array of numbers
* @param nums - An array of distinct integers.
* @returns An array of arrays containing all unique permutations
*/
function permute(nums: number[]): number[][] {

    // Array to store the final list of all permutations
    const solutions: number[][] = [];

    // Helper function to generate permutations
    function permutations(curr: number[], index: number) {

        // Base case: If the current index equals the length of the array,
        // we've reached the end of one permutation. Add it to solutions.
        if (index === curr.length) {
            solutions.push([...curr]); // Push a copy of the current permutation
            return;
        }

        // Loop through the array to generate permutations
        for (let i = index; i < curr.length; i++) {
            swap(curr, index, i);            // Swap the current element with the element at index i
            permutations(curr, index + 1);   // Recursively generate permutations for the next index
            swap(curr, index, i);            // Backtrack by swapping back to the original state
        }
    }

    // Start the permutation generation process from the 0th index
    permutations(nums, 0);

    return solutions; // Return the list of all generated permutations
}

export {
    permute
}

// Dry Run

// permutations of 1,2,3 is same as, swap 1 with every element, and generate permutations for the rest.

// perm(1 2 3)
// 1 perm(2,3) (swap 1,1) perm(rest = 2,3)
// 1 2 perm(3) (swap 2,2) perm(rest = 3)
// 1 2 3 perm() (swap 3,3) perm(rest = []) -> solution
// 1 3 perm(2)
// 1 3 2 perm()
// 2 perm(1,3) (swap 1,2) perm(rest = 1,3)
// 2 1 perm(3)
// 2 1 3 perm() -> solution
// 2 3 perm(1)
// 2 3 1 perm()
// 3 perm(2,3) (swap 1,3) perm(rest = 2,3)
// 3 2 perm(3)
// 3 2 3 perm()
// 3 2 perm(1)
// 3 2 1 perm() -> solution