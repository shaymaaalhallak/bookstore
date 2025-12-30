import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import Browse from "./pages/Browse";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <div id="app-container" className="d-flex flex-column min-vh-100">
      <Header id="site-header" className="mb-4" />
      <main id="main-content" className="flex-grow-1">
        <Routes id="section">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer id="site-footer" className="mt-4" />
    </div>
  );
}
