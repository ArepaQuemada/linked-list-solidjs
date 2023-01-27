import { Component, For, createEffect, createSignal } from "solid-js";
import { Layout } from "./layout/Layout";
import { Board } from "./components/board/Board";
import { Footer } from "./components/footer/Footer";
import { useLinkedList } from "./hooks/useLinkedList";

/**
 * TODO
 * YA FUNCIONA REACTIVIDAD Y MUESTRA NODOS
 * AGREGAR LAS FLECHAS QUE APUNTEN AL SIGUIENTE NODO
 * AGREGAR ALGO MÁS DESCRIPTIVO EN NEXT
 * AGREGAR FUNCIONALIDAD DE ELIMINAR
 * MEJORAR ESTILOS
 */
const App: Component = () => {
  const [inputValue, setInputValue] = createSignal("");
  const { linkedList, pushValue } = useLinkedList();

  const handleClick = () => {
    pushValue(inputValue());
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
        <input
          type="text"
          onInput={handleChange}
          value={inputValue()}
          oninput={handleChange}
        />
        <button onClick={handleClick}>Push Node</button>
      </Footer>
    </Layout>
  );
};

export default App;
