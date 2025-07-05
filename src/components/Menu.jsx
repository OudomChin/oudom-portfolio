import React from "react";

const Menu = ( {isMenuOpen, toggleMenu}) => {
  return (
    <div
      onClick={toggleMenu}
      className="focus:outline-none md:hidden px-2"
      aria-label="Toggle menu"
    >
      {isMenuOpen ? (
        <img src="/assets/logo/close.svg" alt="close" width="25px" />
      ) : (
        <img src="/assets/logo/menu.svg" alt="menu" width="25px" />
      )}
    </div>
  );
};

export default Menu;
