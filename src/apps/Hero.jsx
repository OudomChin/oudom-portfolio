import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto px-10 sm:px-25 md:px-30 lg:px-35 xl:px-40 mt-30 md:mt-40">
      <div className="flex justify-center items-center flex-col">
        <img
          src="/assets/images/oudom.JPG"
          alt="profile"
          className="w-20 sm:w-25 md:w-30 rounded-full"
        />
        <h1 className="text-sm md:text-lg m-3">
          Hello, I'm{" "}
          <span className="text-secondary font-bold">Chin Oudom</span>
        </h1>
        <h1 className="font-primary min-[320]:text-sm sm:text-2xl">
          Full Stack Developer
        </h1>
      </div>
    </section>
  );
};

export default Hero;
