import { LinkedList } from "../classes/LinkedList";

export const mapToArray = (list: LinkedList) => {
  if (!list.head) return [];

  let currentNode = list.head;
  let nodes = [currentNode];

  while (currentNode.next) {
    currentNode = currentNode.next;
    nodes = [...nodes, currentNode];
  }

  return [...nodes];
};
