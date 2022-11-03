import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import OurMission from "./pages/OurMission";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import TermsAndConditions from "./pages/TermsAndConditions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/ourmission" element={<OurMission />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
