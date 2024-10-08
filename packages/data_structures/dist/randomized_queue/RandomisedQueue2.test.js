import { getRandomIntBetween } from 'utils';
import { RandomisedQueue2 } from './RandomisedQueue2';
jest.mock('utils', () => ({
    getRandomIntBetween: jest.fn(),
}));
describe('RandomisedQueue2', () => {
    let queue;
    beforeEach(() => {
        queue = new RandomisedQueue2();
        jest.clearAllMocks();
    });
    describe('Initialization', () => {
        test('should initialize an empty queue', () => {
            expect(queue.getSize()).toBe(0);
            expect(queue.isEmpty()).toBe(true);
            expect(queue.getCapacity()).toBe(1);
        });
    });
    describe('Enqueue operation', () => {
        test('should add an item to the queue', () => {
            queue.enqueue(1);
            expect(queue.getSize()).toBe(1);
            expect(queue.isEmpty()).toBe(false);
        });
        test('should resize the array when capacity is reached', () => {
            queue.enqueue(1);
            queue.enqueue(2); // Should trigger resize
            expect(queue.getCapacity()).toBe(2);
            queue.enqueue(3);
            expect(queue.getCapacity()).toBe(4);
            expect(queue.getSize()).toBe(3);
        });
    });
    describe('Dequeue operation', () => {
        test('should return null when dequeueing from an empty queue', () => {
            expect(queue.dequeue()).toBeNull();
        });
        test('should remove and return a random item from the queue', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            getRandomIntBetween.mockReturnValueOnce(1);
            const removedItem = queue.dequeue();
            expect(removedItem).toBe(2);
            expect(queue.getSize()).toBe(2);
        });
        test('should resize the array when quarter full', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            queue.enqueue(4);
            getRandomIntBetween.mockReturnValueOnce(0);
            queue.dequeue();
            queue.dequeue();
            queue.dequeue();
            expect(queue.getCapacity()).toBe(2);
        });
    });
    describe('Sample operation', () => {
        test('should return null when sampling from an empty queue', () => {
            expect(queue.sample()).toBeNull();
        });
        test('should return a random item from the queue without removing it', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            getRandomIntBetween.mockReturnValueOnce(2);
            const sampledItem = queue.sample();
            expect(sampledItem).toBe(3);
            expect(queue.getSize()).toBe(3);
        });
    });
    describe('Edge cases', () => {
        test('should handle enqueue and dequeue correctly with multiple operations', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            queue.enqueue(4);
            queue.enqueue(5);
            expect(queue.getSize()).toBe(5);
            getRandomIntBetween.mockReturnValueOnce(3);
            expect(queue.dequeue()).toBe(4);
            getRandomIntBetween.mockReturnValueOnce(0);
            expect(queue.dequeue()).toBe(1);
            expect(queue.getSize()).toBe(3);
        });
        test('should maintain correct size after multiple resizes', () => {
            for (let i = 0; i < 100; i++) {
                queue.enqueue(i);
            }
            expect(queue.getSize()).toBe(100);
            for (let i = 0; i < 50; i++) {
                queue.dequeue();
            }
            expect(queue.getSize()).toBe(50);
            for (let i = 0; i < 50; i++) {
                queue.dequeue();
            }
            expect(queue.getSize()).toBe(0);
            expect(queue.isEmpty()).toBe(true);
        });
    });
});
