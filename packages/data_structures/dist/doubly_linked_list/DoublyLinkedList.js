"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
const Node_1 = require("./Node");
// head: root (either null or a node with next === null / another node)
// length: SIZE = [0... SIZE-1]
class DoublyLinkedList {
    constructor(comparator) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.comparator = comparator;
    }
    // insert at SIZE (insertAtTail)
    insertAtTail(element) {
        return this.insertAtIndex(this.size, element);
    }
    // insert at 0 (insertAtHead)
    insertAtHead(element) {
        return this.insertAtIndex(0, element);
    }
    // insert at x
    insertAtIndex(index, element) {
        if (index < 0 || index > this.size) {
            return false;
        }
        const newNode = new Node_1.DllNode(element);
        // new
        if (this.isEmpty()) {
            newNode.next = null;
            newNode.previous = null;
            this.head = newNode;
            this.tail = newNode;
        }
        // insert at start
        else if (index === 0) {
            newNode.next = this.head;
            newNode.previous = null;
            if (newNode.next) {
                newNode.next.previous = newNode;
            }
            this.head = newNode;
        }
        // insert at end
        else if (index === this.size) {
            newNode.next = null;
            newNode.previous = this.tail;
            if (newNode.previous) {
                newNode.previous.next = newNode;
            }
            this.tail = newNode;
        }
        // insert between start and end
        else {
            const size = this.getSize();
            let current;
            if (index < size / 2) {
                current = this.head;
                for (let i = 0; i < index && current !== null; i++) {
                    current = current.next;
                }
            }
            else {
                current = this.tail;
                for (let i = size - 1; i > index && current !== null; i--) {
                    current = current.previous;
                }
            }
            if (current) {
                newNode.previous = current.previous;
                newNode.next = current;
                if (newNode.previous) {
                    newNode.previous.next = newNode;
                }
                if (newNode.next) {
                    newNode.next.previous = newNode;
                }
            }
        }
        this.size++;
        return true;
    }
    // remove at x
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let removedElement;
        if (this.isEmpty()) {
            return null;
        }
        else if (index === 0 && this.head) {
            removedElement = this.head.value;
            this.head = this.head.next;
            if (this.head) {
                this.head.previous = null;
            }
        }
        else if (index === this.size - 1 && this.tail) {
            removedElement = this.tail.value;
            this.tail = this.tail.previous;
            if (this.tail) {
                this.tail.next = null;
            }
        }
        else {
            const size = this.getSize();
            let current;
            if (index < size / 2) {
                current = this.head;
                for (let i = 0; i < index && current !== null; i++) {
                    current = current.next;
                }
            }
            else {
                current = this.tail;
                for (let i = size; i > index && current !== null; i--) {
                    current = current.previous;
                }
            }
            if (current) {
                removedElement = current.value;
                let previous = current.previous;
                let next = current.next;
                if (previous) {
                    previous.next = next;
                }
                if (next) {
                    next.previous = previous;
                }
            }
            else {
                return null;
            }
        }
        this.size--;
        return removedElement;
    }
    // remove at SIZE-1 (deleteAtTail)
    deleteAtTail() {
        return this.deleteAtIndex(this.size - 1);
    }
    // remove at 0 (deleteAtHead)
    deleteAtHead() {
        return this.deleteAtIndex(0);
    }
    // search NODE / has NODE
    search(data) {
        let current = this.head;
        while (current) {
            if (this.comparator(current.value, data) === 0) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.head === null && this.tail === null;
    }
    [Symbol.iterator]() {
        let current = this.head;
        return {
            next: () => {
                if (current) {
                    const value = current.value;
                    current = current.next;
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
exports.DoublyLinkedList = DoublyLinkedList;
