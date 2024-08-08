class RangeSumQueryRuner {
    private prefixSum: number[] = new Array()
    constructor(private readonly nums: number[]) {
        if(nums.length > 0) {
            this.prefixSum[0] = nums[0]
            for(let i=1; i<nums.length; i++) {
                this.prefixSum[i] = nums[i] + this.prefixSum[i-1]
            }   
        }
    }

    sumRange(left: number, right: number): number {
        if(left >= 0 && right < this.prefixSum.length) {
            return this.prefixSum[right] - this.prefixSum[left] + this.nums[left]
        }

        throw new Error(`Range out of bound error, ${left} - ${right}`)
    }
}

export {
    RangeSumQueryRuner
}

// -2  0   3   -5  2   -1
// -2  -2  1   -4  -2  -3

// 0,2 => 1 
// 0,2 => 1 - (-2) + 1 = 4

// 2,5 => 3 - 5 + 2 - 1 = -1
// 2,5 => -3 -1 + 1 = -3