class MinStack {
    constructor() {
        this.stack = new Array();
        this._top = 0;
        this.minimumPrefixStack = new Array();
    }
    push(val) {
        this.stack[this._top] = val;
        this.minimumPrefixStack[this._top] = this._top === 0 ? val : Math.min(this.minimumPrefixStack[this._top - 1], val);
        this._top++;
    }
    pop() {
        if (this._top === 0) {
            throw new Error(`Stack is empty`);
        }
        --this._top;
        return;
    }
    top() {
        if (this._top === 0) {
            throw new Error(`Stack is empty`);
        }
        return this.stack[this._top - 1];
    }
    getMin() {
        if (this._top === 0) {
            throw new Error(`Stack is empty`);
        }
        return this.minimumPrefixStack[this._top - 1];
    }
}
export { MinStack };
