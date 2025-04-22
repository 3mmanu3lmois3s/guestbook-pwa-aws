import { useState } from "react";

export default function HelloRancherButton() {
  const [msg, setMsg] = useState("");

  const handleClick = async () => {
    try {
      const res = await fetch("/hello-rancher");
      const { message } = await res.json();
      setMsg(message);
    } catch {
      setMsg("Error al conectar");
    }
  };

  return (
    <div className="text-center">
      <button onClick={handleClick} className="btn btn-secondary">
        Hola Rancher!
      </button>
      {msg && <div className="alert alert-info mt-4">{msg}</div>}
    </div>
  );
}
