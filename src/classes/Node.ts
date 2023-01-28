export class Node<T = {}> {
  data: T;
  next: Node<T> | null;
  head: boolean = false;
  end: boolean = false;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
