import { Node } from "./Node";
/**
 * Doubly linked list implementation in TypeScript.
 * @template T - Type of elements stored in the list.
 */
declare class DoublyLinkedList<T> {
    private size;
    private head;
    private tail;
    private comparator;
    /**
     * Creates an instance of a doubly linked list.
     * @param {function(T, T): -1 | 0 | 1} comparator - Comparator function to compare elements.
     */
    constructor(comparator: (a: T, b: T) => -1 | 0 | 1);
    /**
     * Inserts an element at the end of the list.
     * @template T The type of elements in the list.
     * @param {T} element - Element to be inserted.
     * @returns {boolean} - Returns true if the element was successfully inserted.
     */
    insertAtTail(element: T): boolean;
    /**
     * Inserts an element at the beginning of the list.
     * @template T The type of elements in the list.
     * @param {T} element - Element to be inserted.
     * @returns {boolean} - Returns true if the element was successfully inserted.
     */
    insertAtHead(element: T): boolean;
    /**
     * Inserts an element at a specified index in the list.
     * @template T The type of elements in the list.
     * @param {number} index - Index at which the element should be inserted.
     * @param {T} element - Element to be inserted.
     * @returns {boolean} - Returns true if the element was successfully inserted.
     */
    insertAtIndex(index: number, element: T): boolean;
    /**
     * Deletes an element at a specified index in the list.
     * @template T The type of elements in the list.
     * @param {number} index - Index of the element to be deleted.
     * @returns {T | null} - Returns the deleted element, or null if the index is invalid.
     */
    deleteAtIndex(index: number): T | null;
    /**
     * Returns an element at a specified index in the list without any modification.
     * @template T The type of elements in the list.
     * @param {number} index - Index of the element to be returned.
     * @returns {T | null} - Returns the element, or null if the index is invalid, or not found.
     */
    peekAtIndex(index: number): T | null;
    /**
     * Deletes the last element in the list.
     * @template T The type of elements in the list.
     * @returns {T | null} - Returns the deleted element, or null if the list is empty.
     */
    deleteAtTail(): T | null;
    /**
     * Deletes the first element in the list.
     * @template T The type of elements in the list.
     * @returns {T | null} - Returns the deleted element, or null if the list is empty.
     */
    deleteAtHead(): T | null;
    /**
     * Searches for an element in the list.
     * @template T The type of elements in the list.
     * @param {T} data - Element to search for.
     * @returns {T | null} - Returns the element if found, or null if not found.
     */
    search(data: T): T | null;
    /**
     * Gets the size of the list.
     * @template T The type of elements in the list.
     * @returns {number} - Returns the number of elements in the list.
     */
    getSize(): number;
    /**
     * Checks if the list is empty.
     * @template T The type of elements in the list.
     * @returns {boolean} - Returns true if the list is empty, otherwise false.
     */
    isEmpty(): boolean;
    /**
     * Returns an iterator for the list.
     * @template T The type of elements in the list.
     * @returns {IterableIterator<T>} - An iterator for the list.
     */
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * Node class for the doubly linked list.
     * @template T - Type of element stored in the node.
     */
    static Node: typeof Node;
}
export { DoublyLinkedList };
