import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./components/ThemeProvider";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Rout from "./components/Routes/Rout.jsx";
import { ToastContainer } from "react-toastify"
import Cart from "./components/Cart.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ToastContainer position={"top-center"} autoClose={2000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/cart" element={<Cart />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
