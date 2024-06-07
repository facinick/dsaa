class DllNode<T> {
  public value: T;
  public next: DllNode<T> | null
  public previous: DllNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

export {
  DllNode
};
