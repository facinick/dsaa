import { Heap, HeapNode } from "./heap";

class TestNode extends HeapNode<TestNode> {
    public value: number;
    public changable: number;

    constructor(value: number) {
        super();
        this.value = value;
        this.changable = value;
    }

    compareTo(other: TestNode): number {
        // More value => higher priority
        return this.value - other.value;
    }
}

describe('Heap', () => {
    let heap: Heap<TestNode>;

    beforeEach(() => {
        heap = new Heap<TestNode>();
    });

    test('should start empty', () => {
        expect(heap.isEmpty()).toBe(true);
        expect(heap.size()).toBe(0);
        expect(heap.pop()).toBe(undefined);
        expect(heap.peek()).toBe(undefined);
    });

    test('should add and remove elements with correct heapIndex', () => {
        heap.push(new TestNode(8));
        heap.push(new TestNode(3));
        heap.push(new TestNode(1));
        heap.push(new TestNode(7));
        heap.push(new TestNode(4));
        heap.push(new TestNode(2));
        heap.push(new TestNode(5));
        heap.push(new TestNode(6));

        expect(heap.size()).toBe(8);

        while (!heap.isEmpty()) {
            expect(heap.peek()?.heapIndex).toBe(0);
            expect(heap.pop()?.value).toBe(heap.size() + 1);
        }

        expect(heap.isEmpty()).toBe(true);
        expect(heap.size()).toBe(0);
    });

    test('should replace the top element and update heapIndex', () => {
        const node1 = new TestNode(1);
        const node2 = new TestNode(2);
        const node3 = new TestNode(3);

        heap.push(node1);
        heap.push(node2);

        expect(heap.peek()?.value).toBe(2);

        heap.replace(node3);

        expect(node3.heapIndex).toBe(0);
        expect(heap.peek()?.value).toBe(3);
    });

    test('should update item and maintain correct heapIndex', () => {
        const node1 = new TestNode(1);
        const node2 = new TestNode(2);

        heap.push(node1);
        heap.push(node2);

        expect(node1.heapIndex).toBe(1);
        expect(node2.heapIndex).toBe(0);

        node1.value = 5; // Change the value to have higher priority
        heap.updateItem(node1);

        expect(heap.peek()?.value).toBe(5);
        expect(node1.heapIndex).toBe(0);
        expect(node2.heapIndex).toBe(1);
    });

    test('should handle duplicate elements correctly', () => {
        const node1 = new TestNode(10);
        const node2 = new TestNode(10);

        heap.push(node1);
        heap.push(node2);

        expect(heap.size()).toBe(2);
        expect(heap.peek()?.value).toBe(10);

        const poppedNode1 = heap.pop();
        const poppedNode2 = heap.pop();

        expect(poppedNode1?.value).toBe(10);
        expect(poppedNode2?.value).toBe(10);
        expect(poppedNode1).not.toBe(poppedNode2);

        expect(heap.isEmpty()).toBe(true);
    });

    test('should handle large datasets', () => {
        const size = 1000;
        const nodes = Array.from({ length: size }, (_, i) => new TestNode(i + 1));

        nodes.forEach(node => heap.push(node));

        expect(heap.size()).toBe(size);

        let lastValue = size + 1;
        while (!heap.isEmpty()) {
            const current = heap.pop();
            expect(current?.value).toBeLessThan(lastValue);
            lastValue = current!.value;
        }

        expect(heap.isEmpty()).toBe(true);
    });

    test('should correctly handle updateItem with decreased value', () => {
        const node1 = new TestNode(10);
        const node2 = new TestNode(20);
        const node3 = new TestNode(15);

        heap.push(node1);
        heap.push(node2);
        heap.push(node3);

        node2.value = 5; // Decrease value to lowest priority
        heap.updateItem(node2);

        expect(heap.peek()?.value).toBe(15);
        expect(node2.heapIndex).toBe(2);
    });

    test('should correctly handle updateItem with increased value', () => {
        const node1 = new TestNode(10);
        const node2 = new TestNode(5);

        heap.push(node1);
        heap.push(node2);

        expect(heap.peek()?.value).toBe(10);

        node2.value = 15;
        heap.updateItem(node2);

        expect(heap.peek()?.value).toBe(15);
        expect(node2.heapIndex).toBe(0);
        expect(node1.heapIndex).toBe(1);
    });

    test('should return null for contains with an invalid index', () => {
        const node1 = new TestNode(10);
        expect(heap.contains(node1)).toBeNull();
    });

    test('should return the correct element in contains when valid', () => {
        const node1 = new TestNode(10);
        heap.push(node1);
        expect(heap.contains(node1)).toBe(node1);
    });

    test('should handle invalid index in updateItem', () => {
        const node = new TestNode(10);
        expect(() => heap.updateItem(node)).toThrowError('Invalid heapIndex');
    });

    test('should handle multiple updates and maintain heap integrity', () => {
        const nodes = [10, 5, 20, 15, 25].map(value => new TestNode(value));

        nodes.forEach(node => heap.push(node));

        // Update multiple nodes
        nodes[2].value = 1;  // Lower priority
        nodes[0].value = 30; // Higher priority
        heap.updateItem(nodes[2]);
        heap.updateItem(nodes[0]);

        expect(heap.peek()?.value).toBe(30);
        expect(nodes[0].heapIndex).toBe(0);
        expect(nodes[2].heapIndex).toBe(4);
    });

    test('should correctly handle heapIndex updates after pop and push', () => {
        const nodes = [10, 20, 30, 40, 50].map(value => new TestNode(value));

        nodes.forEach(node => heap.push(node));

        const poppedNode = heap.pop();
        expect(poppedNode?.value).toBe(50);

        const newNode = new TestNode(25);
        heap.push(newNode);

        expect(newNode.heapIndex).toBeLessThan(5);
        expect(heap.peek()?.value).toBe(40);
    });

    test('should handle consecutive pops correctly', () => {
        const nodes = [10, 20, 30, 40, 50].map(value => new TestNode(value));

        nodes.forEach(node => heap.push(node));

        let lastValue = Infinity;
        while (!heap.isEmpty()) {
            const poppedNode = heap.pop();
            expect(poppedNode?.value).toBeLessThan(lastValue);
            lastValue = poppedNode!.value;
        }

        expect(heap.isEmpty()).toBe(true);
    });
});
