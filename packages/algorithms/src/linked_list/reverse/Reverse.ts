import { Node } from "data_structures/dist/linked_list/Node"

function reverseList(head: Node<number> | null): Node<number> | null {
    // make sure we have something to reverse
    if(head === null) return null
    if(head.next === null) return head

    let prev: Node<number> | null = null
    let curr: Node<number> | null = head
    let next: Node<number> | null = curr.next

    while(curr) {
        // reverse curr
        curr.next = prev
        // move
        prev = curr
        curr = next
        next = curr?.next || null
    }

    return prev
};

export {
    reverseList
}