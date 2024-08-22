declare class MinStack {
    private stack;
    private _top;
    private minimumPrefixStack;
    push(val: number): void;
    pop(): void;
    top(): number;
    getMin(): number;
}
export { MinStack };
