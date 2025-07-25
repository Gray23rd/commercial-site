// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewIn from "./pages/NewIn";
import Sale from "./pages/Sale";
import Contact from "./pages/Contact";
import CategoryPage from "./pages/CategoryPage";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newin" element={<NewIn />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
