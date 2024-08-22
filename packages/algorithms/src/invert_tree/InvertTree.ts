import {Node} from 'data_structures/dist/tree/Node'
function invertTree(root: Node<number> | null): Node<number> | null {
    
    if(root === null) {
        return null
    }

    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
};

export {
    invertTree
}