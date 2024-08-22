class MinStack {

    private stack: Array<number> = new Array()
    private _top: number = 0
    private minimumPrefixStack: Array<number> = new Array()

    push(val: number): void {
        this.stack[this._top] = val
        this.minimumPrefixStack[this._top] = this._top === 0? val: Math.min(this.minimumPrefixStack[this._top-1], val)
        this._top++
    }

    pop(): void {
        if(this._top === 0) {
            throw new Error(`Stack is empty`)
        }
        --this._top
        return
    }

    top(): number {
        if(this._top === 0) {
            throw new Error(`Stack is empty`)
        }
        return this.stack[this._top-1]
    }

    getMin(): number {
        if(this._top === 0) {
            throw new Error(`Stack is empty`)
        }
        return this.minimumPrefixStack[this._top-1]
    }
}

export {
    MinStack
}