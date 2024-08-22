declare class Trie {
    private root;
    insert(word: string): void;
    search(word: string): boolean;
    startsWith(prefix: string): boolean;
}
export { Trie };
