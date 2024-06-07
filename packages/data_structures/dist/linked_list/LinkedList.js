"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Node_1 = require("./Node");
// head: root (either null or a node with next === null / another node)
// length: SIZE = [0... SIZE-1]
class LinkedList {
    constructor(comparator) {
        this.head = null;
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
        const newNode = new Node_1.Node(element);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            let current = this.head;
            let previous = null;
            let counter = 0;
            // Traverse to the desired index position
            while (current && counter < index) {
                previous = current;
                current = current.next;
                counter++;
            }
            // Insert at the middle or end
            newNode.next = current;
            if (previous) {
                previous.next = newNode;
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
        if (index === 0) {
            if (!this.head) {
                return null;
            }
            removedElement = this.head.value;
            this.head = this.head.next;
        }
        else {
            let current = this.head;
            let previous = null;
            let counter = 0;
            // Traverse to the node before the target index
            while (current && counter < index) {
                previous = current;
                current = current.next;
                counter++;
            }
            if (!current) {
                return null;
            }
            removedElement = current.value;
            // Remove the node
            if (previous) {
                previous.next = current.next;
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
    // remove NODE
    delete(element) {
        if (!this.head)
            return;
        // Check if the head node is the node to be removed
        if (this.comparator(this.head.value, element) === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head.next;
        let previous = this.head;
        /**
         * Search for the node to be removed and keep track of its previous node
         *
         * If it were a double linked list, we could simply search the node
         * and it would have a pointer to the previous node
         **/
        while (current) {
            if (this.comparator(current.value, element) === 0) {
                current = null;
            }
            else {
                previous = current;
                current = current.next;
            }
        }
        /**
         * set previous.next to the target.next, if the node target is not found,
         * the 'previous' will point to the last node,
         * since the last node hasn't next, nothing will happen
         **/
        previous.next = previous.next ? previous.next.next : null;
    }
    // search NODE / has NODE
    search(data) {
        let current = this.head;
        while (current) {
            if (this.comparator(current.value, data)) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }
    print() {
        let curr = this.head;
        let output = "";
        while (curr !== null) {
            output += `${curr.value} `;
            curr = curr.next;
        }
        console.log(output);
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.head === null && this.size === 0;
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
exports.LinkedList = LinkedList;
