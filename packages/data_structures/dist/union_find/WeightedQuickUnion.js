/*
  Proposition: Depth of any node is at max Log(n), therefore
  cost of finding roots is easier, in previous (quick union, this wasn't the case)
*/
// depth of any node here is at most log base 2 of N
class WeightedQuickUnion {
    // for visualisation, not required for this algorithm
    // private tree: Map<number, Array<number>>;
    /*
      cost: n
    */
    constructor(n) {
        this.N = n;
        this.nComponents = n;
        // not needed for this algorithm
        // this.tree = new Map();
        this.id = new Array(n).fill(0);
        this.id.forEach((_, index, array) => {
            // every element / node is their own parent hence storing value of their own id;
            array[index] = index;
        });
        // weight at node i is the number of elements that has it as it's root.
        this.weights = new Array(n).fill(1);
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
    // constant time operation every time connected is performed
    connected(p, q) {
        return this.find(p) === this.find(q);
    }
    /*
      link root of smaller tree to root of larger tree
    */
    union(p, q) {
        const rootP = this.find(p);
        const rootQ = this.find(q);
        if (rootP === rootQ) {
            return;
        }
        // p is in smaller tree, make p's root's parent q's root
        if (this.weights[rootP] < this.weights[rootQ]) {
            this.id[rootP] = rootQ;
            this.weights[rootQ] = this.weights[rootQ] + this.weights[rootP];
            // Update tree structure
            // this.tree.has(rootQ) ? this.tree.get(rootQ)?.push(rootP) : this.tree.set(rootQ, [rootP])
        }
        else {
            this.id[rootQ] = rootP;
            this.weights[rootP] = this.weights[rootQ] + this.weights[rootP];
            // Update tree structure
            // this.tree.has(rootP) ? this.tree.get(rootP)?.push(rootQ) : this.tree.set(rootP, [rootQ])
        }
        this.nComponents -= 1;
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
    getData() {
        return this.id;
    }
    findComponent(p) {
        const rootP = this.find(p);
        const component = [];
        for (let i = 0; i < this.N; i++) {
            if (this.find(i) === rootP) {
                component.push(i);
            }
        }
        return component;
    }
}
export { WeightedQuickUnion };
