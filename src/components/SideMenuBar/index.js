import React from "react";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const SideMenubar = ({ showSidebar, setShowSidebar }) => {
  return (
    <>
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className={`fixed duration-200 ${
          showSidebar ? "visible" : "invisible"
        } w-screen h-screen bg-[#43765411] opacity-0 disabled top-0 left-0 bottom-0 right-0 z-10`}
      ></div>
      <div
        className={`fixed top-0 left-0 w-[260px] bg-slate-600 min-h-screen z-50 transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-5 h-[70px] px-5 py-5 font-normal font-[Roboto]" onClick={() => setShowSidebar(!showSidebar)}>
          <div className="cursor-pointer self-end">
            <IoClose size={28} className="text-white" />
          </div>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return (
                "px-2 py-2 rounded-lg hover:bg-slate-300 hover:text-slate-900 " +
                (isActive
                  ? "text-slate-900 bg-white font-medium"
                  : "text-white")
              );
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return (
                "px-2 py-2 rounded-lg hover:bg-slate-300 hover:text-slate-900 " +
                (isActive
                  ? "text-slate-900 bg-white font-medium"
                  : "text-slate-100")
              );
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => {
              return (
                "px-2 py-2 rounded-lg hover:bg-slate-300 hover:text-slate-900 " +
                (isActive
                  ? "text-slate-900 bg-white font-medium"
                  : "text-slate-100")
              );
            }}
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => {
              return (
                "px-2 py-2 rounded-lg hover:bg-slate-300 hover:text-slate-900 " +
                (isActive
                  ? "text-slate-900 bg-white font-medium"
                  : "text-slate-100")
              );
            }}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              return (
                "px-2 py-2 rounded-lg hover:bg-slate-300 hover:text-slate-900 " +
                (isActive
                  ? "text-slate-900 bg-white font-medium"
                  : "text-slate-100")
              );
            }}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideMenubar;
