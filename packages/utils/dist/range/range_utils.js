"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
const range = (start, end, step = 1) => {
    let output = [];
    if (typeof end === 'undefined') {
        end = start;
        start = 0;
    }
    for (let i = start; i < end; i += step) {
        output.push(i);
    }
    return output;
};
exports.range = range;
