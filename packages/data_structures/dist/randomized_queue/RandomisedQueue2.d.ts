/**
 * A randomized queue implementation using resizing arrays
 * @template T The type of elements in the list.
 */
declare class RandomisedQueue2<T> {
    private a;
    private top;
    /**
     * Constructs an empty randomized queue.
     */
    constructor();
    /**
     * Returns the number of items in the queue.
     * @returns The number of items in the queue.
     */
    getSize(): number;
    /**
     * Checks if the queue is empty.
     * @returns True if the queue is empty, false otherwise.
     */
    isEmpty(): boolean;
    /**
     * Returns the capacity of the internal array.
     * @returns The capacity of the internal array.
     */
    getCapacity(): number;
    /**
     * Adds an item to the queue.
     * @template T The type of elements in the list.
     * @param element - The item to add.
     */
    enqueue(element: T): void;
    /**
     * Removes and returns a random item from the queue.
     * @template T The type of elements in the list.
     * @returns {T | null} Returns the removed element if successfull or null.
     */
    dequeue(): T | null;
    /**
     * Returns a random item from the queue without removing it.
     * @template T The type of elements in the list.
     * @returns {T | null} Returns a random element without actually removing it, or null if empty.
     */
    sample(): T | null;
    /**
     * Resizes the internal array to the given capacity.
     * @template T The type of elements in the list.
     * @param capacity - The new capacity.
     */
    private resize;
    /**
     * Returns an iterator for the list, allowing the use of for...of loops.
     *
     * @returns {IterableIterator<T>} An iterator for the list.
     */
    [Symbol.iterator](): IterableIterator<T>;
}
export { RandomisedQueue2 };
