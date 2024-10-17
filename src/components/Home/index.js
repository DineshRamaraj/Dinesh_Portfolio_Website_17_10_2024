import React, { useEffect } from "react";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".typing-element", {
      strings: [
        "Software Developer",
        "Full Stack Developer",
        "Front-end Developer",
        "Back-end Developer",
      ],
      typeSpeed: 30,
      backSpeed: 30, // Optional: Adds a more dynamic typing effect
      loop: true, // Optional: Keeps the animation looping
    });

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <div className='home-container grid grid-cols-1 md:grid-cols-2 justify-center items-center min-h-[calc(100vh-76px)] font-["roboto"] bg-gray-700 py-5 px-10 sm:px-14 lg:px-32 gap-10 md:gap-0'>
      <center>
        <div className="w-[100%] h-[80%] max-w-[300px] max-h-[300px] rounded-full animate-pulse">
          <img
            src="https://res.cloudinary.com/dhwz560kk/image/upload/v1728285268/i1cxu4ljvzdf6vj2sg1f.jpg"
            alt="portfolio"
            className="rounded-lg border-4 border-slate-300 w-full h-full duration-200"
          />
        </div>
      </center>
      <div className="name-details-container text-slate-200 text-center md:text-start order-1 md:order-0">
        <h1 className="name-heading text-[28px] md:text-[48px] text-green-500 font-bold font-[sans]">
          Dineshkumar Ramaraj
        </h1>
        <p className="text-[32px]">
          I am{" "}
          <span className="typing-element text-[28px] md:text-[38px] text-blue-600"></span>
        </p>
      </div>
    </div>
  );
};

export default Home;
