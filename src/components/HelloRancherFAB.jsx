// src/components/HelloRancherFAB.jsx
import { useState } from "react";

export default function HelloRancherFAB() {
  const [msg, setMsg] = useState("");

  async function handleClick() {
    try {
      const res = await fetch("/hello-rancher");
      const { message } = await res.json();
      setMsg(message);
    } catch {
      setMsg("Error al conectar");
    }
    // desaparece el mensaje a los 3s
    setTimeout(() => setMsg(""), 3000);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 btn btn-secondary btn-circle btn-lg shadow-xl z-50"
        aria-label="Test Rancher Service"
      >
        🐳
      </button>
      {msg && (
        <div className="fixed bottom-24 right-6 alert alert-info shadow-lg z-50">
          {msg}
        </div>
      )}
    </>
  );
}
