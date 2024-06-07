import { DoublyLinkedList } from "../doubly_linked_list";

class Deque<T> {
  private dll: DoublyLinkedList<T>;
  private comparator: (a: T, b: T) => -1 | 0 | 1;
  
  constructor(comparator: (a: T, b: T) => -1 | 0 | 1) {
    this.comparator = comparator
    this.dll = new DoublyLinkedList<T>(this.comparator)
  }

  insertAtStart(element: T) {
    return this.dll.insertAtHead(element)
  }

  insertAtEnd(element: T) {
    return this.dll.insertAtTail(element)
  }

  removeAtStart(): T | null {
    return this.dll.deleteAtHead()
  }

  removeAtEnd(): T | null {
    return this.dll.deleteAtTail()
  }

  isEmpty(): boolean {
    return this.dll.isEmpty()
  }

  getSize(): number {
    return this.dll.getSize()
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this.dll[Symbol.iterator]();
  }
}

export { Deque };
