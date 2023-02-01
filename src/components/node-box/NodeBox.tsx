import { Component, Match, Show, Switch } from "solid-js";
import style from "./NodeBox.module.css";
import { Node } from "../../classes/Node";

interface NodeboxProps<T> {
  nodeProps: Node<T>;
}

function NodeBox<T>(props: NodeboxProps<T>) {
  return (
    <div class={style.wrapper}>
      <Switch fallback={<h2>Node</h2>}>
        <Match when={!!props.nodeProps.head}>
          <h1>HEAD</h1>
        </Match>
        <Match when={!!props.nodeProps.end}>
          <h1>END</h1>
        </Match>
      </Switch>
      <div class={style.NodeBox}>
        <div
          class={`${style.box} ${style.box__left}`}
        >{`${props.nodeProps.data}`}</div>
        <div class={`${style.box} ${style.box__right}`}>{`Next ->`}</div>
      </div>
      <Show when={!!props.nodeProps.next} fallback={<></>}>
        <div>Pinto flechita</div>
      </Show>
    </div>
  );
}

export { NodeBox };
