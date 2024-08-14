import React from "react";
import { Tilt } from "react-tilt";
import { ReactTyped } from "react-typed";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "linear", // Easing on enter/exit.
};

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-around h-screen max-w-full">
      <div className="flex-1 md:p-1 lg:p-8 text-left items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Adi Salafudin
        </h1>
        <p className="text-lg md:text-2xl mb-4 ">
          Hi 👋, I am a{" "}
          <ReactTyped
            className="text-black"
            strings={["Web Developer", "Programmer", "Coder"]}
            typeSpeed={80}
            backSpeed={80}
            attr="placeholder"
            loop
          >
            <input
              type="text"
              className="bg-none"
              data-theme="none"
              disabled="true"
            />
          </ReactTyped>
        </p>
        <button className="btn border border-neutral-content w-full btn-square btn-ghost rounded lg:btn-wide px-8">
          Contact Me
        </button>
      </div>
      <div className="md:block flex-none p-12 -z-10">
        <Tilt options={defaultOptions}>
          <img
            src="/adi.png"
            alt="Hero"
            className="w-2/3 md:w-3/4 lg:w-full mx-auto h-auto rounded-lg shadow-md"
          />
        </Tilt>
      </div>
    </div>
  );
};

export default Hero;
