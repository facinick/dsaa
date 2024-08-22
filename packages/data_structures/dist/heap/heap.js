"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeapNode = exports.Heap = void 0;
// Constant representing the index of the top of the heap.
const top = 0;
/**
 * Abstract class representing a node in the heap.
 * It must implement the Comparable interface.
 *
 * @template T The type of the heap node.
 */
class HeapNode {
    constructor() {
        // The index of the node in the heap.
        this._heapIndex = 0;
    }
    /**
     * Compares this node with another node.
     * Must be implemented by subclasses.
     *
     * @param other The node to compare with.
     * @returns A negative number, zero, or a positive number as this node is less than, equal to, or greater than the other node.
     */
    compareTo(other) {
        throw new Error("Method not implemented.");
    }
    /**
     * Gets the current heap index of the node.
     *
     * @returns The heap index.
     */
    get heapIndex() {
        return this._heapIndex;
    }
    /**
     * Sets the heap index of the node.
     *
     * @param value The new heap index.
     */
    set heapIndex(value) {
        this._heapIndex = value;
    }
}
exports.HeapNode = HeapNode;
/**
 * A generic heap class implementing a binary heap.
 *
 * @template T The type of elements in the heap. Must extend HeapNode.
 */
class Heap {
    constructor() {
        this._heap = [];
    }
    /**
     * Returns the number of elements in the heap.
     *
     * @returns The size of the heap.
     */
    size() {
        return this._heap.length;
    }
    /**
     * Checks if the heap is empty.
     *
     * @returns True if the heap is empty, false otherwise.
     */
    isEmpty() {
        return this.size() === 0;
    }
    /**
     * Retrieves the top element of the heap without removing it.
     *
     * @returns The top element of the heap or undefined if the heap is empty.
     */
    peek() {
        return this._heap[top];
    }
    /**
     * Adds an element to the heap and re-adjusts the heap.
     *
     * @param item The item to be added to the heap.
     * @returns The new size of the heap after adding the item.
     */
    push(item) {
        item.heapIndex = this.size();
        this._heap.push(item);
        this._siftUp();
        return this.size();
    }
    /**
     * Removes and returns the top element of the heap.
     *
     * @returns The removed element or undefined if the heap was empty.
     */
    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > top) {
            this._swap(top, bottom);
        }
        this._heap.pop();
        if (this.size() > 0) {
            this._heap[top].heapIndex = top; // Update heapIndex after popping.
            this._siftDown();
        }
        return poppedValue;
    }
    /**
     * Replaces the top element with a new value and re-adjusts the heap.
     *
     * @param value The new value to be placed at the top.
     * @returns The old top element of the heap or undefined if the heap was empty.
     */
    replace(value) {
        const replacedValue = this.peek();
        this._heap[top] = value;
        value.heapIndex = top; // Ensure heapIndex is correct.
        this._siftDown();
        return replacedValue;
    }
    /**
     * Checks if the element is present in the heap.
     *
     * @param element The element to be checked.
     * @returns True if the element is present in the heap, false otherwise.
     */
    contains(element) {
        if (element.heapIndex < 0 || element.heapIndex >= this.size()) {
            return null;
        }
        return this._heap[element.heapIndex].compareTo(element) === 0 ? element : null;
    }
    /**
     * Updates the position of an element in the heap.
     *
     * @param element The element to be updated.
     * @throws Error if the element's heapIndex is invalid.
     */
    updateItem(element) {
        if (element.heapIndex < 0 || element.heapIndex >= this.size()) {
            console.log(element);
            throw new Error("Invalid heapIndex");
        }
        this._heap[element.heapIndex] = element;
        if (element.heapIndex > top && this._greater(element.heapIndex, this._parent(element.heapIndex))) {
            this._siftUp(element.heapIndex);
        }
        else {
            this._siftDown(element.heapIndex);
        }
    }
    /**
     * Sifts up an element in the heap to maintain heap property.
     *
     * @param index The index of the element to be sifted up. Defaults to the last element.
     */
    _siftUp(index) {
        let node = index !== undefined ? index : this.size() - 1;
        while (node > top && this._greater(node, this._parent(node))) {
            this._swap(node, this._parent(node));
            node = this._parent(node);
        }
    }
    /**
     * Sifts down an element in the heap to maintain heap property.
     *
     * @param index The index of the element to be sifted down. Defaults to the top element.
     */
    _siftDown(index) {
        let node = index !== undefined ? index : top;
        while ((this._left(node) < this.size() && this._greater(this._left(node), node)) ||
            (this._right(node) < this.size() && this._greater(this._right(node), node))) {
            let maxChild = (this._right(node) < this.size() && this._greater(this._right(node), this._left(node))) ? this._right(node) : this._left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
    /**
     * Returns the index of the parent of a given node.
     *
     * @param i The index of the node.
     * @returns The index of the parent node.
     */
    _parent(i) {
        return ((i + 1) >>> 1) - 1;
    }
    /**
     * Returns the index of the left child of a given node.
     *
     * @param i The index of the node.
     * @returns The index of the left child.
     */
    _left(i) {
        return (i << 1) + 1;
    }
    /**
     * Returns the index of the right child of a given node.
     *
     * @param i The index of the node.
     * @returns The index of the right child.
     */
    _right(i) {
        return (i + 1) << 1;
    }
    /**
     * Checks if the element at index i is greater than the element at index j.
     *
     * @param i The index of the first element.
     * @param j The index of the second element.
     * @returns True if the element at index i is greater than the element at index j.
     */
    _greater(i, j) {
        return this._heap[i].compareTo(this._heap[j]) > 0;
    }
    /**
     * Swaps the elements at indices i and j in the heap and updates their heapIndex.
     *
     * @param i The index of the first element.
     * @param j The index of the second element.
     */
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
        // Update the heapIndex for both swapped elements.
        this._heap[i].heapIndex = i;
        this._heap[j].heapIndex = j;
    }
    /**
     * Returns an iterator to iterate over the elements in the heap.
     *
     * @returns An iterator for the heap elements.
     */
    [Symbol.iterator]() {
        let index = 0;
        const heap = this._heap;
        return {
            next() {
                if (index < heap.length) {
                    return { value: heap[index++], done: false };
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
}
exports.Heap = Heap;
