import { Component, createEffect } from "solid-js";
import { createStore } from "solid-js/store";

import { Layout } from "./layout/Layout";
import { Board } from "./components/board/Board";
import { Footer } from "./components/footer/Footer";
import { useLinkedList } from "./hooks/useLinkedList";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import styles from "./App.module.css";
/**
 * TODO
 * AGREGAR LAS FLECHAS QUE APUNTEN AL SIGUIENTE NODO
 * AGREGAR ALGO MÁS DESCRIPTIVO EN NEXT
 * OBCIÓN PARA VER COMO OBJETO
 * MEJORAR ESTILOS
 * ARREGLAR BUG DE HEAD Y END
 */

interface FormFields {
  dataInput: string;
  indexInput: number;
}

const App: Component = () => {
  const [formValues, setFormValues] = createStore<FormFields>({
    dataInput: "",
    indexInput: 0,
  });
  const { linkedList, pushValue, deleteList, deleteLast, insertAt } =
    useLinkedList();
  // const [viewAs, setViewAs] = createSignal<"nodes" | "object">("nodes");

  const handleChange = (fieldName: string) => (event: Event) => {
    const input = event.currentTarget as HTMLInputElement;
    setFormValues({
      [fieldName]: input.value,
    });
  };

  const handleClickAdd = () => {
    pushValue(formValues.dataInput);
    setFormValues({
      dataInput: "",
      indexInput: 0,
    });
  };

  const handleClickDeleteAll = () => {
    deleteList();
  };

  const handleClickDelete = () => {
    deleteLast();
  };

  const handleClickPushAt = () => {
    insertAt(formValues.indexInput, formValues.dataInput);
  };

  createEffect(() => console.log("linkedList() ", linkedList()));

  return (
    <Layout>
      <Board linkedList={linkedList}></Board>
      <Footer>
        <div class={styles["form-section"]}>
          <Input
            type="text"
            onInput={handleChange("dataInput")}
            value={formValues.dataInput}
            onKeyPress={(e) => e.key === "Enter" && handleClickAdd()}
            name="data"
            placeholder="Enter data"
          />
          <Button onClick={handleClickAdd}>Push Last</Button>
        </div>
        <div class={styles["form-section"]}>
          <Input
            type="number"
            onInput={handleChange("indexInput")}
            value={formValues.indexInput}
            placeholder="Enter index"
          />
          <Button onClick={handleClickPushAt}>Push At</Button>
        </div>
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
