declare class WPCQ {
    private id;
    private N;
    private nComponents;
    private weights;
    constructor(n: number);
    find(p: number): number | null;
    connected(p: number, q: number): boolean;
    union(p: number, q: number): void;
    count(): number;
    display(): void;
    getData(): typeof this.id;
    findComponent(p: number): Array<number>;
}
export { WPCQ };
