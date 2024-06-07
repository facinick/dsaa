import { LinkedList } from "../linked_list";

class Queue<T> {
  private q: LinkedList<T>;
  private comparator: (a: T, b: T) => -1 | 0 | 1;
  
  constructor(comparator: (a: T, b: T) => -1 | 0 | 1) {
    this.comparator = comparator
    this.q = new LinkedList<T>(this.comparator)
  }

  public enqueue(element: T): void {
    this.q.insertAtHead(element)
  }

  public dequeue(): T | null {
    return this.q.deleteAtTail()
  }

  public isEmpty(): boolean {
    return this.q.isEmpty()
  }

  public getSize(): number {
    return this.q.getSize()
  }

  public search(element: T): T | null {
    return this.q.search(element)
  } 

  // print in reverse order
  [Symbol.iterator](): IterableIterator<T> {

    let elements = []
    for(let i of this.q) {
      elements.push(i)
    }
    
    let index = elements.length - 1;

    return {
      next: (): IteratorResult<T> => {
        if (index >= 0) {
          const value = elements[index];
          index--;
          return { done: false, value };
        } else {
          return { done: true, value: undefined as any };
        }
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  }
}

export {
  Queue
};
