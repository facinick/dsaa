"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
const Node_1 = require("./Node");
/**
 * Doubly linked list implementation in TypeScript.
 * @template T - Type of elements stored in the list.
 */
class DoublyLinkedList {
    /**
     * Creates an instance of a doubly linked list.
     * @param {function(T, T): -1 | 0 | 1} comparator - Comparator function to compare elements.
     */
    constructor(comparator) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.comparator = comparator;
    }
    /**
     * Inserts an element at the end of the list.
     * @template T The type of elements in the list.
     * @param {T} element - Element to be inserted.
     * @returns {boolean} - Returns true if the element was successfully inserted.
     */
    insertAtTail(element) {
        return this.insertAtIndex(this.size, element);
    }
    /**
     * Inserts an element at the beginning of the list.
     * @template T The type of elements in the list.
     * @param {T} element - Element to be inserted.
     * @returns {boolean} - Returns true if the element was successfully inserted.
     */
    insertAtHead(element) {
        return this.insertAtIndex(0, element);
    }
    /**
     * Inserts an element at a specified index in the list.
     * @template T The type of elements in the list.
     * @param {number} index - Index at which the element should be inserted.
     * @param {T} element - Element to be inserted.
     * @returns {boolean} - Returns true if the element was successfully inserted.
     */
    insertAtIndex(index, element) {
        if (index < 0 || index > this.size) {
            return false;
        }
        const newNode = new DoublyLinkedList.Node(element);
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
    /**
     * Deletes an element at a specified index in the list.
     * @template T The type of elements in the list.
     * @param {number} index - Index of the element to be deleted.
     * @returns {T | null} - Returns the deleted element, or null if the index is invalid.
     */
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
    /**
     * Returns an element at a specified index in the list without any modification.
     * @template T The type of elements in the list.
     * @param {number} index - Index of the element to be returned.
     * @returns {T | null} - Returns the element, or null if the index is invalid, or not found.
     */
    peekAtIndex(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let peekedElement = null;
        if (this.isEmpty()) {
            return null;
        }
        let current = this.head;
        let counter = 0;
        while (current && counter != index) {
            current = current.next;
            counter++;
        }
        if (current) {
            peekedElement = current.value;
        }
        return peekedElement;
    }
    /**
     * Deletes the last element in the list.
     * @template T The type of elements in the list.
     * @returns {T | null} - Returns the deleted element, or null if the list is empty.
     */
    deleteAtTail() {
        return this.deleteAtIndex(this.size - 1);
    }
    /**
     * Deletes the first element in the list.
     * @template T The type of elements in the list.
     * @returns {T | null} - Returns the deleted element, or null if the list is empty.
     */
    deleteAtHead() {
        return this.deleteAtIndex(0);
    }
    /**
     * Searches for an element in the list.
     * @template T The type of elements in the list.
     * @param {T} data - Element to search for.
     * @returns {T | null} - Returns the element if found, or null if not found.
     */
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
    /**
     * Gets the size of the list.
     * @template T The type of elements in the list.
     * @returns {number} - Returns the number of elements in the list.
     */
    getSize() {
        return this.size;
    }
    /**
     * Checks if the list is empty.
     * @template T The type of elements in the list.
     * @returns {boolean} - Returns true if the list is empty, otherwise false.
     */
    isEmpty() {
        return this.head === null && this.tail === null;
    }
    /**
     * Returns an iterator for the list.
     * @template T The type of elements in the list.
     * @returns {IterableIterator<T>} - An iterator for the list.
     */
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
/**
 * Node class for the doubly linked list.
 * @template T - Type of element stored in the node.
 */
DoublyLinkedList.Node = Node_1.Node;
DoublyLinkedList.Node = Node_1.Node;
