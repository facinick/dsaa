import { DoublyLinkedList } from "../doubly_linked_list";
class Deque {
    constructor(comparator) {
        this.comparator = comparator;
        this.dll = new DoublyLinkedList(this.comparator);
    }
    insertAtStart(element) {
        return this.dll.insertAtHead(element);
    }
    insertAtEnd(element) {
        return this.dll.insertAtTail(element);
    }
    removeAtStart() {
        return this.dll.deleteAtHead();
    }
    removeAtEnd() {
        return this.dll.deleteAtTail();
    }
    isEmpty() {
        return this.dll.isEmpty();
    }
    getSize() {
        return this.dll.getSize();
    }
    [Symbol.iterator]() {
        return this.dll[Symbol.iterator]();
    }
}
export { Deque };
