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
      <Route path="/" element={<Home/>}/>
      <Route path="/Profil" element={<Profil/>}/>
      <Route path="/Detail/:id" element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
