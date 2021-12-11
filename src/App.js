import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Front from "./pages/index";
import About from "./pages/about";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
import "./css/style.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      {/* <Navbar toggle={toggle} /> */}
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" exact element={<Front />} />
        <Route path="/home" element={<Home toggle={toggle} />} />
        <Route path="/about" element={<About toggle={toggle} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
