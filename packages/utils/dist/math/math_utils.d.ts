/**
 * Calculates the mean (average) of a given array of numbers.
 *
 * @param {number[]} values - The array of numbers to calculate the mean of.
 * @returns {number} The mean of the provided numbers.
 */
declare function calculateMean(values: number[]): number;
/**
 * Calculates the standard deviation of a given array of numbers.
 *
 * @param {number[]} values - The array of numbers to calculate the standard deviation of.
 * @returns {number} The standard deviation of the provided numbers.
 */
declare function calculateStandardDeviation(values: number[]): number;
/**
 * Calculates the confidence interval for a given array of numbers and confidence level.
 *
 * @param {number[]} values - The array of numbers to calculate the confidence interval of.
 * @param {number} [confidenceLevel=1.96] - The confidence level for the interval (default is 1.96, which corresponds to a 95% confidence interval).
 * @returns {[number, number]} The confidence interval as a tuple [lower bound, upper bound].
 */
declare function calculateConfidenceInterval(values: number[], confidenceLevel?: number): [number, number];
/**
 * Generates a random floating-point number between the specified minimum and maximum values.
 *
 * @param {number} min - The minimum value (IN-CLUSIVE).
 * @param {number} max - The maximum value (EX-CLUSIVE).
 * @returns {number} A pseudorandom floating-point number between min and max.
 */
declare const getRandomBetween: (min: number, max: number) => number;
/**
 * Generates a random integer between the specified minimum and maximum values.
 *
 * @param {number} min - The minimum value (IN-CLUSIVE).
 * @param {number} max - The maximum value (IN-CLUSIVE).
 * @returns {number} A pseudorandom integer between min and max.
 */
declare const getRandomIntBetween: (min: number, max: number) => number;
/**
 * Swaps two indexes in place in an array
 *
 * @param {number[]} nums - Array where elements will be swapped
 * @param {number} i - First element index
 * @param {number} j - Second element index
 * @returns {void} Doesn't return anything, swapping is done in place
 */
declare const swapInPlace: (nums: number[], i: number, j: number) => void;
export { calculateConfidenceInterval, calculateMean, calculateStandardDeviation, getRandomBetween, getRandomIntBetween, swapInPlace };
