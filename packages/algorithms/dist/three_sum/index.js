"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ThreeSum_1 = require("../three_sum/ThreeSum");
const data = [30, -40, -20, -10, 40, 0, 10, 5];
const ts = new ThreeSum_1.ThreeSum(data, 0);
console.log(ts.find());
