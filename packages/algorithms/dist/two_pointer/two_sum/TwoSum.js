function twoSum(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    // exactly one solution exists, and those elements are different so
    while (numbers[i] + numbers[j] !== target) {
        if (numbers[i] + numbers[j] < target) {
            i++;
        }
        else {
            j--;
        }
    }
    return [i + 1, j + 1];
}
;
export { twoSum };
