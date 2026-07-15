import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

import "./index.css";

import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

/* ==========================================================
   Disable Right Click
========================================================== */

document.addEventListener(
  "contextmenu",
  (event) => {
    event.preventDefault();
  }
);

/* ==========================================================
   Render App
========================================================== */

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>

    <ErrorBoundary>

      <App />

    </ErrorBoundary>

  </React.StrictMode>
);