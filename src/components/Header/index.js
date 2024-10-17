import React from "react";
import { FaList } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = ({showSidebar, setShowSidebar}) => {
  return (
    <nav className="header-container bg-slate-800 flex justify-between items-center py-5 px-5 sm:px-14 lg:px-32">
      <div className="logo-container font-[pacifico] bg-slate-600 px-5 py-0 rounded-lg">
        <h1 className="text-yellow-300 text-[24px] font-[cursive] p-0 m-0">Dineshkumar</h1>
      </div>

      <div
        className="flex md:hidden text-slate-800 px-3 py-2 bg-slate-200 rounded-lg cursor-pointer shadow-lg"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <FaList />
      </div>
      <div className="hidden md:flex text-white gap-4 font-[Roboto] ">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return (
              "px-2 py-0 rounded-lg hover:bg-slate-300 hover:text-slate-900 " +
              (isActive
                ? "text-slate-900 bg-white font-medium"
                : "text-slate-100")
            );
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => {
            return (
              "px-2 py-0 rounded-lg hover:bg-slate-300 hover:text-slate-900 " +
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
              "px-2 py-0 rounded-lg hover:bg-slate-300 hover:text-slate-900 " +
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
              "px-2 py-0 rounded-lg hover:bg-slate-300 hover:text-slate-900 " +
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
              "px-2 py-0 rounded-lg hover:bg-slate-300 hover:text-slate-900 " +
              (isActive
                ? "text-slate-900 bg-white font-medium"
                : "text-slate-100")
            );
          }}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
