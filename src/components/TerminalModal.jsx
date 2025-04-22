// src/components/TerminalModal.jsx
import { useState, useImperativeHandle, forwardRef } from "react";

const TerminalModal = forwardRef((_, ref) => {
  const [lines, setLines] = useState([
    "✔️ S3: static site bucket montado",
    "✔️ CloudFront: distro configurada",
    "✔️ Route53: subruta apuntada",
    "✔️ WAF: reglas básicas aplicadas",
    "✔️ API Gateway: endpoint REST creado",
    "✔️ Lambda: funciones Get/Post desplegadas",
    "✔️ DynamoDB: tabla guestbook provisionada",
    "✔️ CodePipeline & CodeBuild: pipeline inicializada",
    "✔️ ECR: repositorio listo",
    "✔️ Rancher: cluster en EC2 activo"
  ]);

  // Exponer método addLine para que App u otros componentes lo llamen
  useImperativeHandle(ref, () => ({
    addLine: (text) => setLines((prev) => [...prev, text])
  }));

  return (
    <>
      <input type="checkbox" id="terminal-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-black text-green-400 font-mono">
          <h3 className="font-bold text-lg mb-4">🖥️ Terminal AWS & Rancher</h3>
          <pre className="whitespace-pre-wrap overflow-y-auto max-h-80">
            {lines.join("\n")}
          </pre>
          <div className="modal-action">
            <label htmlFor="terminal-modal" className="btn btn-sm">Cerrar</label>
          </div>
        </div>
      </div>
    </>
  );
});

export default TerminalModal;
