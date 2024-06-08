"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomizedQueue = void 0;
const utils_1 = require("utils");
const doubly_linked_list_1 = require("../doubly_linked_list");
class RandomizedQueue {
    constructor(comparator) {
        this.comparator = comparator;
        this.dll = new doubly_linked_list_1.DoublyLinkedList(this.comparator);
    }
    isEmpty() {
        return this.dll.isEmpty();
    }
    getSize() {
        return this.dll.getSize();
    }
    enqueue(element) {
        return this.dll.insertAtHead(element);
    }
    dequeue() {
        const min = 0;
        const max = this.getSize() - 1;
        if (min < max) {
            return null;
        }
        const randomInt = (0, utils_1.getRandomIntBetween)(min, max);
        return this.dll.deleteAtIndex(randomInt);
    }
    sample() {
        const min = 0;
        const max = this.getSize() - 1;
        if (min < max) {
            return null;
        }
        const randomInt = (0, utils_1.getRandomIntBetween)(min, max);
        return this.dll.peekAtIndex(randomInt);
    }
}
exports.RandomizedQueue = RandomizedQueue;
