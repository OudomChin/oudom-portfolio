## Header
``` bash

# Header
import { useState } from "react";
import { navLinks } from "../constants";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="container mx-auto flex flex-col p-2 rounded-4xl border border-black/10 backdrop-blur-xs sm:w-xl md:w-2xl lg:w-4xl xl:w-4xl">
        {/* Main Header Bar */}
        <div className="flex items-center justify-between bg-black/10 w-full px-2 py-2 rounded-4xl">
          {/* Logo */}
          <a
            href="/"
            className="flex justify-center items-center gap-2 font-primary"
          >
            <img src="/assets/logo/dom.svg" alt="dom-logo" />
            <p className="text-lg">OUDOM</p>
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm">
            {navLinks.map((item, index) => (
              <a
                href={item.path || "/"}
                className="hover:text-gray-500 transition-colors duration-200 -tracking-tighter"
                key={index}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <button className="hidden md:flex px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-black rounded-full">Contact</button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileNav}
            className="focus:outline-none md:hidden px-2"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col w-8 gap-1 bg-black p-2 rounded-full">
              <span
                className={`h-0.5 w-full bg-white transition-all duration-300 ${
                  isMobileNavOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-all duration-300 ${
                  isMobileNavOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-all duration-300 ${
                  isMobileNavOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <div
          className={`md:hidden flex flex-col items-center w-full overflow-hidden transition-all duration-300 ease-in-out rounded-4xl bg-black/10 ${
            isMobileNavOpen
              ? "max-h-96 opacity-100 mt-2 gap-4 p-4"
              : "max-h-0 opacity-0 p-0"
          }`}
        >
          {navLinks.map((item, index) => (
            <a
              href={item.path || "/"}
              className="w-full py-2 text-center text-gray-800 transition-colors duration-200 hover:text-gray -tracking-tighter font-scondary"
              key={index}
              onClick={toggleMobileNav}
            >
              {item.name}
            </a>
          ))}
          <button className="w-full max-w-xs px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-black rounded-full hover:bg-blue-800">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

# Footer 
import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space mt-100 px-5">
      <div className="mb-4 bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2025 DOM. All rights reserved.</p>
    </section>
  );
};

export default Footer;

```