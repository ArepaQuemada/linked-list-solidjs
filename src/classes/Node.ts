export class Node<T = {}> {
  id: number;
  data: T;
  next: Node<T> | null;
  head: boolean = false;
  end: boolean = false;
  constructor(data: T, id: number) {
    this.data = data;
    this.next = null;
    this.id = id;
  }
}
