import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/assets/banner1.jpg",
    title: "Explore Clothes Deals",
    buttonText: "Explore Deals",
  },
  {
    image: "/assets/banner2.jpg",
    title: "Explore Household Items",
    buttonText: "Explore Deals",
  },
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="w-screen h-[500px] relative overflow-hidden">
      <img
        src={currentSlide.image}
        alt="Slide"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {currentSlide.title}
        </h2>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-full shadow-lg">
          {currentSlide.buttonText}
        </button>
      </div>
    </div>
  );
};

export default BannerSlider;
