import { LinkedList } from "../linked_list";
class Stack {
    constructor(comparator) {
        this.comparator = comparator;
        this.s = new LinkedList(this.comparator);
    }
    push(element) {
        this.s.insertAtHead(element);
    }
    pop() {
        return this.s.deleteAtHead();
    }
    isEmpty() {
        return this.s.isEmpty();
    }
    getSize() {
        return this.s.getSize();
    }
    search(element) {
        return this.s.search(element);
    }
    [Symbol.iterator]() {
        return this.s[Symbol.iterator]();
    }
}
export { Stack };
