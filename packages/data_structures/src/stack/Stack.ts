import { LinkedList } from "../linked_list";

class Stack<T> {
  private s: LinkedList<T>;
  private comparator: (a: T, b: T) => -1 | 0 | 1;
  
  constructor(comparator: (a: T, b: T) => -1 | 0 | 1) {
    this.comparator = comparator
    this.s = new LinkedList<T>(this.comparator)
  }

  public push(element: T): void {
    this.s.insertAtHead(element)
  }

  public pop(): T | null {
    return this.s.deleteAtHead()
  }

  public isEmpty(): boolean {
    return this.s.isEmpty()
  }

  public getSize(): number {
    return this.s.getSize()
  }

  public search(element: T): T | null {
    return this.s.search(element)
  } 

  [Symbol.iterator](): IterableIterator<T> {
    return this.s[Symbol.iterator]();
  }
}

export {
  Stack
};
