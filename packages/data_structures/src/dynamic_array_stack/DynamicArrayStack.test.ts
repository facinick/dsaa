import { DynamicArrayStack } from "./DynamicArrayStack";

describe("Dynamic Array Stack tests", () => {
  let da: DynamicArrayStack<number>;

  beforeEach(() => {
    da = new DynamicArrayStack<number>((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  });

  describe('Initialization', () => {
    test('New dynamic array stack should be empty with length 1', () => {
      expect(da.isEmpty()).toBe(true);
      expect(da.getMaxSpace()).toBe(1);
      expect(da.getSize()).toBe(0);
    });
  });

  describe('Array size grow', () => {

    test('size should increase from 1 to 2 to 4 to 8 to 16 to 32', () => {
      expect(da.isEmpty()).toBe(true);
      expect(da.getMaxSpace()).toBe(1);
      expect(da.getSize()).toBe(0);

      da.push(1)
      expect(da.isEmpty()).toBe(false);
      expect(da.getMaxSpace()).toBe(1);
      expect(da.getSize()).toBe(1);

      da.push(2)
      expect(da.getMaxSpace()).toBe(2);
      expect(da.getSize()).toBe(2);

      da.push(3)
      expect(da.getMaxSpace()).toBe(4);
      expect(da.getSize()).toBe(3);

      da.push(4)
      expect(da.getMaxSpace()).toBe(4);
      expect(da.getSize()).toBe(4);


      da.push(5)
      expect(da.getMaxSpace()).toBe(8);
      expect(da.getSize()).toBe(5);

      da.push(6)
      da.push(7)
      da.push(8)
      expect(da.getMaxSpace()).toBe(8);
      expect(da.getSize()).toBe(8);

      da.push(9)
      expect(da.getMaxSpace()).toBe(16);
      expect(da.getSize()).toBe(9);

      da.push(10)
      da.push(11)
      da.push(12)
      da.push(13)
      da.push(14)
      da.push(15)
      da.push(16)
      da.push(17)
      expect(da.getMaxSpace()).toBe(32);
      expect(da.getSize()).toBe(17);
    });
  });
})