import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TodoProvider } from "./TodoContext";
import { CartProvider } from "./CartContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <TodoProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CartProvider>
        </TodoProvider>
      </div>
    </Router>
  );
}

export default App;
