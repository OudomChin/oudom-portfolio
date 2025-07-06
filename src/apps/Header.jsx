import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/Button";
import Menu from "../components/Menu";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section className="fixed top-5 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        <div className="backdrop-blur-sm border border-asset/10 p-1 rounded-3xl md:rounded-full">
          <div className="bg-asset/10 backdrop-blur-xs p-1 md:p-1.5 rounded-full">
            <div className="flex justify-between items-center text-sm xs:text-xs ">
              <a href="/" className="font-primary font-bold text-lg px-2">
                <p>
                  Dom
                  <span className="text-secondary"> UI </span>
                </p>
              </a>

              <nav className="hidden md:flex justify-center items-center font-scondary gap-4 lg:gap-6 text-sm">
                <Navbar />
              </nav>
              <div className="hidden md:flex">
                <Button>Contact</Button>
              </div>
              <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
          </div>
          <nav
            className={`md:hidden flex flex-col items-center w-full overflow-hidden transition-all duration-300 ease-in-out rounded-3xl bg-black/10 ${
              isMenuOpen
                ? "max-h-96 opacity-100 mt-1 gap-4 p-4"
                : "max-h-0 opacity-0 p-0"
            }`}
          >
            <Navbar />
            <Button>Contact</Button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
