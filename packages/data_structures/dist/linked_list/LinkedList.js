import { Node } from "./Node";
/**
 * Represents a singly linked list.
 * @template T The type of elements in the list.
 */
class LinkedList {
    /**
     * Constructs a new linked list with the specified comparator function.
     *
     * @param {(a: T, b: T) => -1 | 0 | 1} comparator - The function used for comparing elements. Function returns -1 to select a, 0 to equate and 1 to select b.
     */
    constructor(comparator) {
        this.head = null;
        this.size = 0;
        this.comparator = comparator;
    }
    /**
     * Inserts an element at the tail (end) of the list.
     *
     * @template T The type of elements in the list.
     * @param {T} element - The element to insert.
     * @returns {boolean} Returns true if the insertion is successful, otherwise false.
     */
    insertAtTail(element) {
        return this.insertAtIndex(this.size, element);
    }
    /**
     * Inserts an element at the head (beginning) of the list.
     *
     * @template T The type of elements in the list.
     * @param {T} element - The element to insert.
     * @returns {boolean} Returns true if the insertion is successful, otherwise false.
     */
    insertAtHead(element) {
        return this.insertAtIndex(0, element);
    }
    /**
     * Inserts an element at a specified index in the list.
     *
     * @template T The type of elements in the list.
     * @param {number} index - The position at which to insert the element. Must be between 0 and the size of the list (inclusive).
     * @param {T} element - The element to insert.
     * @returns {boolean} Returns true if the insertion is successful, otherwise false.
     */
    insertAtIndex(index, element) {
        if (index < 0 || index > this.size) {
            return false;
        }
        const newNode = new LinkedList.Node(element);
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
    /**
     * Deletes the element at the specified index in the list.
     *
     * @template T The type of elements in the list.
     * @param {number} index - The position of the element to delete. Must be between 0 and the size of the list (exclusive).
     * @returns {T | null} Returns the removed element if the deletion is successful, otherwise null.
     */
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
    /**
     * Deletes the element at the tail (end) of the list.
     *
     * @template T The type of elements in the list.
     * @returns {T | null} Returns the removed element if the deletion is successful, otherwise null.
     */
    deleteAtTail() {
        return this.deleteAtIndex(this.size - 1);
    }
    /**
     * Deletes the element at the head (beginning) of the list.
     *
     * @template T The type of elements in the list.
     * @returns {T | null} Returns the removed element if the deletion is successful, otherwise null.
     */
    deleteAtHead() {
        return this.deleteAtIndex(0);
    }
    /**
     * Deletes the first occurrence of the specified element from the list.
     *
     * @template T The type of elements in the list.
     * @param {T} element - The element to be deleted.
     * @returns {void}
     */
    delete(element) {
        if (!this.head)
            return null;
        let nodeToDelete;
        // Check if the head node is the node to be removed
        if (this.comparator(this.head.value, element) === 0) {
            nodeToDelete = this.head;
            this.head = null;
            return nodeToDelete.value;
        }
        let current = this.head.next;
        let previous = this.head;
        while (current && current.value !== element) {
            previous = current;
            current = current.next;
        }
        /**
         * set previous.next to the target.next, if the node target is not found,
         * the 'previous' will point to the last node,
         * since the last node hasn't next, nothing will happen
         **/
        if (current === null) {
            return null;
        }
        nodeToDelete = current.value;
        previous.next = current.next;
        return nodeToDelete;
    }
    /**
     * Searches for the first occurrence of the specified element in the list.
     *
     * @template T The type of elements in the list.
     * @param {T} data - The element to search for.
     * @returns {T | null} Returns the element if found, otherwise null.
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
     *
     * @returns {number} Returns the number of elements in the list.
     */
    getSize() {
        return this.size;
    }
    /**
     * Checks if the list is empty.
     *
     * @returns {boolean} Returns true if the list is empty, otherwise false.
     */
    isEmpty() {
        return this.head === null && this.size === 0;
    }
    /**
     * Returns an iterator for the list, allowing the use of for...of loops.
     *
     * @returns {IterableIterator<T>} An iterator for the list.
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
/**
* Node class for the linked list.
* @template T - Type of element stored in the node.
*/
LinkedList.Node = Node;
export { LinkedList };
