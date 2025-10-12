import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";  // keep if you already have index.css

// find the root div in index.html
const rootElement = document.getElementById("root");

// create root and render <App />
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
