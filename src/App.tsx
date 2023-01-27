import type { Component } from "solid-js";
import { Layout } from "./layout/Layout";
import { Board } from "./components/board/Board";
import { Footer } from "./components/footer/Footer";
import { LinkedList } from "./classes/LinkedList";

const App: Component = () => {
  const linkedList = new LinkedList();
  linkedList.push("primero");
  linkedList.push("Segundo");
  linkedList.push("Tercero");

  console.log(linkedList);

  return (
    <Layout>
      <Board linkedList={linkedList}></Board>
      <Footer></Footer>
    </Layout>
  );
};

export default App;
