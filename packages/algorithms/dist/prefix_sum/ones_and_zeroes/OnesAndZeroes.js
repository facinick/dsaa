/*
    1. Transformed 0 to -1
    2. Created a prefix xum
    Principal one: What does two prefix sums being equl means? that means, the number of 1s and -1s between is same, as thats why they cancel out and the prefix sum remains same. So, essentially, if two prefix sums are same, they are ends of the solution sub array. How do we find this, of maximum length? i.e., among Every paid of same prefix sum values, which one is the longest?

    Principal two: To do the above, we can store first occurance of every prefix sum, as the next time we encuonter it, we can know that for THIS prefix sum, this latest index - first ever recorded index is the maximum. similarly, for every prefix sum.
*/
// index:       0   1   2   3   4   5   6   7
// nums:        0   0   1   0   0   0   1   1
// transformed: -1  -1  1   -1  -1  -1  1   1
// ps:          -1  -2  -1  -2  -3  -4  -3  -2
//              |--------|
//                  |--------|
//                              |--------|
//                  |------------------------|
function transformZeroes(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums[i] = -1;
        }
    }
}
function generatePrefixSum(nums) {
    if (nums.length === 0) {
        throw new Error(`Atleast one element required`);
    }
    let prefixSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
    }
    return prefixSum;
}
function findMaxLengthunderstand(nums) {
    let maxLength = 0;
    let firstPrefixSumOccurance = new Map();
    // starts with sum 0 before even reading first element
    firstPrefixSumOccurance.set(0, -1);
    transformZeroes(nums);
    const prefixSum = generatePrefixSum(nums);
    for (let i = 0; i < prefixSum.length; i++) {
        if (firstPrefixSumOccurance.has(prefixSum[i])) {
            const newLength = i - firstPrefixSumOccurance.get(prefixSum[i]);
            if (newLength > maxLength) {
                maxLength = newLength;
            }
        }
        else {
            firstPrefixSumOccurance.set(prefixSum[i], i);
        }
    }
    return maxLength;
}
;
function findMaxLength(nums) {
    if (nums.length === 0) {
        throw new Error(`expecting atleast one element`);
    }
    let firstOcc = {
        // sum 0 existed until -1th index
        // this is needed if we encounter equal number of 1s and 0s starting from 0th index
        0: -1,
    };
    let max = 0;
    let pfxSum = [];
    for (let i = 0; i < nums.length; i++) {
        // transform
        if (nums[i] === 0) {
            nums[i] = -1;
        }
        // handle for i = 0
        pfxSum[i] = (pfxSum[i - 1] || 0) + nums[i];
        if (firstOcc[pfxSum[i]] !== undefined) {
            max = Math.max(i - firstOcc[pfxSum[i]], max);
        }
        else {
            firstOcc[pfxSum[i]] = i;
        }
    }
    return max;
}
export { findMaxLength };
//  0   1
//  -1  1
//  -1  0
// 0    1   0
// -1   1   -1
// -1   0   -1
