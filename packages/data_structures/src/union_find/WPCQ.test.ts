import { WPCQ } from './WPCQ';

describe('Weighted Path Compression Quick Union Tests', () => {
  let wpcq: WPCQ;

  beforeEach(() => {
    wpcq = new WPCQ(10);
  });

  describe('Initialization', () => {
    test('New WPCQ instance should be initialized correctly', () => {
      expect(wpcq.count()).toBe(10);
      expect(wpcq.getData()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe('Union and Find Operations', () => {
    test('Union of two components should be successful', () => {
      expect(wpcq.getData()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      wpcq.union(0, 1);
      expect(wpcq.count()).toBe(9);
      expect(wpcq.connected(0, 1)).toBe(true);
    });

    test('Union of multiple components should be successful', () => {
      wpcq.union(0, 1);
      wpcq.union(2, 3);
      wpcq.union(4, 5);
      wpcq.union(6, 7);
      wpcq.union(8, 9);
      expect(wpcq.count()).toBe(5);
      expect(wpcq.connected(0, 1)).toBe(true);
      expect(wpcq.connected(2, 3)).toBe(true);
      expect(wpcq.connected(4, 5)).toBe(true);
      expect(wpcq.connected(6, 7)).toBe(true);
      expect(wpcq.connected(8, 9)).toBe(true);
    });

    test('Find operation should return correct root', () => {
      wpcq.union(0, 1);
      wpcq.union(1, 2);
      expect(wpcq.find(2)).toBe(0);
    });

    test('Union and Find operations should handle different scenarios', () => {
      wpcq.union(0, 1);
      wpcq.union(1, 2);
      wpcq.union(3, 4);
      wpcq.union(4, 5);
      wpcq.union(6, 7);
      wpcq.union(8, 9);
      // 0 1 2
      // 3 4 5
      // 6 7
      // 8 9
      expect(wpcq.count()).toBe(4);
      expect(wpcq.connected(0, 2)).toBe(true);
      expect(wpcq.connected(3, 5)).toBe(true);
      expect(wpcq.connected(6, 7)).toBe(true);
      expect(wpcq.connected(8, 9)).toBe(true);
      expect(wpcq.connected(0, 7)).toBe(false);
    });
  });

  describe('Component Finding', () => {
    test('Finding component should return correct component', () => {
      wpcq.union(0, 1);
      wpcq.union(1, 2);
      wpcq.union(3, 4);
      wpcq.union(4, 5);
      wpcq.union(6, 7);
      wpcq.union(8, 9);

      const component = wpcq.findComponent(4);
      expect(component).toEqual([3, 4, 5]);
    });
  });

  describe('Edge Cases', () => {
    test('Handling initialization with size 0', () => {
      const wpcqZeroSize = new WPCQ(0);
      expect(wpcqZeroSize.count()).toBe(0);
    });

    test('Union and Find operations with size 0', () => {
      const wpcqZeroSize = new WPCQ(0);
      wpcqZeroSize.union(0, 1);
      expect(wpcqZeroSize.find(0)).toBe(null);
      expect(wpcqZeroSize.connected(0, 1)).toBe(false);
    });

    test('Union and Find operations with size 1', () => {
      const wpcqSize1 = new WPCQ(1);
      wpcqSize1.union(0, 0);
      expect(wpcqSize1.find(0)).toBe(0);
      expect(wpcqSize1.connected(0, 0)).toBe(true);
    });
  });
});
