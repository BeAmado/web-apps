import DocList from "./DocList";
import Filtering from "./Filtering";
import Modal from "./Modal";

export default function Main() {
  return (
    <main id="ctrl-app">
      <header>
        <h1>Documentos n&atilde;o rateados</h1>
      </header>
      
      <Filtering />

      <DocList />

      <Modal />
    </main>
  );
}