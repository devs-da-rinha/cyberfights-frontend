import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./components/pages/home";
import NotFound from "./components/pages/not-found";
import Cookies from "./components/pages/politica-de-cookies";
import PoliticaPrivacidade from "./components/pages/politica-de-privacidade";
import Sobre from "./components/pages/sobre";
import Termos from "./components/pages/termos-de-uso";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Sobre />} path="/sobre" />
        <Route element={<Cookies />} path="/politica-de-cookies" />
        <Route
          element={<PoliticaPrivacidade />}
          path="/politica-de-privacidade"
        />
        <Route element={<Termos />} path="/termos-de-uso" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
