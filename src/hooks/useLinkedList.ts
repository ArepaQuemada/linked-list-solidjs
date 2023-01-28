import { createSignal } from "solid-js";
import { Node } from "../classes/Node";

export type LinkedList = {
  size: number;
  head: Node | null;
  end: Node | null;
};

export const useLinkedList = () => {
  const [linkedList, setLinkedList] = createSignal<LinkedList>({
    size: 0,
    head: null,
    end: null,
  });

  const pushValue = <T extends {}>(data: T) => {
    const node = new Node(data);

    const { head, end, size } = linkedList();
    let currentHead: Node | null = head;
    let currentEnd: Node | null = end;

    if (!head) {
      node.head = true;
      currentHead = node;
      currentEnd = currentHead;
    } else {
      if (currentEnd) {
        currentEnd.next = node;
        currentEnd = node;
      }
    }
    setLinkedList({ head: currentHead, end: currentEnd, size: size + 1 });
  };

  return {
    linkedList,
    pushValue,
  };
};
