"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Disclaimer from "./pages/Disclaimer";
// import NotFound from "./components/Error/NotFound";
import GlobalErrorBoundary from "./components/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",

    children: [
      { index: true, element: <Home /> },
      { path: "/terms-of-use", element: <Terms /> },
      { path: "/refund-policy", element: <Refund /> },
      { path: "/disclaimer", element: <Disclaimer /> },
      { path: "/privacy", element: <Privacy /> },
      // {
      //   path: "*",
      //   element: <NotFound />,
      // }, // Catch-all for unmatched routes
      {
        path: "*",
        element: <GlobalErrorBoundary error={"We searched the ends of the earth, but couldn't find what you're looking for :("} resetErrorBoundary={()=> (window.location.href="/")} />,
      }, // Catch-all for unmatched routes
    ],
  },
]);

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 300,
      easing: "linear",
    });
  }, []);

  return <RouterProvider router={router} />;
}
