import { Accessor, Component, For, createEffect, createSignal } from "solid-js";
import styles from "./Board.module.css";
import { NodeBox } from "../node-box/NodeBox";
import { mapToArray } from "../../utilities/map-to-array";
import { Node } from "../../classes/Node";
import { LinkedList } from "../../classes/LinkedList";

export const Board: Component<{ linkedList: Accessor<LinkedList> }> = ({
  linkedList,
}) => {
  const [nodes, setNodes] = createSignal<Node[]>();

  createEffect(() => {
    setNodes(mapToArray(linkedList()));
  });

  return (
    <div class={styles.Board}>
      {nodes()?.map((node) => (
        <NodeBox nodeProps={node} />
      ))}
    </div>
  );
};
