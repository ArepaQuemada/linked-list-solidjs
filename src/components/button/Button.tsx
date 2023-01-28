import { Component, JSX } from "solid-js";
import styles from "./Button.module.css";

export const Button: Component<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <button class={styles.Button} {...props}></button>;
};
