"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DoublyLinkedList_1 = require("./DoublyLinkedList");
describe('LinkedList Tests', () => {
    let ll;
    beforeEach(() => {
        ll = new DoublyLinkedList_1.LinkedList((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    });
    describe('Initialization', () => {
        test('New linked list should be empty', () => {
            expect(ll.isEmpty()).toBe(true);
            expect(ll.getSize()).toBe(0);
        });
    });
    describe('Insertion', () => {
        test('Insertion at the beginning of the list', () => {
            ll.insertAtHead(5);
            ll.print();
            expect(ll.getSize()).toBe(1);
            expect(ll.isEmpty()).toBe(false);
            expect(ll.search(5)).toBe(5);
        });
        test('Insertion at the end of the list', () => {
            ll.insertAtTail(10);
            expect(ll.getSize()).toBe(1);
            expect(ll.isEmpty()).toBe(false);
            expect(ll.search(10)).toBe(10);
        });
        test('Insertion at a specific index', () => {
            ll.insertAtIndex(0, 5);
            ll.insertAtIndex(1, 10);
            ll.insertAtIndex(1, 7);
            expect(ll.getSize()).toBe(3);
            expect(ll.search(10)).toBe(10);
        });
    });
    describe('Deletion', () => {
        beforeEach(() => {
            ll.insertAtTail(5);
            ll.insertAtTail(10);
        });
        test('Deletion from the beginning of the list', () => {
            ll.deleteAtHead();
            expect(ll.getSize()).toBe(1);
            expect(ll.isEmpty()).toBe(false);
            expect(ll.search(5)).toBeNull();
        });
        test('Deletion from the end of the list', () => {
            ll.deleteAtTail();
            expect(ll.getSize()).toBe(1);
            expect(ll.isEmpty()).toBe(false);
            expect(ll.search(10)).toBeNull();
        });
        test('Deletion at a specific index', () => {
            ll.deleteAtIndex(1);
            expect(ll.getSize()).toBe(1);
            expect(ll.isEmpty()).toBe(false);
            expect(ll.search(10)).toBeNull();
        });
    });
    describe('Traversal', () => {
        beforeEach(() => {
            ll.insertAtTail(5);
            ll.insertAtTail(10);
            ll.insertAtTail(15);
        });
        test('Traversal from beginning to end', () => {
            const result = [];
            for (let element of ll) {
                result.push(element);
            }
            expect(result).toEqual([5, 10, 15]);
        });
    });
    describe('Search', () => {
        beforeEach(() => {
            ll.insertAtTail(5);
            ll.insertAtTail(10);
        });
        test('Search for an existing node', () => {
            expect(ll.search(5)).toBe(5);
        });
        test('Search for a non-existing node', () => {
            expect(ll.search(15)).toBeNull();
        });
        test('Search for an existing node', () => {
            expect(ll.search(10)).toBe(10);
        });
    });
    describe('Edge Cases', () => {
        test('Handling empty list for deletion', () => {
            expect(ll.deleteAtHead()).toBeNull();
        });
        test('Handling list with a single node', () => {
            ll.insertAtHead(5);
            expect(ll.deleteAtHead()).toBe(5);
            expect(ll.isEmpty()).toBe(true);
        });
        test('Handling large number of nodes', () => {
            const numNodes = 1000;
            for (let i = 0; i < numNodes; i++) {
                ll.insertAtTail(i);
            }
            expect(ll.getSize()).toBe(numNodes);
        });
    });
    describe('Error Handling', () => {
        test('Insertion at invalid index', () => {
            expect(ll.insertAtIndex(-1, 5)).toBe(false);
        });
        test('Deletion at invalid index', () => {
            expect(ll.deleteAtIndex(1)).toBeNull();
        });
    });
});
