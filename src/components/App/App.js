import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <React.StrictMode>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/about" element={<h1>About</h1>}></Route>
          <Route path="/contact" element={<h1>Contact</h1>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </React.StrictMode>
  );
}

export default App;
