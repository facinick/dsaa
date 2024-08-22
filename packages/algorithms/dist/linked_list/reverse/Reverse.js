function reverseList(head) {
    // make sure we have something to reverse
    if (head === null)
        return null;
    if (head.next === null)
        return head;
    let prev = null;
    let curr = head;
    let next = curr.next;
    while (curr) {
        // reverse curr
        curr.next = prev;
        // move
        prev = curr;
        curr = next;
        next = (curr === null || curr === void 0 ? void 0 : curr.next) || null;
    }
    return prev;
}
;
export { reverseList };
