import { ParentComponent } from "solid-js";
import styles from "./Layout.module.css";

export const Layout: ParentComponent = ({ children }) => {
  return (
    <>
      <div class={styles.Layout}>{children}</div>
    </>
  );
};
