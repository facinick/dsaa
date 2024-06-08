import { Node } from "./Node";
/**
 * Represents a singly linked list.
 * @template T The type of elements in the list.
 */
declare class LinkedList<T> {
    private size;
    private head;
    private comparator;
    /**
     * Constructs a new linked list with the specified comparator function.
     *
     * @param {(a: T, b: T) => -1 | 0 | 1} comparator - The function used for comparing elements. Function returns -1 to select a, 0 to equate and 1 to select b.
     */
    constructor(comparator: (a: T, b: T) => -1 | 0 | 1);
    /**
     * Inserts an element at the tail (end) of the list.
     *
     * @template T The type of elements in the list.
     * @param {T} element - The element to insert.
     * @returns {boolean} Returns true if the insertion is successful, otherwise false.
     */
    insertAtTail(element: T): boolean;
    /**
     * Inserts an element at the head (beginning) of the list.
     *
     * @template T The type of elements in the list.
     * @param {T} element - The element to insert.
     * @returns {boolean} Returns true if the insertion is successful, otherwise false.
     */
    insertAtHead(element: T): boolean;
    /**
     * Inserts an element at a specified index in the list.
     *
     * @template T The type of elements in the list.
     * @param {number} index - The position at which to insert the element. Must be between 0 and the size of the list (inclusive).
     * @param {T} element - The element to insert.
     * @returns {boolean} Returns true if the insertion is successful, otherwise false.
     */
    insertAtIndex(index: number, element: T): boolean;
    /**
     * Deletes the element at the specified index in the list.
     *
     * @template T The type of elements in the list.
     * @param {number} index - The position of the element to delete. Must be between 0 and the size of the list (exclusive).
     * @returns {T | null} Returns the removed element if the deletion is successful, otherwise null.
     */
    deleteAtIndex(index: number): T | null;
    /**
     * Deletes the element at the tail (end) of the list.
     *
     * @template T The type of elements in the list.
     * @returns {T | null} Returns the removed element if the deletion is successful, otherwise null.
     */
    deleteAtTail(): T | null;
    /**
     * Deletes the element at the head (beginning) of the list.
     *
     * @template T The type of elements in the list.
     * @returns {T | null} Returns the removed element if the deletion is successful, otherwise null.
     */
    deleteAtHead(): T | null;
    /**
     * Deletes the first occurrence of the specified element from the list.
     *
     * @template T The type of elements in the list.
     * @param {T} element - The element to be deleted.
     * @returns {void}
     */
    delete(element: T): T | null;
    /**
     * Searches for the first occurrence of the specified element in the list.
     *
     * @template T The type of elements in the list.
     * @param {T} data - The element to search for.
     * @returns {T | null} Returns the element if found, otherwise null.
     */
    search(data: T): T | null;
    /**
     * Gets the size of the list.
     *
     * @returns {number} Returns the number of elements in the list.
     */
    getSize(): number;
    /**
     * Checks if the list is empty.
     *
     * @returns {boolean} Returns true if the list is empty, otherwise false.
     */
    isEmpty(): boolean;
    /**
     * Returns an iterator for the list, allowing the use of for...of loops.
     *
     * @returns {IterableIterator<T>} An iterator for the list.
     */
    [Symbol.iterator](): IterableIterator<T>;
    /**
    * Node class for the linked list.
    * @template T - Type of element stored in the node.
    */
    static Node: typeof Node;
}
export { LinkedList };
