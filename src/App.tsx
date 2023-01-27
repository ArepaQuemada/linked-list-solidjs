import type { Component } from "solid-js";
import { Layout } from "./layout/Layout";
import { Board } from "./components/board/Board";
import { Footer } from "./components/footer/Footer";

const App: Component = () => {
  return (
    <Layout>
      <Board></Board>
      <Footer></Footer>
    </Layout>
  );
};

export default App;
