"use client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ErrorBoundary } from "react-error-boundary";
import GlobalErrorBoundary from "./components/Error/ErrorPage.tsx";

AOS.init();
//Animation on scroll
// github for reference
// https://github.com/michalsnik/aos
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={GlobalErrorBoundary} // Using the global error boundary
      onReset={() => (location.href = "/")} // Reset state by redirecting to the home page
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
