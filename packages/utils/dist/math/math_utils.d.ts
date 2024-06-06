declare function calculateMean(values: number[]): number;
declare function calculateStandardDeviation(values: number[]): number;
declare function calculateConfidenceInterval(values: number[], confidenceLevel?: number): [number, number];
declare const getRandomBetween: (min: number, max: number) => number;
declare const getRandomIntBetween: (min: number, max: number) => number;
export { calculateConfidenceInterval, calculateMean, calculateStandardDeviation, getRandomBetween, getRandomIntBetween };
