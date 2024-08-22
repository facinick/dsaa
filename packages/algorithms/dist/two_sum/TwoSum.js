// V1, O(N^2)
// function twoSum(nums: number[], target: number): number[] {
//     // because findIndex finds first index, in case of same valued pair we want index of both
//     for(let i = nums.length - 1; i >= 0; i--) {
//         const otherIndex = nums.findIndex(num => num === target-nums[i])
//         if(otherIndex !== -1) {
//             return [i, otherIndex]
//         }
//     }
// }
// V2, O(N)
function TwoSum(nums, target) {
    if (nums.length < 2) {
        throw new Error(`Array must have atleast 2 elements`);
    }
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numMap.has(target - nums[i])) {
            return [numMap.get(target - nums[i]), i];
        }
        else {
            numMap.set(nums[i], i);
        }
    }
    throw new Error(`No pair found that sums to ${target}`);
}
export { TwoSum };
