import React, { useState, useEffect, useRef } from "react";
const imageSlide = ["/1.png", "/2.jpg", "3.jpg", "/4.jpeg"];

let count = 0;
let slideInterval;
const Imageslide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnima = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnima);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);
    startSlider();

    return () => {
      pauseSlider;
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 10000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % imageSlide.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = imageSlide.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div>
      <div ref={slideRef} className="w-full select-none relative my-2">
        <div className="aspect-w-16 aspect-auto">
          <img
            src={imageSlide[currentIndex]}
            alt="Error"
            className="w-full h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Imageslide;
