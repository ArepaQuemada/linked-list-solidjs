import { createSignal } from "solid-js";
import { Node } from "../classes/Node";
import { LinkedList, LinkedListOperations } from "../classes/LinkedList";

/**
 * TRATAR DE ABSTRAER LA LÓGICA DE MANIPULACIÓN DEL OBJETO EN CLASE SEPARADA ASÍ SE PUEDE MODIFICAR: DONE
 * AGREGAR MÉTODOS FALTANTES (INGRESAR AL INICIO, ETC)
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

  return {
    linkedList,
    pushValue,
    deleteList,
    deleteLast,
  };
};
