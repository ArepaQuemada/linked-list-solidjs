import { Component, Match, Switch } from "solid-js";
import style from "./NodeBox.module.css";
import { Node } from "../../classes/Node";

interface NodeboxProps<T> {
  nodeProps: Node<T>;
}

function NodeBox<T>({ nodeProps }: NodeboxProps<T>) {
  return (
    <div class={style.wrapper}>
      <Switch fallback={<h2>Node</h2>}>
        <Match when={!!nodeProps.head}>
          <h1>HEAD</h1>
        </Match>
        <Match when={!!nodeProps.end}>
          <h1>END</h1>
        </Match>
      </Switch>
      <div class={style.NodeBox}>
        <div
          class={`${style.box} ${style.box__left}`}
        >{`${nodeProps.data}`}</div>
        <div class={`${style.box} ${style.box__right}`}>{`Next Node ->`}</div>
      </div>
    </div>
  );
}

export { NodeBox };
