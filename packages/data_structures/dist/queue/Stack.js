"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const linked_list_1 = require("../linked_list");
class Stack {
    constructor(comparator) {
        this.comparator = comparator;
        this.s = new linked_list_1.LinkedList(this.comparator);
    }
    push(element) {
        this.s.insertAtHead(element);
    }
    pop() {
        return this.s.deleteAtHead();
    }
    isEmpty() {
        return this.s.isEmpty();
    }
    getSize() {
        return this.s.getSize();
    }
    search(element) {
        return this.s.search(element);
    }
    [Symbol.iterator]() {
        return this.s[Symbol.iterator]();
    }
}
exports.Stack = Stack;
