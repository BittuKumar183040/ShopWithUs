import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import shoeThumb from './asset/shoeThumb.jpg';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { FaCircleCheck } from "react-icons/fa6";

const slides = [
  {
    id: 1,
    image: {shoeThumb},
    title: "Step Into Style, Comfort, & Confidence",
    description: 'Discover the perfect pair for every occasion. Exclusive styles just a click away.',
  },
  {
    id: 2,
    image: {shoeThumb},
    title: 'Unmatched Comfort, Unbeatable Style',
    description: 'Find your fit for every adventure, from casual strolls to bold statements.',
  },
  {
    id: 3,
    image: {shoeThumb},
    title: 'Shoes That Define Your Journey',
    description: 'Shop unique collections designed to keep you ahead in fashion and comfort.',
  },
];
const Carousel = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] text-white dark:bg-gray-900 dark:text-white">
      <div className="absolute inset-0 ">
        {slides.map((slide, index) => (
            <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <img
                    src={shoeThumb}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
                    <h2 className="mx-auto mb-6 flex-col text-4xl font-extrabold leading-tight md:mb-10 md:text-5xl lg:mb-12">
                        {slide.title}
                    </h2>
                    <p className="mx-auto mb-8 text-sm sm:text-lg md:text-xl lg:mb-12">
                       {slide.description}
                    </p>
                    <ul className="mx-auto mb-8 flex flex-col justify-center gap-6 sm:flex-row sm:gap-10 lg:mb-12">
                        <li className="flex items-center gap-4">
                            <FaCircleCheck className="h-6 w-6 text-green-500" />
                            <p className="text-base">Free shipping on all orders</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <FaCircleCheck className="h-6 w-6 text-green-500" />
                            <p className="text-base">30-day money-back guarantee</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <FaCircleCheck className="h-6 w-6 text-green-500" />
                            <p className="text-base">Premium quality materials</p>
                        </li>
                    </ul>
                </div>
            </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() =>
          setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
          )
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
      >
        <BiLeftArrow/>
      </button>
      <button
        onClick={() =>
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
        }
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
      >
        <BiRightArrow/>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
