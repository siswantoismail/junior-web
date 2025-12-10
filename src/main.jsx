import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";
import FormInput from "./pages/input.jsx";
import Grafik from "./pages/grafik.jsx";
import Produk from "./pages/produk.jsx";
import Belanjaan from "./pages/belanjaan.jsx";
const router = createBrowserRouter([
  {
    path: "grafik",
    element: <Grafik />,
  },
  {
    path: "input",
    element: <FormInput />,
  },
  {
    path: "produk",
    element: <Produk />,
  },
  {
    path: "belanjaan",
    element: <Belanjaan />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
