class DynamicArrayStack {
    constructor() {
        this.stack = new Array(1);
        this.top = 0;
    }
    push(element) {
        if (this.top === this.getMaxSpace()) {
            this.resize(this.getMaxSpace() * 2);
        }
        this.stack[this.top] = element;
        this.top++;
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.top === (this.stack.length / 4)) {
            this.resize(this.stack.length / 2);
        }
        this.top--;
        const poppedElement = this.stack[this.top];
        delete this.stack[this.top];
        return poppedElement;
    }
    resize(capacity) {
        const newArray = new Array(capacity);
        for (let i = 0; i < this.getSize(); i++) {
            newArray[i] = this.stack[i];
        }
        this.stack = newArray;
    }
    getSize() {
        return this.top;
    }
    get(index) {
        if (index < 0 || index >= this.getSize()) {
            return null;
        }
        return this.stack[index];
    }
    set(index, value) {
        if (index < 0 || index >= this.getSize()) {
            return;
        }
        this.stack[index] = value;
    }
    search(element) {
        for (let i = 0; i < this.getSize(); i++) {
            if (this.stack[i] === element) {
                return element;
            }
        }
        return null;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
    getMaxSpace() {
        return this.stack.length;
    }
    [Symbol.iterator]() {
        let head = this.top - 1;
        return {
            next: () => {
                if (head >= 0) {
                    const value = this.stack[head];
                    head--;
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
export { DynamicArrayStack };
