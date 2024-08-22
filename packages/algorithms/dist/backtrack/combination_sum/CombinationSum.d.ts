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
declare function combinationSum(candidates: number[], target: number): number[][];
export { combinationSum };
