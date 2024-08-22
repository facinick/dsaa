declare class PriorityQueue<T> {
    private readonly getPriorityNodeFunction;
    private readonly dynamicArray;
    constructor(getPriorityNodeFunction: (a: T, b: T) => T);
    private heapifyUp;
    private heapifyDown;
    private swap;
    private isHigherPriority;
    isEmpty: () => boolean;
    contains: (element: T) => boolean;
    enqueue: (element: T) => void;
    dequeue: () => T | null;
}
export { PriorityQueue };
