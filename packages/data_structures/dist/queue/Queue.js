import { LinkedList } from "../linked_list";
class Queue {
    constructor(comparator) {
        this.comparator = comparator;
        this.q = new LinkedList(this.comparator);
    }
    enqueue(element) {
        this.q.insertAtHead(element);
    }
    dequeue() {
        return this.q.deleteAtTail();
    }
    isEmpty() {
        return this.q.isEmpty();
    }
    getSize() {
        return this.q.getSize();
    }
    search(element) {
        return this.q.search(element);
    }
    // print in reverse order
    [Symbol.iterator]() {
        let elements = [];
        for (let i of this.q) {
            elements.push(i);
        }
        let index = elements.length - 1;
        return {
            next: () => {
                if (index >= 0) {
                    const value = elements[index];
                    index--;
                    return { done: false, value };
                }
                else {
                    return { done: true, value: undefined };
                }
            },
            [Symbol.iterator]() {
                return this;
            }
        };
    }
}
export { Queue };
