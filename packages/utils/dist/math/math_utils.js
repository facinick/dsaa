"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomIntBetween = exports.getRandomBetween = exports.calculateStandardDeviation = exports.calculateMean = exports.calculateConfidenceInterval = void 0;
function calculateMean(values) {
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
}
exports.calculateMean = calculateMean;
function calculateStandardDeviation(values) {
    const mean = calculateMean(values);
    const sumOfSquares = values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
    return Math.sqrt(sumOfSquares / (values.length - 1));
}
exports.calculateStandardDeviation = calculateStandardDeviation;
function calculateConfidenceInterval(values, confidenceLevel = 1.96) {
    const mean = calculateMean(values);
    const stdDev = calculateStandardDeviation(values);
    const sem = stdDev / Math.sqrt(values.length);
    const marginOfError = confidenceLevel * sem;
    return [mean - marginOfError, mean + marginOfError];
}
exports.calculateConfidenceInterval = calculateConfidenceInterval;
const getRandomBetween = (min, max) => {
    return Math.random() * (max - min) + min;
};
exports.getRandomBetween = getRandomBetween;
const getRandomIntBetween = (min, max) => {
    return Math.floor(getRandomBetween(min, max)) + min;
};
exports.getRandomIntBetween = getRandomIntBetween;
