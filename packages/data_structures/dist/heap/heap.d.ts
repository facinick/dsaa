import { Comparable } from 'utils';
/**
 * Abstract class representing a node in the heap.
 * It must implement the Comparable interface.
 *
 * @template T The type of the heap node.
 */
declare abstract class HeapNode<T> implements Comparable<T> {
    protected _heapIndex: number;
    /**
     * Compares this node with another node.
     * Must be implemented by subclasses.
     *
     * @param other The node to compare with.
     * @returns A negative number, zero, or a positive number as this node is less than, equal to, or greater than the other node.
     */
    compareTo(other: T): number;
    /**
     * Gets the current heap index of the node.
     *
     * @returns The heap index.
     */
    get heapIndex(): number;
    /**
     * Sets the heap index of the node.
     *
     * @param value The new heap index.
     */
    set heapIndex(value: number);
}
/**
 * A generic heap class implementing a binary heap.
 *
 * @template T The type of elements in the heap. Must extend HeapNode.
 */
declare class Heap<T extends HeapNode<T>> implements Iterable<T> {
    private _heap;
    constructor();
    /**
     * Returns the number of elements in the heap.
     *
     * @returns The size of the heap.
     */
    size(): number;
    /**
     * Checks if the heap is empty.
     *
     * @returns True if the heap is empty, false otherwise.
     */
    isEmpty(): boolean;
    /**
     * Retrieves the top element of the heap without removing it.
     *
     * @returns The top element of the heap or undefined if the heap is empty.
     */
    peek(): T | undefined;
    /**
     * Adds an element to the heap and re-adjusts the heap.
     *
     * @param item The item to be added to the heap.
     * @returns The new size of the heap after adding the item.
     */
    push(item: T): number;
    /**
     * Removes and returns the top element of the heap.
     *
     * @returns The removed element or undefined if the heap was empty.
     */
    pop(): T | undefined;
    /**
     * Replaces the top element with a new value and re-adjusts the heap.
     *
     * @param value The new value to be placed at the top.
     * @returns The old top element of the heap or undefined if the heap was empty.
     */
    replace(value: T): T | undefined;
    /**
     * Checks if the element is present in the heap.
     *
     * @param element The element to be checked.
     * @returns True if the element is present in the heap, false otherwise.
     */
    contains(element: T): T | null;
    /**
     * Updates the position of an element in the heap.
     *
     * @param element The element to be updated.
     * @throws Error if the element's heapIndex is invalid.
     */
    updateItem(element: T): void;
    /**
     * Sifts up an element in the heap to maintain heap property.
     *
     * @param index The index of the element to be sifted up. Defaults to the last element.
     */
    private _siftUp;
    /**
     * Sifts down an element in the heap to maintain heap property.
     *
     * @param index The index of the element to be sifted down. Defaults to the top element.
     */
    private _siftDown;
    /**
     * Returns the index of the parent of a given node.
     *
     * @param i The index of the node.
     * @returns The index of the parent node.
     */
    private _parent;
    /**
     * Returns the index of the left child of a given node.
     *
     * @param i The index of the node.
     * @returns The index of the left child.
     */
    private _left;
    /**
     * Returns the index of the right child of a given node.
     *
     * @param i The index of the node.
     * @returns The index of the right child.
     */
    private _right;
    /**
     * Checks if the element at index i is greater than the element at index j.
     *
     * @param i The index of the first element.
     * @param j The index of the second element.
     * @returns True if the element at index i is greater than the element at index j.
     */
    private _greater;
    /**
     * Swaps the elements at indices i and j in the heap and updates their heapIndex.
     *
     * @param i The index of the first element.
     * @param j The index of the second element.
     */
    private _swap;
    /**
     * Returns an iterator to iterate over the elements in the heap.
     *
     * @returns An iterator for the heap elements.
     */
    [Symbol.iterator](): Iterator<T>;
}
export { Heap, HeapNode };
export type { Comparable };
