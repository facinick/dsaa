function invertTree(root) {
    if (root === null) {
        return null;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
}
;
export { invertTree };
