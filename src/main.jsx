import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./consts/ScrollToTop.jsx";
// import ScrollToTopButton from "./consts/ScrollToTopButton.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider> {/* Wrap here */}
      <Router>
        <ScrollToTop />
        {/* <ScrollToTopButton /> */}
        <App />
      </Router>
    </HelmetProvider>
  </StrictMode>
);
