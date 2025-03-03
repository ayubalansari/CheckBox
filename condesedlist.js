function condense(head) {
  let seen = new Set();
  let current = head;
  let prev = null;

  while (current !== null) {
    if (seen.has(current.data)) {
      prev.next = current.next;
    } else {
      seen.add(current.data);
      prev = current;
    }
    current = current.next;
  }
  return head;
}
