import React from "react";
import toast from "react-hot-toast";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
// import ImageCarousel from "../ImageCarousel";

const ProjectsList = ({ project }) => {
  const { githubUrl, websiteUrl, imageUrl, projectName } = project;

  const copyTheUrl = () => {
    toast.success("Link copied to Clipboard");
    navigator.clipboard.writeText(websiteUrl);
  };
  return (
    <>
      <li className="border-white border shadow-xl rounded-md">
        <div className="w-full shadow-xl h-[150px]">
          {/* <ImageCarousel imageUrlList={imageUrlList} /> */}
          <img src={imageUrl} alt="projectName" className="rounded-tl-md rounded-tr-md h-full w-full"/>
        </div>
        <div className="bg-white py-2 px-4 rounded-bl-md rounded-br-md border-t-2 border-slate-200">
          <ul className="flex justify-between items-center">
            <div className="flex items-center space-x-2 pl-1">
              <IoLinkSharp className="text-slate-900" size={16} />
              <h1 className="text-slate-900 font-medium text-lg font-[jetbrains mono,_sans-serif">
                {projectName}
              </h1>
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={copyTheUrl}
                className="cursor-pointer"
              >
                <MdContentCopy
                  size={18}
                  className="text-slate-900 opacity-60"
                />
              </button>
            </div>
          </ul>
          <div className="flex items-center justify-between gap-5 pt-3">
            <a
              href={githubUrl}
              target="_blink"
              className="border border-slate-100 bg-black rounded-md flex space-x-3 py-1 px-3"
            >
              <span className="text-[14px] font-[Roboto] text-white">Code</span>
              {/* <FaExternalLinkAlt
                size={14}
                className="cursor-pointer text-[#000000] opacity-40"
              /> */}
            </a>
            <a
              href={websiteUrl}
              target="_blink"
              className="bg-yellow-400 rounded-md flex items-center space-x-3 py-1 px-3"
            >
              <span className="text-[14px] font-medium font-[Roboto] text-gray-900">
                Visit
              </span>
              <FaExternalLinkAlt
                size={14}
                className="cursor-pointer text-gray-900"
              />
            </a>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProjectsList;
