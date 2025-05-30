import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./consts/ScrollToTop.jsx";
import ScrollToTopButton from "./consts/ScrollToTopButton.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      {/* <ScrollToTopButton /> */}
      <App />
    </Router>
  </StrictMode>
);
