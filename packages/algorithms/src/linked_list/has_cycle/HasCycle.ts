import { Node } from "data_structures/dist/linked_list/Node"

function hasCycle(head: Node<number> | null): boolean {

    let slow = head
    let fast = head

    while (slow && fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            return true
        }
    }

    return false
};

export {
    hasCycle
}