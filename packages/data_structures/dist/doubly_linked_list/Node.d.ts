declare class DllNode<T> {
    value: T;
    next: DllNode<T> | null;
    previous: DllNode<T> | null;
    constructor(value: T);
}
export { DllNode };
