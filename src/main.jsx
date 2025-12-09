import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import FormInput from "./pages/input.jsx";
import InputGrafik from "./pages/grafik.jsx";
const router = createBrowserRouter([
  {
    path: "grafik",
    element: <InputGrafik />,
  },
  {
    path: "input",
    element: <FormInput />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
