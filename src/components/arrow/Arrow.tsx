import styles from "./Arrow.module.css";
import arrowsvg from "../../assets/arrow.svg";
export const Arrow = () => (
  <div class={styles.Arrow}>
    <img src={arrowsvg} class={styles.svg} />
  </div>
);
