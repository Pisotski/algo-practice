import { LLNode } from ".";

export class LinkedList {
  head: LLNode | null;
  tail: LLNode | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value: number): void {
    const newNode = new LLNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let curr = this.head;

      while (curr) {
        if (curr.next === null) {
          curr.next = newNode;
          this.tail = curr.next;
          break;
        }
        curr = curr.next;
      }
    }
    this.size++;
  }

  toArray(): number[] {
    const result = [];

    let curr = this.head;
    while (curr) {
      result.push(curr.value);
      curr = curr.next;
    }

    return result;
  }

  delete(deleteMe: number): boolean {
    // remove first occurrence
    // return false if nothing is removed
    // otherwise
    // update size
    // maybe update head or tail
    // return true
    let curr: LLNode | null = this.head;
    let prev: LLNode | null = null;
    while (curr) {
      if (curr.value === deleteMe) {
        if (prev) {
          prev.next = curr.next;
        } else {
          this.head = curr.next;
        }
        if (curr.next === null) this.tail = prev;
        this.size--;
        return true;
      }
      prev = curr;
      curr = curr.next;
    }
    return false;
  }

  reverse(): void {
    /**
     * memorize curr.next
     * point curr.next to prev
     * reassign prev to curr
     * reassign curr to tempNext
     */
    if (!this.head || this.head.next === null) return;
    let curr: LLNode | null = this.head;
    let prev = null;
    let tempNext;
    this.tail = curr;
    // [5,3,67,99,-0]

    while (curr) {
      tempNext = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tempNext;
    }
    this.head = prev;
  }

  reverseWithStack(node: LLNode | null = this.head): LLNode | void {
    /**
     * add node to stack
     * keep track of head and tail
     *
     * if node is head
     * assign it as tail
     *
     * using recursion.
     * record prev like prev = rws(node.next)
     * then node.next = prev
     * return node with new next
     * if node.next is null =
     * assign node to tail
     * return node
     */
    if (!this.head) return;

    // 3, 6
    if (node && !node.next) {
      let tempNode = this.head;
      this.head = node;
      this.tail = tempNode;
      this.tail.next = null;
      return node;
    }

    if (node) {
      const nextNode = this.reverseWithStack(node.next);
      if (nextNode) nextNode.next = node;
      return node;
    }
  }

  prepend() {}
}

let linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(3);
linkedList.append(67);
linkedList.append(99);
linkedList.append(-0);

linkedList.reverse();
console.log(linkedList.toArray());
