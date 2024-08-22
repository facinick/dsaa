declare class RangeSumQueryRuner {
    private readonly nums;
    private prefixSum;
    constructor(nums: number[]);
    sumRange(left: number, right: number): number;
}
export { RangeSumQueryRuner };
