import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1601158935942-52255782d322?w=600&auto=format&fit=crop&q=60"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-semibold">Router</span>
        </div>

        <nav>
          <ul className="flex items-center gap-8 bg-white px-6 py-2 shadow-lg rounded-full">
            <NavLink to="/home" className="font-semibold">
              Home
            </NavLink>
            <NavLink to="/about">Home</NavLink>
            <NavLink to="/services">Home</NavLink>
            <NavLink to="/contact">Home</NavLink>
          </ul>
        </nav>

        <div>
          <button className="">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
