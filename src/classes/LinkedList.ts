import { Node } from "./Node";

export class LinkedList {
  head: Node | null;
  end: Node | null;
  size = 0;
  constructor() {
    this.head = null;
    this.end = null;
  }
}

export class LinkedListOperations {
  linkedList: LinkedList;
  constructor(linkedList: LinkedList) {
    this.linkedList = linkedList;
  }
  pushValue<T extends {}>(data: T) {
    this.linkedList.size++;
    const node = new Node(data);

    if (!this.linkedList.head) {
      node.head = true;
      this.linkedList.head = node;
      this.linkedList.end = this.linkedList.head;
      return this.linkedList;
    }

    if (this.linkedList.end) {
      this.linkedList.end.next = node;
      this.linkedList.end = node;
    }
    return this.linkedList;
  }

  deleteLast() {
    this.linkedList.size--;

    let { size, head } = this.linkedList;
    if (size === 0 || !head) {
      return this.linkedList;
    }
    let tempSize = 0;
    let tempNode = head;

    while (tempNode.next && tempSize !== size - 1) {
      tempNode = tempNode.next;
      tempSize++;
    }

    tempNode.next = null;
    this.linkedList.end = tempNode;
    return this.linkedList;
  }

  inserAt<T extends {}>(index: number, data: T) {
    if (index < 0 || index > this.linkedList.size) return this.linkedList;
    if (!this.linkedList.head) return this.linkedList;

    this.linkedList.size++;
    const node = new Node(data);
    if (index === 0) {
      node.head = true;
      node.next = this.linkedList.head as Node<T>;
      this.linkedList.head = node;
      if (this.linkedList.head.next) {
        this.linkedList.head.next.head = false;
      }
      return this.linkedList;
    }

    let tempSize = 0;
    let tempNode = this.linkedList.head;
    while (tempNode.next && tempSize < index - 1) {
      tempSize++;
      tempNode = tempNode.next;
    }

    node.next = tempNode.next as Node<T>;
    tempNode.next = node;

    return this.linkedList;
  }
}
