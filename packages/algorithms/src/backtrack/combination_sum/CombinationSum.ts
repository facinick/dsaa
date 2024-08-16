/**
 * Given an array of distinct integers `candidates` and a target integer `target`,
 * this function returns a list of all unique combinations of candidates where the
 * chosen numbers sum to the target. The same number may be chosen multiple times.
 * The function ensures that all combinations are unique by ensuring at least one
 * number in the combination has a different frequency.
 * 
 * Example:
 * - Input: candidates = [2, 3, 6, 7], target = 7
 * - Output: [[2, 2, 3], [7]]
 * 
 * Constraints:
 * - 1 <= candidates.length <= 30
 * - 2 <= candidates[i] <= 40
 * - All elements of candidates are distinct.
 * - 1 <= target <= 40
 * 
 * @param candidates - An array of distinct integers.
 * @param target - The target integer to reach by summing the candidates.
 * @returns An array of arrays containing all unique combinations that sum to the target.
 */
function combinationSum(candidates: number[], target: number): number[][] {
    
    // Array to store the final unique combinations that sum to the target.
    const solutions: number[][] = [];

    /**
     * Depth-First Search (DFS) helper function to explore all potential combinations.
     * 
     * @param selected - The current combination being explored.
     * @param i - The current index in the candidates array.
     * @param sum - The current sum of the numbers in the selected combination.
     */
    function dfs(selected: number[], i: number, sum: number): void {

        // Base Case 1: If the current sum exceeds the target or if the index is out of bounds,
        // stop the current branch of exploration.
        if (sum > target || i >= candidates.length) {
            return;
        }

        // Base Case 2: If the current sum equals the target, 
        // add the current combination to the solutions array.
        if (sum === target) {
            solutions.push([...selected]);  // Spread operator to create a copy of `selected`.
            return;
        }

        // Recursive Case 1: Include the current candidate (candidates[i]) in the combination.
        // Continue exploring with the same index `i` to allow the same candidate to be selected again.
        dfs([...selected, candidates[i]], i, sum + candidates[i]);

        // Recursive Case 2: Skip the current candidate and move to the next one in the array.
        dfs([...selected], i + 1, sum);
    }

    // Start the DFS with an empty combination, starting at index 0, and with an initial sum of 0.
    dfs([], 0, 0);

    // list of unique combinations that sum to the target.
    return solutions;
}

export {
    combinationSum
};
