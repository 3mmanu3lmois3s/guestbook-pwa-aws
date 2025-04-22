// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  // usa '/' en dev, y tu subruta sólo al build para GH‑Pages
  base: process.env.NODE_ENV === "production" 
    ? "/guestbook-pwa-aws/" 
    : "/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Guestbook PWA",
        short_name: "Guestbook",
        start_url: "/guestbook-pwa-aws/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#3B82F6",
        icons: [
          { src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" }
        ]
      },
    }),
  ],
  server: {
    // opcional: fuerza que Vite sirva la raíz
    open: "/",
  }
});
