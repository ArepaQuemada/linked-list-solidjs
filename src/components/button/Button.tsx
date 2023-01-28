import { Component, JSX } from "solid-js";
import styles from "./Button.module.css";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  danger?: boolean;
}

export const Button: Component<ButtonProps> = ({ danger, ...props }) => {
  return (
    <button
      class={`${danger ? styles.danger : styles.default} ${styles.Button}`}
      {...props}
    ></button>
  );
};
