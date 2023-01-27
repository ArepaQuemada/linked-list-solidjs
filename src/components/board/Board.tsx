import { ParentComponent } from "solid-js";
import styles from "./Board.module.css";

export const Board: ParentComponent = ({ children }) => {
  return <div class={styles.Board}>{children}</div>;
};
