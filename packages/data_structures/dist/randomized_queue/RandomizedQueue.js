import { getRandomIntBetween } from 'utils';
import { DoublyLinkedList } from "../doubly_linked_list";
class RandomizedQueue {
    constructor(comparator) {
        this.comparator = comparator;
        this.dll = new DoublyLinkedList(this.comparator);
    }
    isEmpty() {
        return this.dll.isEmpty();
    }
    getSize() {
        return this.dll.getSize();
    }
    enqueue(element) {
        return this.dll.insertAtHead(element);
    }
    dequeue() {
        const min = 0;
        const max = this.getSize() - 1;
        if (min < max) {
            return null;
        }
        const randomInt = getRandomIntBetween(min, max);
        return this.dll.deleteAtIndex(randomInt);
    }
    sample() {
        const min = 0;
        const max = this.getSize() - 1;
        if (min < max) {
            return null;
        }
        const randomInt = getRandomIntBetween(min, max);
        return this.dll.peekAtIndex(randomInt);
    }
}
export { RandomizedQueue };
