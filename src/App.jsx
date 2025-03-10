import React from "react";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RegisterSheet" element={<RegisterPage />} />{" "}
        <Route path="/LoginSheet" element={<LoginPage />} />{" "}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
