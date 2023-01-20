import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profil from "./pages/Profil";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import "./component/All.css"


 function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/Profil" exact element={<Profil/>}/>
      <Route path="/Detail/:id" exact element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
