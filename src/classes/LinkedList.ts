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

  private incrementSize() {
    this.linkedList.size++;
  }

  private decrementSize() {
    this.linkedList.size--;
  }

  private pushAtBeggining<T extends {}>(node: Node<T>) {
    node.head = true;
    this.linkedList.head = node;
    this.linkedList.end = this.linkedList.head;
    return this.linkedList;
  }

  private pushNextTo<T extends {}>(node: Node<T>) {
    if (!this.linkedList.end) return this.linkedList;
    this.linkedList.end.next = node;
    this.linkedList.end = node;
    return this.linkedList;
  }

  private pushMoveHead<T extends {}>(node: Node<T>) {
    node.head = true;
    node.next = this.linkedList.head as Node<T>;
    this.linkedList.head = node;
    if (this.linkedList.head.next) {
      this.linkedList.head.next.head = false;
    }
    return this.linkedList;
  }

  pushValue<T extends {}>(data: T) {
    this.incrementSize();
    const node = new Node(data, this.linkedList.size);

    if (!this.linkedList.head) {
      return this.pushAtBeggining(node);
    }

    return this.pushNextTo(node);
  }

  deleteLast() {
    this.decrementSize();

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

    this.incrementSize();

    const node = new Node(data, this.linkedList.size);
    if (index === 0) {
      return this.pushMoveHead(node);
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
