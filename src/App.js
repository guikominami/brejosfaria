import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";

import Home from "./components/pages/Home";
import Cadastro from "./components/pages/Cadastro";

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={light}>
      <Routes>
        <Route path='/' element={<Home/>}/>
{/*         <Route 
          path='/cadastro'
          element={<Cadastro/>}
        /> */}
      </Routes>
     </ThemeProvider>         
     </BrowserRouter>     
   </>
  );
}

export default App;
