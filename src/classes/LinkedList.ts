import { Node } from "./Node";

export class LinkedList<T = {}> {
  head: Node<T> | null = null;
  end: Node<T> | null = null;
  size: number = 0;

  push(data: T) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.end = node;
    } else {
      this.end?.setNext(node);
      this.end = node;
    }
    this.size++;
  }
}
