import { Component } from "solid-js";
import style from "./NodeBox.module.css";

interface NodeboxProps<T> {
  data: T;
}

function NodeBox<T>({ data }: NodeboxProps<T>) {
  return (
    <div class={style.NodeBox}>
      <div class={`${style.box} ${style.box__left}`}>{`${data}`}</div>
      <div class={`${style.box} ${style.box__right}`}>Next</div>
    </div>
  );
}

export { NodeBox };
