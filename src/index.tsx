// src/main.tsx ou src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Assurez-vous d'importer le composant App (le nouveau)
import "./index.css"; // Votre fichier CSS avec les directives Tailwind et l'animation

// Assurez-vous de rendre le composant App
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
