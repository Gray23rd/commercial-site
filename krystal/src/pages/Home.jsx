// src/pages/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaHeart,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import banner1 from "../assets/wallpaper.png"; // Adjust the path as necessary
import banner2 from "../assets/banner2.jpg"; // Adjust the path as necessary
import bakery from "../assets/bakery 1.jpg"



const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="font-sans">
      {/* Top Contact Bar */}
      <div className="bg-white text-sm py-2 px-4 flex justify-between items-center text-gray-700 border-b">
        <div className="flex gap-4">
          <span>📞 +254 700 282 618</span>
          <span>📧 support@krystaltraders.com</span>
        </div>
        <div className="flex gap-3 text-xl">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTiktok /></a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-red-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition">
          <span className="text-white">KRYSTAL</span>{" "}
          <span className="font-light">TRADERS</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-grow max-w-md mx-4">
          <input
            type="text"
            placeholder="Search for products, categories, brands..."
            className="w-full p-2 rounded-full px-4 text-black bg-white focus:outline-none"
          />
        </div>

        {/* Nav Links & Icons */}
        <div className="flex gap-6 items-center text-sm font-semibold relative">
          <Link to="/newin" className="text-white hover:text-yellow-400 transition">New In</Link>
          <Link to="/sale" className="text-white hover:text-yellow-400 transition">Sale</Link>

          {/* Categories Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="text-white hover:text-yellow-400 transition">Categories ☰</button>
            {showDropdown && (
              <div className="absolute bg-white text-black mt-2 rounded shadow-lg p-4 z-10 min-w-[160px] space-y-2">
                {["Women", "Men", "Households", "Toys", "Electronics", "Wholesale"].map((cat) => (
                  <Link
                    to={`/category/${cat.toLowerCase()}`}
                    key={cat}
                    className="block px-4 py-2 hover:bg-yellow-100 rounded transition"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className="text-white hover:text-yellow-400 transition">Contact</Link>

          {/* Icons */}
          <div className="flex gap-4 items-center text-lg">
            <Link to="/wishlist" className="text-white hover:text-yellow-400 transition">
              <FaHeart />
            </Link>
            <Link to="/cart" className="text-white hover:text-yellow-400 transition">
              <FaShoppingCart />
            </Link>
            <Link to="/login" className="text-white hover:text-yellow-400 transition">
              <FaUser />
            </Link>
          </div>
        </div>
      </nav>

      {/* Banner Slider (real images instead of <BannerSlider />) */}
      <div className="w-full">
        <div className="w-full h-[400px]">
          <img
  src={banner1}
  alt="Clothing Deals"
  className="w-full h-full object-cover"
/>
<img
src={bakery}
  alt="Household Deals"
  className="w-full h-full object-cover"
/>

        </div>
      </div>

      {/* TODO: Add flash deals, product rows, etc. */}
    </div>
  );
};

export default Home;
