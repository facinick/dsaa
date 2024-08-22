function MergeTwoLists(list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    if (list1.value <= list2.value) {
        list1.next = MergeTwoLists(list1.next, list2);
        return list1;
    }
    else {
        list2.next = MergeTwoLists(list2.next, list1);
        return list2;
    }
}
;
export { MergeTwoLists };
