import React, { useState, useEffect } from "react";

const ImageCarousel = ({ imageUrlList = [], autoSlide = true, interval = 1000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to move to the previous slide
  const prevSlide = () => {
    if (isTransitioning) return; // Prevents triggering multiple transitions at once
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? imageUrlList.length - 1 : prev - 1));
  };

  // Function to move to the next slide
  const nextSlide = () => {
    if (isTransitioning) return; // Prevents triggering multiple transitions at once
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === imageUrlList.length - 1 ? 0 : prev + 1));
  };

  // Automatically move to the next slide if autoSlide is true
  useEffect(() => {
    if (autoSlide && imageUrlList.length > 0) {
      const slideInterval = setInterval(nextSlide, interval);

      // Clear the interval when component unmounts to avoid memory leaks
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, imageUrlList, activeIndex, interval]);

  // Reset the transitioning state after each transition
  useEffect(() => {
    const timeout = setTimeout(() => setIsTransitioning(false), 700); // Matches transition duration

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <div className="relative h-[200px] overflow-hidden rounded-tl-lg rounded-tr-lg md:h-[200px]">
      {imageUrlList.length > 0 ? (
        <>
          {/* Slides */}
          {imageUrlList.map((eachImage, index) => (
            <div
              key={index}
              className={`${
                index === activeIndex ? "opacity-100" : "opacity-0"
              } absolute inset-0 transition-opacity duration-700 ease-in-out`}
              style={{
                transform: `translateX(${(index - activeIndex) * 100}%)`,
                transition: "transform 700ms ease-in-out",
              }}
              data-carousel-item
            >
              <img
                src={eachImage}
                className="absolute block w-full h-[200px] object-center"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}

          {/* Slider indicators */}
          {/* <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {imageUrlList.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-white" : "bg-gray-400"
                }`}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div> */}

          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-[200px] px-4 cursor-pointer group focus:outline-none"
            onClick={prevSlide}
            disabled={isTransitioning} // Disable during transition
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-3 h-3 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-[200px] px-4 cursor-pointer group focus:outline-none"
            onClick={nextSlide}
            disabled={isTransitioning} // Disable during transition
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-3 h-3 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </>
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default ImageCarousel;
