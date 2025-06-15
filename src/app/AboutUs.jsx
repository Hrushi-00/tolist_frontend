import React, { useState, useEffect } from "react";
import heroImage from "../Image/Hero.png";
import image2 from "../Image/image2.jpeg";
import image3 from "../Image/imahe3.jpeg";
import LogoStripe from "../Image/LogoStripe.png";
import SimpleFormModal from "./UserFormModal";

const images = [heroImage, image2, image3];

const AboutUs = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-20 px-6 bg-[#F7F7FB] sm:px-12 lg:px-20 py-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl text-[#171c49] px-4 sm:text-4xl font-bold mb-4">
          Simplify Your Life with Our <br className="hidden sm:block" /> Todo
          App
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto">
          Stay organized and boost your productivity with our intuitive todo
          website.
          <br className="hidden sm:block" />
          Experience a modern approach to task management that fits your
          lifestyle.
        </p>
        <div className="flex flex-col  sm:flex-row gap-4 justify-center mt-6 ">
          <button onClick={handleOpenModal} className="p-3 px-6 border font-medium border-[#FF3E54] bg-[#FF3E54] text-white rounded-3xl hover:bg-[#f15668f5] hover:text-white transition">
            Get Started Today
          </button>
          <button className="p-3 px-12 border font-normal border-[#FF3E54] bg-white text-[#1e1b1b] rounded-3xl hover:bg-[#f15668f5] hover:text-white transition">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  items-start justify-between gap-5">
        <div className="text-center lg:text-left px-4 sm:px-8 lg:px-16 rounded-3xl bg-[#FF3E54] w-full min-h-[500px] md:min-h-screen flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 bg-gradient-to-r from-[#ea7b88f5] to-white text-transparent bg-clip-text">
            Organize. <br className="hidden sm:block" />
            Achieve. <br className="hidden sm:block" />
            Relax.
          </h2>

          <p className="text-white text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
            Turn clutter into clarity, chaos into control, and dreams into done.
            Bold visions into market success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="p-3 px-6 border font-medium border-[#FF3E54] bg-white text-[#0e0c0c] rounded-3xl hover:bg-[#f15668f5] hover:text-white transition">
              Get Started Today
            </button>
            <button className="p-3 px-6 border font-medium border-[#FF3E54] bg-[#f15668f5] text-white rounded-3xl hover:bg-white hover:text-[#0e0c0c] transition">
              Discover Features
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-lg aspect-[3/4] mx-auto overflow-hidden rounded-xl">
          <div className="absolute h-screen rounded-xl  inset-0 bg-red-700 opacity-30"></div>
          <img
            src={images[current]}
            alt={`Slide ${current}`}
            className="w-full h-screen rounded-xl  object-cover transition-all duration-500"
          />

          {/* previous button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white font-black   bg-transparent hover:bg-white hover:text-black  p-2 sm:p-3 rounded-full shadow-md focus:outline-none"
          >
            <span className="text-2xl sm:text-3xl">‹</span>
          </button>

         {/* next button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white font-black bg-transparent hover:bg-white hover:text-black p-2 sm:p-3 rounded-full shadow-md focus:outline-none"
          >
            <span className="text-2xl sm:text-3xl">›</span>
          </button>
        </div>
      </div>
      <div className="mt-6">
        <img className="w-full h-full object-cover" src={LogoStripe} alt="" />
      </div>

      {/* userform */}
      {isModalOpen && (
        <SimpleFormModal onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default AboutUs;
