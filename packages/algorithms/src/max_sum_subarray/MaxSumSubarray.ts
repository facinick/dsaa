/*
    We NEED to select a continuous list of numbers, hence this algorithm works.
    Now, we have maxSumSoFar we found so far
    we also have maxSumEndingHere, which tells, in out current ongoing analysis of consecutive numbers, what is the sum.
    EX: we are evaluating numbers, so far we have seen 7, 1. which makes out max so far as 8, now lets say we see next number as -1
    that makes our current sum as 7+1-1 = 7, less than or maximum, so why are we still taking new numbers in account?
    because, what if thus happens: 7,1,-1,-1,-1,-1,9 this will become a new max, as we dont know the upcoming numbers, we cant discard the sequence started from 7
    so when do we stop  taking into account upcoming numbers, when the current sum becomes less than 0. that basically means we can discard sequence starting from 7.


*/

function maxSubarray(numbers: number[]): number {

    let maxSumSoFar = 0
    let maxSumEndingHere = 0

    for(const num of numbers) {
        // 7 - 1
        maxSumEndingHere += num

        // 7 -1 -1 -1 -1 9
        if(maxSumEndingHere > maxSumSoFar) {
            maxSumSoFar = maxSumEndingHere
        }
        
        // 7 -1 -1 -1 -1 -1 -1 -1 -1
        if(maxSumEndingHere < 0) {
            // we can basically ignore everything as why pic all these numbers only to get sum < 0?
            // and making this 0 ensures if even the smallest +ve number comes, we start from there
            maxSumEndingHere = 0
        }
    }

    return maxSumSoFar
}

const maxSubArrayCryptic = (nums: number[]): number => nums.reduce(([m, c], n) => [Math.max(m, c + n), Math.max(0, c + n)], [-Infinity, 0])[0];

export {
    maxSubarray,
    maxSubArrayCryptic
}