// src/components/MessageList.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MessageList() {
  // 1. Estado para los mensajes
  const [messages, setMessages] = useState([]);

  // 2. Simulamos fetch inicial (más tarde vendrá tu GET /messages)
  useEffect(() => {
    setMessages([
      {
        messageId: "1",
        author: "Autor Ejemplo",
        text: "¡Hola mundo! Bienvenido a nuestro exclusivo hotel 5 estrellas. Disfruta de la mejor experiencia.",
        timestamp: new Date().toISOString(),
      },
      // ... puedes añadir más objetos de ejemplo aquí
    ]);
  }, []);

  return (
    <div className="p-6 space-y-6">
      {messages.map((m, i) => (
        <motion.div
          key={m.messageId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="bg-white/80 backdrop-blur-md border border-neutral rounded-xl p-5 shadow-card font-body"
        >
          <h3 className="text-secondary font-semibold">{m.author}</h3>

          {/* Texto formateado con el plugin Typography */}
          <div className="prose max-w-none mt-2">
            {m.text}
          </div>

          <time className="mt-3 block text-xs text-gray-500">
            {new Date(m.timestamp).toLocaleString()}
          </time>
        </motion.div>
      ))}
    </div>
  );
}
