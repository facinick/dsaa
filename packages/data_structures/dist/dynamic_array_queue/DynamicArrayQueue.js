"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicArrayQueue = void 0;
class DynamicArrayQueue {
    constructor(comparator) {
        this.q = new Array(1);
        this.head = -1;
        this.tail = 0;
        this.comparator = comparator;
    }
}
exports.DynamicArrayQueue = DynamicArrayQueue;
