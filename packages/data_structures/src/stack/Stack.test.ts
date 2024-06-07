import { Stack } from '../stack';

describe('Stack Tests', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  });

  describe('Initialization', () => {
    test('New stack should be empty', () => {
      expect(stack.isEmpty()).toBe(true);
      expect(stack.getSize()).toBe(0);
    });
  });

  describe('Push', () => {
    test('Pushing elements onto the stack', () => {
      stack.push(5);
      stack.push(10);
      expect(stack.getSize()).toBe(2);
      expect(stack.isEmpty()).toBe(false);
    });
  });

  describe('Pop', () => {
    beforeEach(() => {
      stack.push(5);
      stack.push(10);
    });

    test('Popping elements from the stack', () => {
      const poppedElement = stack.pop();
      expect(poppedElement).toBe(10);
      expect(stack.getSize()).toBe(1);
    });

    test('Popping from an empty stack should return null', () => {
      stack.pop();
      stack.pop();
      expect(stack.pop()).toBeNull();
    });
  });

  describe('Search', () => {
    beforeEach(() => {
      stack.push(5);
      stack.push(10);
    });

    test('Searching for an existing element', () => {
      expect(stack.search(10)).toBe(10);
    });

    test('Searching for a non-existing element', () => {
      expect(stack.search(15)).toBeNull();
    });
  });

  describe('Iteration', () => {
    test('Iterating through the stack', () => {
      stack.push(5);
      stack.push(10);
      const result: number[] = [];
      for (const value of stack) {
        result.push(value);
      }
      expect(result).toEqual([10, 5]);
    });
  });

  describe('Edge Cases', () => {
    test('Handling empty stack for pop', () => {
      expect(stack.pop()).toBeNull();
    });

    test('Handling large number of elements', () => {
      const numElements = 1000;
      for (let i = 0; i < numElements; i++) {
        stack.push(i);
      }
      expect(stack.getSize()).toBe(numElements);
    });
  });
});
