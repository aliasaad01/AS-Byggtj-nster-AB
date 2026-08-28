import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Inter Fonts
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

// Hanken Grotesk Fonts
import "@fontsource/hanken-grotesk/300.css";
import "@fontsource/hanken-grotesk/400.css";
import "@fontsource/hanken-grotesk/500.css";
import "@fontsource/hanken-grotesk/600.css";
import "@fontsource/hanken-grotesk/700.css";
import "@fontsource/hanken-grotesk/800.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
