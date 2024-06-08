import { getRandomIntBetween } from "utils";

/**
 * A randomized queue implementation using resizing arrays
 * @template T The type of elements in the list.
 */
class RandomisedQueue2<T> {

  private a: Array<T>
  // next element to be inserted here
  private top: number

  /**
   * Constructs an empty randomized queue.
   */
  constructor() {
    this.a = new Array<T>(1)
    this.top = 0
  }

  /**
   * Returns the number of items in the queue.
   * @returns The number of items in the queue.
   */
  getSize(): number {
    return this.top
  }
  
  /**
   * Checks if the queue is empty.
   * @returns True if the queue is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.getSize() === 0
  }

  /**
   * Returns the capacity of the internal array.
   * @returns The capacity of the internal array.
   */
  getCapacity(): number {
    return this.a.length
  }

  /**
   * Adds an item to the queue.
   * @template T The type of elements in the list.
   * @param element - The item to add.
   */
  enqueue(element: T) {
    if(this.getSize() === this.getCapacity()) {
      this.resize(this.getCapacity() * 2)
    }

    this.a[this.top] = element;
    this.top++
  }

  /**
   * Removes and returns a random item from the queue.
   * @template T The type of elements in the list.
   * @returns {T | null} Returns the removed element if successfull or null.
   */
  dequeue(): T | null {
    if(this.isEmpty()) {
      return null
    }

    if(this.getSize() === (this.getCapacity() / 4)) {
      this.resize(this.getCapacity() / 2)
    }

    const indexToRemove = getRandomIntBetween(0, this.getSize() - 1)

    const removeedElement = this.a[indexToRemove]
    // move last element to the removed element
    this.a[indexToRemove] = this.a[this.top - 1]
    delete this.a[this.top - 1]
    this.top--;
    return removeedElement;
  }

  /**
   * Returns a random item from the queue without removing it.
   * @template T The type of elements in the list.
   * @returns {T | null} Returns a random element without actually removing it, or null if empty.
   */
  sample(): T | null {
    if(this.isEmpty()) {
      return null
    }

    const indexToReturn = getRandomIntBetween(0, this.getSize() - 1)
    return this.a[indexToReturn]
  }

  /**
   * Resizes the internal array to the given capacity.
   * @template T The type of elements in the list.
   * @param capacity - The new capacity.
   */
  private resize(capacity: number): void {
    const copyArray = new Array<T>(capacity)
    for(let i=0; i<this.getSize(); i++) {
      copyArray[i] = this.a[i]
    }
    this.a = copyArray
  }

  /**
   * Returns an iterator for the list, allowing the use of for...of loops.
   *
   * @returns {IterableIterator<T>} An iterator for the list.
   */
  [Symbol.iterator](): IterableIterator<T> {
    let arr = [...this.a];
    let top = this.getSize()
    
    return {
      next: (): IteratorResult<T> => {
        if (top > 0) {

          const indexToReturn = getRandomIntBetween(0, top - 1)
          const value = arr[indexToReturn]
          arr[indexToReturn] = arr[top-1]
          delete arr[top-1]
          top--;

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
  RandomisedQueue2
};
