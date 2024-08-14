import { NavLink } from "react-router-dom";
import AboutMe from "./AboutMe";

const BentoAbout = () => {
  return (
    <div
      className="h-screen w-full flex flex-column justify-center items-center p-5 "
      id="bento"
    >
      <div className="grid h-full w-full grid-cols-25 md:grid-cols-10 grid-rows-10 md:grid-rows-4 gap-4 text-center">
        <a
          href="#"
          className="cursor-pointer bg-neutral-content rounded-xl flex justify-center items-center col-span-2 row-span-4 md:col-span-5 md:row-span-2 relative overflow-hidden group"
        >
          <img
            src="/1.png"
            className="w-[100%] h-[100%] object-cover rounded-xl group-hover:opacity-0.5 group-hover:scale-105 transition-scale duration-300"
            alt=""
          />
          <div className="flex-col  absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 flex gap-2 justify-center items-center transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-2xl">Watch List Anime Website</p>
            <a
              href={"https://plan-to-watch-anime.vercel.app/"}
              className="btn"
              target="_blank"
            >
              See Details
            </a>
          </div>
        </a>
        <a
          href=""
          className="bg-neutral-content rounded-xl flex justify-center items-center col-span-2 row-span-3 md:col-span-3 md:row-span-2  relative overflow-hidden group"
        >
          <img
            src="/bg-pantai.jpg"
            className="w-[100%] h-[100%] object-cover rounded-xl group-hover:opacity-0.5 group-hover:scale-105 transition-scale duration-300"
            alt=""
          />
          <div className="flex-col  absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 flex gap-2 justify-center items-center transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-2xl">Landing Page</p>
            <button className="btn">See Details</button>
          </div>
        </a>
        <a
          href=""
          className="bg-neutral-content rounded-xl flex justify-center items-center col-span-2 row-span-3 md:col-span-2 md:row-span-2  relative overflow-hidden group lg:row-span-4"
        >
          <img
            src="/bg-pantai.jpg"
            className="w-[100%] h-[100%] object-cover rounded-xl group-hover:opacity-0.5 group-hover:scale-105 transition-scale duration-300"
            alt=""
          />
          <div className="flex-col  absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 flex gap-2 justify-center items-center transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-2xl">Landing Page</p>
            <button className="btn">See Details</button>
          </div>
        </a>
        <a
          href=""
          className="bg-neutral-content rounded-xl flex justify-center items-center col-span-2 row-span-5 md:col-span-2 md:row-span-2  relative overflow-hidden group"
        >
          <img
            src="/bg-pantai.jpg"
            className="w-[100%] h-[100%] object-cover rounded-xl group-hover:opacity-0.5 group-hover:scale-105 transition-scale duration-300"
            alt=""
          />
          <div className="flex-col  absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 flex gap-2 justify-center items-center transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-2xl">Landing Page</p>
            <button className="btn">See Details</button>
          </div>
        </a>
        <a
          href=""
          className="bg-neutral-content rounded-xl flex justify-center items-center col-span-2 row-span-3 md:col-span-4 md:row-span-2  relative overflow-hidden group"
        >
          <img
            src="/bg-pantai.jpg"
            className="w-[100%] h-[100%] object-cover rounded-xl group-hover:opacity-0.5 group-hover:scale-105 transition-scale duration-300"
            alt=""
          />
          <div className="flex-col  absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 flex gap-2 justify-center items-center transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-2xl">Landing Page</p>
            <button className="btn">See Details</button>
          </div>
        </a>
        <a
          href=""
          className="bg-neutral-content rounded-xl flex justify-center items-center col-span-4 row-span-4 md:col-span-4 md:row-span-2 lg:col-span-2 relative overflow-hidden group"
        >
          <img
            src="/bg-pantai.jpg"
            className="w-[100%] h-[100%] object-cover rounded-xl group-hover:opacity-0.5 group-hover:scale-105 transition-scale duration-300"
            alt=""
          />
          <div className="flex-col  absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 flex gap-2 justify-center items-center transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-2xl">Landing Page</p>
            <button className="btn">See Details</button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BentoAbout;
