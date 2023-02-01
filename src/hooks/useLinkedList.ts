import { createSignal } from "solid-js";
import { LinkedList, LinkedListOperations } from "../classes/LinkedList";

/**
 * AGREGAR MÉTODOS FALTANTES (borrar en cierto punto)
 */

export const useLinkedList = () => {
  const [linkedList, setLinkedList] = createSignal<LinkedList>({
    size: 0,
    head: null,
    end: null,
  });

  const deleteList = () => setLinkedList({ head: null, size: 0, end: null });

  const pushValue = <T extends {}>(data: T) => {
    const linkedListReference = new LinkedListOperations({
      ...linkedList(),
    }).pushValue(data);
    setLinkedList(linkedListReference);
  };

  const deleteLast = () => {
    const linkedListReference = new LinkedListOperations({
      ...linkedList(),
    }).deleteLast();
    setLinkedList(linkedListReference);
  };

  const insertAt = <T extends {}>(index: number, data: T) => {
    const linkedListReference = new LinkedListOperations({
      ...linkedList(),
    }).inserAt(index, data);
    setLinkedList(linkedListReference);
  };

  return {
    linkedList,
    pushValue,
    deleteList,
    deleteLast,
    insertAt,
  };
};
