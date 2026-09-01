import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Self-hosted Manrope (latin subset, only the weights the UI uses). Bundled into
// the app CSS and served same-origin with immutable caching, so no render-blocking
// round-trip to fonts.googleapis.com / fonts.gstatic.com.
import "@fontsource/manrope/latin-300.css";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
