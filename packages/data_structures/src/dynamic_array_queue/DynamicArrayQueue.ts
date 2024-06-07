class DynamicArrayQueue<T> {
  private q: Array<T>
  // this is where the oldest item is
  private head: number
  // this is where next item will come
  private tail: number
  private comparator: (a: T, b: T) => -1 | 0 | 1;

  constructor(comparator: (a: T, b: T) => -1 | 0 | 1) {
    this.q = new Array<T>(1)
    this.head = -1;
    this.tail = 0;
    this.comparator = comparator
  }

  // enqueue(element: T) {
  //   if(this.tail === this.q.length) {
  //     this.resize(this.q.length * 2)
  //   }

  //   this.q[this.tail] = element
  //   this.tail ++
  // }

  // dequeue(): T | null {

  //   if(this.isEmpty()) {
  //     return null
  //   }

  //   if(this.top === (this.q.length/4)) {
  //     this.resize(this.q.length / 2)
  //   }

  //   this.top --
  //   const poppedElement = this.q[this.top]
  //   delete this.q[this.top]
  //   return poppedElement
  // }

  // private resize(capacity: number) {
  //   const newArray = new Array<T>(capacity)

  //   for(let i=0; i<this.getSize(); i++) {
  //     newArray[i] = this.q[i]
  //   }

  //   this.q = newArray
  // }

  // public getSize(): number {
  //   return this.top
  // }

  // public search(element: T): T | null {
  //   for(let i=0; i<this.getSize(); i++) {
  //     if(this.q[i] === element) {
  //       return element
  //     } 
  //   }
  //   return null
  // } 

  // public isEmpty(): boolean {
  //   return this.q.length === 0 && this.getSize() === 0
  // }

  // [Symbol.iterator](): IterableIterator<T> {
  //   let head = this.top - 1;
    
  //   return {
  //     next: (): IteratorResult<T> => {
  //       if (head >= 0) {
  //         const value = this.q[head]
  //         head--
  //         return { done: false, value };
  //       } else {
  //         return { done: true, value: undefined as any };
  //       }
  //     },
  //     [Symbol.iterator]() {
  //       return this;
  //     }
  //   };
  // }
}

export {
  DynamicArrayQueue
};
