import { Component, JSX } from "solid-js";
import styles from "./Input.module.css";

export const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <input class={styles.Input} {...props} />;
};
