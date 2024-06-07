"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicArrayStack = void 0;
class DynamicArrayStack {
    constructor(comparator) {
        this.stack = new Array(1);
        this.top = 0;
        this.comparator = comparator;
    }
    push(element) {
        if (this.top === this.stack.length) {
            this.resize(this.stack.length * 2);
        }
        this.stack[this.top] = element;
        this.top++;
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.top === (this.stack.length / 4)) {
            this.resize(this.stack.length / 2);
        }
        this.top--;
        const poppedElement = this.stack[this.top];
        delete this.stack[this.top];
        return poppedElement;
    }
    resize(capacity) {
        const newArray = new Array(capacity);
        for (let i = 0; i < this.getSize(); i++) {
            newArray[i] = this.stack[i];
        }
        this.stack = newArray;
    }
    getSize() {
        return this.top;
    }
    search(element) {
        for (let i = 0; i < this.getSize(); i++) {
            if (this.stack[i] === element) {
                return element;
            }
        }
        return null;
    }
    isEmpty() {
        return this.stack.length === 0 && this.getSize() === 0;
    }
    [Symbol.iterator]() {
        let head = this.top - 1;
        return {
            next: () => {
                if (head >= 0) {
                    const value = this.stack[head];
                    head--;
                    return { done: false, value };
                }
                else {
                    return { done: true, value: undefined };
                }
            },
            [Symbol.iterator]() {
                return this;
            }
        };
    }
}
exports.DynamicArrayStack = DynamicArrayStack;
