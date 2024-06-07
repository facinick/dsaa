"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = require("../queue");
describe('Queue Tests', () => {
    let queue;
    beforeEach(() => {
        queue = new queue_1.Queue((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    });
    describe('Initialization', () => {
        test('New queue should be empty', () => {
            expect(queue.isEmpty()).toBe(true);
            expect(queue.getSize()).toBe(0);
        });
    });
    describe('Enqueue', () => {
        test('Enqueuing elements into the queue', () => {
            queue.enqueue(5);
            queue.enqueue(10);
            expect(queue.getSize()).toBe(2);
            expect(queue.isEmpty()).toBe(false);
        });
    });
    describe('Dequeue', () => {
        beforeEach(() => {
            queue.enqueue(5);
            queue.enqueue(10);
        });
        test('Dequeuing elements from the queue', () => {
            const dequeuedElement = queue.dequeue();
            expect(dequeuedElement).toBe(5);
            expect(queue.getSize()).toBe(1);
        });
        test('Dequeuing from an empty queue should return null', () => {
            queue.dequeue();
            queue.dequeue();
            expect(queue.dequeue()).toBeNull();
        });
    });
    describe('Search', () => {
        beforeEach(() => {
            queue.enqueue(5);
            queue.enqueue(10);
        });
        test('Searching for an existing element', () => {
            expect(queue.search(10)).toBe(10);
        });
        test('Searching for a non-existing element', () => {
            expect(queue.search(15)).toBeNull();
        });
    });
    describe('Iteration', () => {
        test('Iterating through the queue in FIFO order', () => {
            queue.enqueue(5);
            queue.enqueue(10);
            const result = [];
            for (const value of queue) {
                result.push(value);
            }
            expect(result).toEqual([5, 10]);
        });
    });
    describe('Edge Cases', () => {
        test('Handling empty queue for dequeue', () => {
            expect(queue.dequeue()).toBeNull();
        });
        test('Handling large number of elements', () => {
            const numElements = 1000;
            for (let i = 0; i < numElements; i++) {
                queue.enqueue(i);
            }
            expect(queue.getSize()).toBe(numElements);
        });
    });
});
