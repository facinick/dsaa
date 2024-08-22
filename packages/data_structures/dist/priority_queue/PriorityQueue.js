"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
const dynamic_array_stack_1 = require("../dynamic_array_stack");
class PriorityQueue {
    constructor(getPriorityNodeFunction) {
        this.getPriorityNodeFunction = getPriorityNodeFunction;
        this.dynamicArray = new dynamic_array_stack_1.DynamicArrayStack();
        this.heapifyUp = (index) => {
            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                if (this.isHigherPriority(this.dynamicArray.get(index), this.dynamicArray.get(parentIndex))) {
                    this.swap(index, parentIndex);
                    index = parentIndex;
                }
                else {
                    break;
                }
            }
        };
        this.heapifyDown = (index) => {
            const size = this.dynamicArray.getSize();
            let highestPriorityIndex = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            if (leftChild < size && this.isHigherPriority(this.dynamicArray.get(leftChild), this.dynamicArray.get(highestPriorityIndex))) {
                highestPriorityIndex = leftChild;
            }
            if (rightChild < size && this.isHigherPriority(this.dynamicArray.get(rightChild), this.dynamicArray.get(highestPriorityIndex))) {
                highestPriorityIndex = rightChild;
            }
            if (highestPriorityIndex !== index) {
                this.swap(index, highestPriorityIndex);
                this.heapifyDown(highestPriorityIndex);
            }
        };
        this.swap = (i, j) => {
            const temp = this.dynamicArray.get(i);
            this.dynamicArray.set(i, this.dynamicArray.get(j));
            this.dynamicArray.set(j, temp);
        };
        this.isHigherPriority = (a, b) => {
            return this.getPriorityNodeFunction(a, b) === a;
        };
        this.isEmpty = () => {
            return this.dynamicArray.isEmpty();
        };
        this.contains = (element) => {
            return this.dynamicArray.search(element) !== null;
        };
        this.enqueue = (element) => {
            this.dynamicArray.push(element);
            this.heapifyUp(this.dynamicArray.getSize() - 1);
        };
        this.dequeue = () => {
            if (this.dynamicArray.isEmpty())
                return null;
            const topElement = this.dynamicArray.get(0);
            const lastElement = this.dynamicArray.pop();
            if (!this.dynamicArray.isEmpty()) {
                this.dynamicArray.set(0, lastElement);
                this.heapifyDown(0);
            }
            return topElement;
        };
    }
}
exports.PriorityQueue = PriorityQueue;
