import { DllNode as Node } from "./Node";

// head: root (either null or a node with next === null / another node)
// length: SIZE = [0... SIZE-1]

class DoublyLinkedList<T> {
  private size: number;
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private comparator: (a: T, b: T) => -1 | 0 | 1;

  constructor(comparator: (a: T, b: T) => -1 | 0 | 1) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.comparator = comparator
  }

  // insert at SIZE (insertAtTail)
  insertAtTail(element: T): boolean {
    return this.insertAtIndex(this.size, element)
  }

  // insert at 0 (insertAtHead)
  insertAtHead(element: T): boolean {
    return this.insertAtIndex(0, element)
  }

  // insert at x
  insertAtIndex(index: number, element: T): boolean {
    if (index < 0 || index > this.size) {
      return false;
    }

    const newNode = new Node<T>(element);

     // new
    if(this.isEmpty()) {
      newNode.next = null;
      newNode.previous = null;
      this.head = newNode;
      this.tail = newNode;
    } 
    // insert at start
    else if(index === 0) {
      newNode.next = this.head;
      newNode.previous = null;
      if(newNode.next) {
        newNode.next.previous = newNode
      }
      this.head = newNode;
    }
    // insert at end
    else if(index === this.size) {
      newNode.next = null;
      newNode.previous = this.tail;
      if(newNode.previous) {
        newNode.previous.next = newNode
      }
      this.tail = newNode;
    }
     // insert between start and end
    else {
      const size = this.getSize()
      let current;
      if(index < size / 2) {
        current = this.head;
        for(let i=0; i<index && current !== null; i++) {
          current = current.next
        }
      } 
      
      else {
        current = this.tail;
        for(let i=size-1; i > index && current !== null; i--) {
          current = current.previous
        }
      }

      if(current) {
        newNode.previous = current.previous
        newNode.next = current

        if(newNode.previous) {
          newNode.previous.next = newNode
        }

        if(newNode.next) {
          newNode.next.previous = newNode
        }
      } 
    }
    
    this.size++;
    return true;
  }

  // remove at x
  deleteAtIndex(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let removedElement: T;

    if(this.isEmpty()) {
      return null;
    }

    else if(index === 0 && this.head) {
      removedElement = this.head.value
      this.head = this.head.next
      if(this.head) {
        this.head.previous = null
      }
    }

    else if(index === this.size - 1 && this.tail) {
      removedElement = this.tail.value
      this.tail = this.tail.previous
      if(this.tail) {
        this.tail.next = null
      }
    } 

    else {
      const size = this.getSize()
      let current;

      if(index < size / 2) {
        current = this.head;
        for(let i=0; i<index && current !== null; i++) {
          current = current.next
        }
      } 
      
      else {
        current = this.tail;
        for(let i=size; i > index && current !== null; i--) {
          current = current.previous
        }
      }
      
      if(current) {
        removedElement = current.value
        let previous = current.previous
        let next = current.next
        
        if(previous) {
          previous.next = next
        }

        if(next) {
          next.previous = previous
        }
      } else {
        return null
      }
    }

    this.size--;
    return removedElement;
  }

  // remove at SIZE-1 (deleteAtTail)
  deleteAtTail(): T | null {
    return this.deleteAtIndex(this.size - 1)
  }

  // remove at 0 (deleteAtHead)
  deleteAtHead(): T | null {
    return this.deleteAtIndex(0)
  }

  // search NODE / has NODE
  search(data: T): T | null {
    let current = this.head;
    while (current) {
      if (this.comparator(current.value, data) === 0) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  getSize(): number {
    return this.size
  }

  isEmpty(): boolean {
    return this.head === null && this.tail === null
  }
  
  [Symbol.iterator](): IterableIterator<T> {
    let current = this.head;
    
    return {
      next: (): IteratorResult<T> => {
        if (current) {
          const value = current.value;
          current = current.next;
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
  DoublyLinkedList
};
