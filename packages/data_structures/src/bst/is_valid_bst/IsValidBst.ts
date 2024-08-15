import { Node } from '../../tree'

function isValidNode(root: Node<number> | null, leftLimit: number, rightLimit: number): boolean {

    if (root === null) {
        return true
    }

    if (
        root.left &&
        (
            root.left.value >= root.value ||
            root.left.value >= rightLimit ||
            root.left.value <= leftLimit
        )) {
        return false
    }

    if (
        root.right &&
        (
            root.right.value <= root.value ||
            root.right.value <= leftLimit ||
            root.right.value >= rightLimit
        )
    ) {
        return false
    }

    return isValidNode(root.left, leftLimit, root.value) && isValidNode(root.right, root.value, rightLimit)

}

function isValidBST(root: Node<number> | null): boolean {
    return isValidNode(root, -Infinity, +Infinity)
};

export {
    isValidBST
}