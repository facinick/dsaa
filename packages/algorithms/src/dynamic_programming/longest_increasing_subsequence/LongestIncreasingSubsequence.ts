/*
    LIS(n) = 1 + MAX( ...LIS(k) | {nums[k] < nums[n] && k < n} )
*/

const cache: number[] = []

function LIS(k: number, nums: number[]) {

    if(cache[k]) {
        return cache[k]
    }

    let max = 0

    for(let i=0; i<k; i++) {
        // i is obv less than k
        if(nums[i] < nums[k]) {
            const LIS_I = LIS(i, nums)
            if(LIS_I > max) {
                max = LIS_I
            }
        }
    }

    cache[k] = max + 1
    return cache[k]
}

function lengthOfLIS(nums: number[]): number {

    cache.length = 0

    for(let i=0; i < nums.length; i++) {
        LIS(i, nums)
    }

    return Math.max(...cache)
};

export {
    lengthOfLIS
}