import { getRandomIntBetween } from 'utils';
import { DoublyLinkedList } from "../doubly_linked_list";
class RandomizedQueue<T> {

  private dll: DoublyLinkedList<T>
  private comparator: (a: T, b: T) => -1 | 0 | 1;

  constructor(comparator: (a: T, b: T) => -1 | 0 | 1) {
    this.comparator = comparator
    this.dll = new DoublyLinkedList(this.comparator)
  }

  isEmpty(): boolean {
    return this.dll.isEmpty()
  }

  getSize(): number {
    return this.dll.getSize()
  }

  enqueue(element: T): boolean {
    return this.dll.insertAtHead(element)
  }

  dequeue(): T | null {
    const min = 0;
    const max = this.getSize() - 1
    if(min < max) {
      return null
    }
    
    const randomInt = getRandomIntBetween(min, max)
    return this.dll.deleteAtIndex(randomInt)
  }

  sample(): T | null {
    const min = 0;
    const max = this.getSize() - 1
    if(min < max) {
      return null
    }
    
    const randomInt = getRandomIntBetween(min, max)
    return this.dll.peekAtIndex(randomInt)
  }
}

export {
  RandomizedQueue
};
