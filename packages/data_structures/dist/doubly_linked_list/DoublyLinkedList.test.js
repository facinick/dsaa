"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DoublyLinkedList_1 = require("./DoublyLinkedList");
describe('LinkedList Tests', () => {
    let list;
    beforeEach(() => {
        list = new DoublyLinkedList_1.DoublyLinkedList((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    });
    describe('Initialization', () => {
        test('initial state', () => {
            expect(list.isEmpty()).toBe(true);
            expect(list.getSize()).toBe(0);
        });
    });
    describe('Insertion', () => {
        test('insertAtHead on empty list', () => {
            expect(list.insertAtHead(10)).toBe(true);
            expect(list.isEmpty()).toBe(false);
            expect(list.getSize()).toBe(1);
            expect(list.search(10)).toBe(10);
            expect(list.search(20)).toBeNull();
        });
        test('insertAtTail on empty list', () => {
            expect(list.insertAtTail(20)).toBe(true);
            expect(list.isEmpty()).toBe(false);
            expect(list.getSize()).toBe(1);
            expect(list.search(20)).toBe(20);
            expect(list.search(10)).toBeNull();
        });
        test('insertAtIndex out of bounds', () => {
            expect(list.insertAtIndex(-1, 10)).toBe(false);
            expect(list.insertAtIndex(1, 10)).toBe(false);
        });
        test('insertAtIndex on non-empty list', () => {
            list.insertAtHead(10);
            expect(list.getSize()).toBe(1);
            list.insertAtTail(20);
            expect(list.insertAtIndex(1, 15)).toBe(true);
            expect(list.getSize()).toBe(3);
            expect(list.search(15)).toBe(15);
        });
        test('insertAtIndex in the middle', () => {
            list.insertAtHead(10);
            list.insertAtTail(30);
            expect(list.insertAtIndex(1, 20)).toBe(true);
            expect(list.getSize()).toBe(3);
            expect(list.search(20)).toBe(20);
        });
    });
    describe('Deletion', () => {
        test('deleteAtHead on empty list', () => {
            expect(list.deleteAtHead()).toBeNull();
        });
        test('deleteAtTail on empty list', () => {
            expect(list.deleteAtTail()).toBeNull();
        });
        test('deleteAtIndex out of bounds', () => {
            expect(list.deleteAtIndex(-1)).toBeNull();
            expect(list.deleteAtIndex(1)).toBeNull();
        });
        test('deleteAtHead on non-empty list', () => {
            list.insertAtHead(10);
            list.insertAtTail(20);
            expect(list.deleteAtHead()).toBe(10);
            expect(list.getSize()).toBe(1);
            expect(list.search(10)).toBeNull();
        });
        test('deleteAtTail on non-empty list', () => {
            list.insertAtHead(10);
            list.insertAtTail(20);
            expect(list.deleteAtTail()).toBe(20);
            expect(list.getSize()).toBe(1);
            expect(list.search(20)).toBeNull();
        });
        test('deleteAtIndex on non-empty list', () => {
            list.insertAtHead(10);
            list.insertAtTail(20);
            list.insertAtTail(30);
            expect(list.deleteAtIndex(1)).toBe(20);
            expect(list.getSize()).toBe(2);
            expect(list.search(20)).toBeNull();
        });
        test('deleteAtIndex from the middle', () => {
            list.insertAtHead(10);
            list.insertAtTail(20);
            list.insertAtTail(30);
            expect(list.deleteAtIndex(1)).toBe(20);
            expect(list.getSize()).toBe(2);
            expect(list.search(20)).toBeNull();
        });
    });
    describe('Traversal', () => {
        test('iterate over list', () => {
            list.insertAtHead(10);
            list.insertAtTail(20);
            list.insertAtTail(30);
            const elements = [];
            for (const element of list) {
                elements.push(element);
            }
            expect(elements).toEqual([10, 20, 30]);
        });
    });
    describe('Search', () => {
        test('search in empty list', () => {
            expect(list.search(10)).toBeNull();
        });
        test('search in non-empty list', () => {
            list.insertAtHead(10);
            list.insertAtTail(20);
            expect(list.search(20)).toBe(20);
            expect(list.search(10)).toBe(10);
            expect(list.search(30)).toBeNull();
        });
    });
});
