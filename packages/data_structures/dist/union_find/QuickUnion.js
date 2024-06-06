"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickUnion = void 0;
class QuickUnion {
    constructor(n) {
        this.N = n;
        this.nComponents = n;
        this.id = new Array(n).fill(0);
        this.id.forEach((_, index, array) => {
            // every element / node is their own parent hence storing value of their own id;
            array[index] = index;
        });
    }
    union(p, q) {
        if (this.connected(p, q)) {
            return;
        }
        const rootP = this.find(p);
        const rootQ = this.find(q);
        this.id[rootP] = rootQ;
    }
    // this time same as checking if p and q have same root / same identifier for their component.
    // earlier we were storing the identifier tiself in array, but now we are storing parent
    // so new indirect identifier is the ROOT. keep going from parent to parent untill u cant
    connected(p, q) {
        return this.find(p) === this.find(q);
    }
    // same as root(p: number): number
    find(p) {
        let child = p;
        let parent = this.id[p];
        // in case we find root element, it's value will point to it's own id. 
        // child is the element / id / node
        // parent is the value of that id in array, id of another element. sighs
        while (child !== parent) {
            child = parent;
            parent = this.id[child];
        }
        return parent;
    }
    count() {
        return this.nComponents;
    }
    display() {
        const n = this.id.length;
        let result = "";
        for (let i = 0; i < n; i++) {
            result += `${this.id[i]} `;
        }
        console.log(`[${result}]`);
    }
}
exports.QuickUnion = QuickUnion;
