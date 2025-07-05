import React from "react";
import { navLinks } from "../constants";
const Navbar = () => {
  return (
    <>
      {navLinks.map((item, index) => (
        <a
          key={index}
          href={item.path || "/"}
          className="hover:text-asset/50 transition-colors duration-200 -tracking-tighter"
        >
          {item.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;
