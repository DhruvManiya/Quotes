import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="h-20 w-full flex justify-between items-center md:text-[1.75rem] text-[1.25rem] bg-[#333333] shadow-lg font-[Poppins]">
        <h1 className="ml-20 font-[600] tracking-wide text-white">
          <Link to="/home">HOME</Link>
        </h1>

        <h1 className="mr-20 font-[600] tracking-wide text-[#F3CB89]">
          {" "}
          <Link to="/bookmarks">BOOKMARKS</Link>
        </h1>
      </nav>
    </>
  );
};

export default Navbar;
