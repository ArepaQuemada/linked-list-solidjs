export class Node<T = {}> {
  data: T;
  next: Node<T> | null;
  head: boolean = false;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }

  setHead() {
    this.head = true;
  }

  setNext(node: Node<T> | null) {
    this.next = node;
  }
}
