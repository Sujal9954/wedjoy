// src/components/HeroSection.jsx
import React from "react";
import Img1 from "../assets/pexels-carolina-basi-911290106-30892419.jpg";
import Img2 from "../assets/img1.jpg";
import Img3 from "../assets/img2.jpg";

// ✅ Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">E-Furniture</div>
      <ul className="hidden md:flex space-x-6">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#shop" className="hover:text-gray-300">Shop</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
      <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Login</a>
    </nav>
  );
};

// ✅ Hero Section Component
const HeroSection = () => {
  const images = [Img1, Img2, Img3];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <Navbar />
      <div className="relative h-[500px] md:h-[700px] overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Furniture"
          className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Upgrade Your Home with Premium E-Furniture
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center max-w-2xl">
            Discover stylish and modern furniture designed to elevate your living space. Shop now and experience luxury at an affordable price.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md text-white font-semibold">
            Shop Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ✅ Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-4">
      <p className="text-center">&copy; 2025 E-Furniture. All rights reserved.</p>
      <ul className="flex justify-center space-x-4 mt-2">
        <li><a href="#privacy" className="hover:text-gray-400">Privacy Policy</a></li>
        <li><a href="#terms" className="hover:text-gray-400">Terms of Service</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact Us</a></li>
      </ul>
    </footer>
  );
};

export default HeroSection;
