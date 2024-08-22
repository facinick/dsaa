"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
exports.Node = Node;
