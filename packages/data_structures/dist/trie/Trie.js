class Trie {
    constructor() {
        this.root = new Map();
    }
    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word.charAt(i);
            if (curr.has(char)) {
            }
            else {
                curr.set(char, new Map());
            }
            curr = curr.get(char);
        }
        curr.set("end", new Map());
    }
    search(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word.charAt(i);
            if (curr.has(char)) {
                curr = curr.get(char);
            }
            else {
                return false;
            }
        }
        return curr.has('end');
    }
    startsWith(prefix) {
        let curr = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix.charAt(i);
            if (curr.has(char)) {
                curr = curr.get(char);
            }
            else {
                return false;
            }
        }
        return true;
    }
}
export { Trie };
