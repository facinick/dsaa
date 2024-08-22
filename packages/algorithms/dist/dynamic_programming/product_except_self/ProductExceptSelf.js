function productExceptSelf(nums) {
    const prefProd = [];
    const suffProd = [];
    const prodExceptSelf = [];
    for (let i = 0; i < nums.length; i++) {
        let leftIndex = i;
        let rightIndex = nums.length - i - 1;
        prefProd[leftIndex] = i === 0 ? 1 : prefProd[leftIndex - 1] * nums[leftIndex - 1];
        suffProd[rightIndex] = i === 0 ? 1 : suffProd[rightIndex + 1] * nums[rightIndex + 1];
    }
    for (let i = 0; i < nums.length; i++) {
        prodExceptSelf[i] = prefProd[i] * suffProd[i];
    }
    return prodExceptSelf;
}
;
export { productExceptSelf };
