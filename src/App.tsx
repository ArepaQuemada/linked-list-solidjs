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
 * MEJORAR ESTILOS
 */
const App: Component = () => {
  const [inputValue, setInputValue] = createSignal("");
  const { linkedList, pushValue, deleteList } = useLinkedList();

  const handleClickAdd = () => {
    pushValue(inputValue());
    setInputValue("");
  };

  const handleClickDelete = () => {
    deleteList();
  };

  const handleChange = (
    e: Event & {
      currentTarget: HTMLInputElement;
      target: Element;
    }
  ) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <Layout>
      <Board linkedList={linkedList}></Board>
      <Footer>
        <Input
          type="text"
          onInput={handleChange}
          value={inputValue()}
          oninput={handleChange}
        />
        <Button onClick={handleClickAdd}>Push Node</Button>
        <Button onClick={handleClickDelete} danger>
          Delete List
        </Button>
      </Footer>
    </Layout>
  );
};

export default App;
