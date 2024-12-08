import React, { useState } from "react";

interface CarouselProps {
  children: React.ReactNode;
}

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = React.Children.toArray(children);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <button onClick={goToPrevious} className="flex xl:hidden absolute top-[42%] left-6 ">
        <ArrowBackIosIcon sx={{ fontSize: "2rem", fontWeight: 100, color: "#6FCADB", zIndex: "30" }} />
      </button>
      <button onClick={goToNext} className="flex xl:hidden absolute top-[42%] right-6">
        <ArrowForwardIosIcon sx={{ fontSize: "2rem", fontWeight: 100, color: "#6FCADB" }} />
      </button>
      <div style={{ position: "relative", width: "70%", overflow: "hidden" }}>
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((child, index) => (
            <div key={index} className="flex-shrink-0 flex-grow-0 w-full">
              {child}
            </div>
          ))}
        </div>
        <button onClick={goToPrevious} className="hidden xl:flex absolute top-[48%] xl:top-1/2  xl:left-4 ">
          <ArrowBackIosIcon sx={{ fontSize: "2rem", fontWeight: 100, color: "#6FCADB", zIndex: "30" }} />
        </button>
        <button onClick={goToNext} className="hidden xl:flex absolute top-[48%] xl:top-1/2 -right-1 xl:right-4">
          <ArrowForwardIosIcon sx={{ fontSize: "2rem", fontWeight: 100, color: "#6FCADB" }} />
        </button>
      </div>
    </>
  );
};

export default Carousel;
