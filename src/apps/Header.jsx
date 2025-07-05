import React from "react";

const Header = () => {
  return (
    <section className="fixed top-5 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        <div className="backdrop-blur-xs border border-asset/10 p-1 rounded-full">
          <div className="bg-asset/10 backdrop-blur-xs p-1 md:p-1.5 rounded-full">
            <div className="flex justify-between items-center text-sm xs:text-xs ">
              <div className="px-2">
                <p className="font-primary text-sm md:text-lg text-secondary/90">
                  OUDOM
                </p>
              </div>
              <div className="hidden md:flex">Menu</div>
              <div className="bg-asset rounded-full text-primary py-2 px-4 md:py-2.5 md:px-5 text-xs md:text-sm">
                <button className="hidden md:flex">Contact</button>
                <div className="md:hidden">Menu</div>
              </div>
            </div>
            <div className="hidden">Header</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
