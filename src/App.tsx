import { Component, For, createEffect, createSignal } from "solid-js";
import { Layout } from "./layout/Layout";
import { Board } from "./components/board/Board";
import { Footer } from "./components/footer/Footer";
import { useLinkedList } from "./hooks/useLinkedList";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";

/**
 * TODO
 * AGREGAR LAS FLECHAS QUE APUNTEN AL SIGUIENTE NODO
 * AGREGAR ALGO MÁS DESCRIPTIVO EN NEXT
 * OBCIÓN PARA VER COMO OBJETO
 * MEJORAR ESTILOS
 */
const App: Component = () => {
  const [inputValue, setInputValue] = createSignal("");
  const { linkedList, pushValue, deleteList, deleteLast } = useLinkedList();
  const [viewAs, setViewAs] = createSignal<"nodes" | "object">("nodes");

  const handleClickAdd = () => {
    pushValue(inputValue());
    setInputValue("");
  };

  const handleClickDeleteAll = () => {
    deleteList();
  };

  const handleClickDelete = () => {
    deleteLast();
  };

  const handleChange = (
    e: Event & {
      currentTarget: HTMLInputElement;
      target: Element;
    }
  ) => {
    setInputValue(e.currentTarget.value);
  };

  createEffect(() => console.log("linkedList() ", linkedList()));

  return (
    <Layout>
      <Board linkedList={linkedList}></Board>
      <Footer>
        <Input
          type="text"
          onInput={handleChange}
          value={inputValue()}
          oninput={handleChange}
          onKeyPress={(e) => e.key === "Enter" && handleClickAdd()}
        />
        <Button onClick={handleClickAdd}>Push Node</Button>
        <Button onClick={handleClickDelete} danger>
          Delete last
        </Button>
        <Button onClick={handleClickDeleteAll} danger>
          Delete All
        </Button>
      </Footer>
    </Layout>
  );
};

export default App;
