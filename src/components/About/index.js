import React from "react";

const About = () => {
  return (
    <div className='about-container grid grid-cols-1 md:grid-cols-2 items-center min-h-[calc(100vh-76px)] font-["roboto"] bg-gray-700 py-5 px-10 sm:px-14 lg:px-32 gap-10 md:gap-0'>
      <div className="">
        <h1 className="text-green-500 text-[24px] font-medium pb-5">ABOUT ME</h1>
        {/* <div className="text-[32px] text-white py-5">
          <span className="font-[cursive] text-slate-300 text-[32px]">
            Hello👋, &nbsp;
          </span>
          <span className="text-[32px] text-slate-300">I'm </span>
          <span className="font-[cursive] text-yellow-400 text-[32px]">
            Dineshkumar
          </span>
        </div> */}
        <div className="flex flex-col gap-5">
          <span className="text-slate-200 text-justify first-letter:pl-10">
            I am a passionate web developer with a Master's degree in Computer
            Applications (MCA), specializing in building dynamic and
            user-friendly web applications. I have a solid foundation in HTML,
            CSS, and JavaScript, complemented by growing expertise in modern
            frameworks like React.js and back-end technologies such as Node.js.
          </span>
          <span className="text-slate-200 text-justify first-letter:pl-10">
            As a fresher, I am eager to bring my skills into a professional
            environment, collaborate with experienced developers, and
            continuously learn to create impactful web experiences. I have
            worked on projects such as [mention a key project, e.g., a stock
            market app or booking system], which have strengthened my
            problem-solving skills and ability to work with real-time data.
          </span>
          {/* <span className="text-slate-200 text-justify first-letter:pl-10">
          I am excited to start my journey in the world of web development and
          actively looking for opportunities where I can grow, contribute, and
          make a difference in the digital space.
        </span> */}
        </div>
      </div>
    </div>
  );
};

export default About;
