import React from "react";
// import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* Navbar always visible */}
      <Navbar />

   <Home/>
      


    </div>
  );
}

export default App;

