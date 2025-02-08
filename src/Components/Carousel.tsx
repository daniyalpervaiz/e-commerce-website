'use client'
import { useState } from "react";
import Image from "next/image";

export default function Carousel() {
  const slides = [
    "/img 1.jpg",
    "/img 2.jpg",
    "/img 3.jpg",
    "/img 4.jpg",
    "/img 5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel w-full lg:h-[650px] xl:h-[650px] relative">
      <div className="carousel-item relative w-full">
        <Image
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={1200}
          height={650}
          className="w-full h-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button onClick={prevSlide} className="btn btn-circle">
            ❮
          </button>
          <button onClick={nextSlide} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
