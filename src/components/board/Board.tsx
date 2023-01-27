import { ParentComponent } from "solid-js";
import styles from "./Board.module.css";
import { LinkedList } from "../../classes/LinkedList";
import { NodeBox } from "../node-box/NodeBox";

export const Board: ParentComponent<{ linkedList: LinkedList }> = ({
  children,
}) => {
  return (
    <div class={styles.Board}>
      {children}
      <NodeBox data={"Hola"}></NodeBox>
      <NodeBox data={9}></NodeBox>
      <NodeBox data={true}></NodeBox>
      <NodeBox data={{ obj: "prop" }}></NodeBox>
      <NodeBox data={"Hola"}></NodeBox>
      <NodeBox data={"Hola"}></NodeBox>
    </div>
  );
};
