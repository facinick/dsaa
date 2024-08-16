/**
 * Calculates the mean (average) of a given array of numbers.
 * 
 * @param {number[]} values - The array of numbers to calculate the mean of.
 * @returns {number} The mean of the provided numbers.
 */
function calculateMean(values: number[]): number {
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}

/**
 * Calculates the standard deviation of a given array of numbers.
 * 
 * @param {number[]} values - The array of numbers to calculate the standard deviation of.
 * @returns {number} The standard deviation of the provided numbers.
 */
function calculateStandardDeviation(values: number[]): number {
  const mean = calculateMean(values);
  const sumOfSquares = values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
  return Math.sqrt(sumOfSquares / (values.length - 1));
}

/**
 * Calculates the confidence interval for a given array of numbers and confidence level.
 * 
 * @param {number[]} values - The array of numbers to calculate the confidence interval of.
 * @param {number} [confidenceLevel=1.96] - The confidence level for the interval (default is 1.96, which corresponds to a 95% confidence interval).
 * @returns {[number, number]} The confidence interval as a tuple [lower bound, upper bound].
 */
function calculateConfidenceInterval(values: number[], confidenceLevel: number = 1.96): [number, number] {
  const mean = calculateMean(values);
  const stdDev = calculateStandardDeviation(values);
  const sem = stdDev / Math.sqrt(values.length);
  const marginOfError = confidenceLevel * sem;
  return [mean - marginOfError, mean + marginOfError];
}

/**
 * Generates a random floating-point number between the specified minimum and maximum values.
 * 
 * @param {number} min - The minimum value (IN-CLUSIVE).
 * @param {number} max - The maximum value (EX-CLUSIVE).
 * @returns {number} A pseudorandom floating-point number between min and max.
 */
const getRandomBetween = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
}

/**
 * Generates a random integer between the specified minimum and maximum values.
 * 
 * @param {number} min - The minimum value (IN-CLUSIVE).
 * @param {number} max - The maximum value (IN-CLUSIVE).
 * @returns {number} A pseudorandom integer between min and max.
 */
const getRandomIntBetween = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Swaps two indexes in place in an array
 * 
 * @param {number[]} nums - Array where elements will be swapped
 * @param {number} i - First element index
 * @param {number} j - Second element index
 * @returns {void} Doesn't return anything, swapping is done in place
 */
const swapInPlace = (nums: number[], i: number, j: number) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

export {
  calculateConfidenceInterval,
  calculateMean,
  calculateStandardDeviation,
  getRandomBetween,
  getRandomIntBetween,
  swapInPlace
};

