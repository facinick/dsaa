function calculateMean(values: number[]): number {
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}

function calculateStandardDeviation(values: number[]): number {
  const mean = calculateMean(values);
  const sumOfSquares = values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
  return Math.sqrt(sumOfSquares / (values.length - 1));
}

function calculateConfidenceInterval(values: number[], confidenceLevel: number = 1.96): [number, number] {
  const mean = calculateMean(values);
  const stdDev = calculateStandardDeviation(values);
  const sem = stdDev / Math.sqrt(values.length);
  const marginOfError = confidenceLevel * sem;
  return [mean - marginOfError, mean + marginOfError];
}


const getRandomBetween = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
}

const getRandomIntBetween = (min: number, max: number): number => {
  return Math.floor(getRandomBetween(min, max)) + min;
}

export {
  calculateConfidenceInterval,
  calculateMean,
  calculateStandardDeviation,
  getRandomBetween,
  getRandomIntBetween
};

