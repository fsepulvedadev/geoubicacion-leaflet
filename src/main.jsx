import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppContextProvider } from "./context/Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Camara from "./components/Camara";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Layout>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/inicio" element={<Inicio />} />

          <Route path="/camara" element={<Camara />} />
        </Routes>
      </AppContextProvider>
    </Layout>
  </Router>
);
