import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import HelloRancherFAB from "./components/HelloRancherFAB";
import TerminalModal from "./components/TerminalModal";

export default function App() {
  const terminalRef = useRef();

  const handleSend = async (author, text) => {
    // 1. Añade línea de log en terminal
    terminalRef.current.addLine(`➡️ POST /messages por ${author}`);
    // 2. Lógica de fetch a tu API...
  };

  return (
    <div className="min-h-screen font-body bg-base-200 dark:bg-base-300">
      <Header />
      <Hero />

      <main className="container mx-auto px-4 py-12 grid gap-12 lg:grid-cols-3">
        <section className="lg:col-span-2 overflow-hidden rounded-2xl">
          <MessageList />
        </section>
        <section>
          {/* Pasa handleSend a MessageForm */}
          <MessageForm onSubmit={handleSend} />
        </section>
      </main>

      {/* Floating Buttons */}
      <HelloRancherFAB onPing={(msg) => terminalRef.current.addLine(`🐳 ${msg}`)} />
      <label
        htmlFor="terminal-modal"
        className="fixed bottom-6 right-20 btn btn-info btn-circle btn-lg shadow-xl z-50"
      >
        ⌨️
      </label>

      {/* Modal Terminal */}
      <TerminalModal ref={terminalRef} />
    </div>
  );
}
