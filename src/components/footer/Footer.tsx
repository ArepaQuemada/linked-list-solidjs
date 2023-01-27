import { ParentComponent } from "solid-js";
import styles from "./Footer.module.css";

export const Footer: ParentComponent = ({ children }) => {
  return <div class={styles.Footer}>{children}</div>;
};
