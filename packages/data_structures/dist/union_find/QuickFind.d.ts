declare class QuickFind {
    private id;
    private N;
    private nComponents;
    constructor(n: number);
    union(p: number, q: number): void;
    connected(p: number, q: number): boolean;
    find(p: number): number;
    count(): number;
    display(): void;
}
export { QuickFind };
