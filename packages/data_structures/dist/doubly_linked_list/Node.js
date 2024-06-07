"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DllNode = void 0;
class DllNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}
exports.DllNode = DllNode;
