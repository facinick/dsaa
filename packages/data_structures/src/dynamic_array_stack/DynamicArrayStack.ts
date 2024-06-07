class DynamicArrayStack<T> {
  private stack: Array<T>
  // this is where next item will come
  private top: number
  private comparator: (a: T, b: T) => -1 | 0 | 1;

  constructor(comparator: (a: T, b: T) => -1 | 0 | 1) {
    this.stack = new Array<T>(1)
    this.top = 0;
    this.comparator = comparator
  }

  push(element: T) {
    if(this.top === this.getMaxSpace()) {
      this.resize(this.getMaxSpace() * 2)
    }

    this.stack[this.top] = element
    this.top ++
  }

  pop(): T | null {

    if(this.isEmpty()) {
      return null
    }

    if(this.top === (this.stack.length/4)) {
      this.resize(this.stack.length / 2)
    }

    this.top --
    const poppedElement = this.stack[this.top]
    delete this.stack[this.top]
    return poppedElement
  }

  private resize(capacity: number) {
    const newArray = new Array<T>(capacity)

    for(let i=0; i<this.getSize(); i++) {
      newArray[i] = this.stack[i]
    }

    this.stack = newArray
  }

  public getSize(): number {
    return this.top
  }

  public search(element: T): T | null {
    for(let i=0; i<this.getSize(); i++) {
      if(this.stack[i] === element) {
        return element
      } 
    }
    return null
  } 

  public isEmpty(): boolean {
    return this.getSize() === 0
  }

  public getMaxSpace(): number {
    return this.stack.length
  }

  [Symbol.iterator](): IterableIterator<T> {
    let head = this.top - 1;
    
    return {
      next: (): IteratorResult<T> => {
        if (head >= 0) {
          const value = this.stack[head]
          head--
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
  DynamicArrayStack
};
