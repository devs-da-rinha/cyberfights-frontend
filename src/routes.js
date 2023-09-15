import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/pages/home";
import Cookies from "./components/pages/politica-de-cookies";
import PoliticaPrivacidade from "./components/pages/politica-de-privacidade";
import Sobre from "./components/pages/sobre";
import Termos from "./components/pages/termos-de-uso";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Sobre }  path="/sobre" />
           <Route component = { Cookies }  path="/politica-de-cookies" />
           <Route component = { PoliticaPrivacidade }  path="/politica-de-privacidade" />
           <Route component = { Termos }  path="/termos-de-uso" />
       </BrowserRouter>
   )
}

export default Routes;