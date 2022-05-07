import { useState } from "react";
import Image from "next/image";

import FacebookIcon from "./svgComponents/FacebookIcon";
import InstagramIcon from "./svgComponents/InstagramIcon";
import YoutubeIcon from "./svgComponents/InstagramIcon";
import PinterestIcon from "./svgComponents/PinterestIcon";
import TwitterIcon from "./svgComponents/TwitterIcon";

const Footer = () => {
  const [emailError, setEmailError] = useState<string>();

  const clickHandler = () => {
    setEmailError("Please insert a valid email");
  };

  return (
    <div className="relative h-[537px] lg:h-[250px] bg-veryDarkBlue flex flex-col lg:flex-row-reverse lg:gap-x-10 items-center px-5 lg:px-24">
      {/* search */}
      <div className="relative flex flex-row items-start justify-center lg:justify-end mt-10 lg:-mt-16 w-full">
        <div className="mr-2 w-full lg:w-auto">
          <input
            className="py-3 px-4 rounded-3xl w-full text-sm text-brightRed focus:outline-none focus:ring-1 focus:ring-brightRed"
            type={"text"}
            placeholder={"Updates in your inbox..."}
          />
          <span className="text-sm text-red-600 mt-2 ml-3">
            {emailError && emailError}
          </span>
        </div>
        <button
          onClick={clickHandler}
          className="bg-brightRed rounded-3xl text-white py-2 px-6 hover:cursor-pointer hover:bg-brightRedLight transition duration-300"
        >
          Go
        </button>
        <span className="absolute top-16 right-0 text-sm mt-10 text-gray-400 hidden lg:block">
          Copyright 2020 All Rights Reserved
        </span>
      </div>
      {/* menu */}
      <div className="w-full flex flex-row justify-between md:justify-evenly lg:justify-between px-7 mt-10 lg:mt-0">
        {/* left */}
        <div className="flex flex-col text-white text-sm gap-y-4 ml-0 xl:ml-24">
          <span className="hover:cursor-pointer hover:text-brightRed">
            Home
          </span>
          <span className="hover:cursor-pointer hover:text-brightRed">
            Pricing
          </span>
          <span className="hover:cursor-pointer hover:text-brightRed">
            Products
          </span>
          <span className="hover:cursor-pointer hover:text-brightRed">
            About Us
          </span>
        </div>
        {/* right */}
        <div className="flex flex-col text-white text-sm gap-y-4">
          <span className="hover:cursor-pointer hover:text-brightRed">
            Careers
          </span>
          <span className="hover:cursor-pointer hover:text-brightRed">
            Community
          </span>
          <span className="hover:cursor-pointer hover:text-brightRed">
            Privacy Policy
          </span>
        </div>
      </div>
      {/* social media */}
      <div className="hidden lg:block absolute top-16 left-24">
        <Image src={"/assets/logo.svg"} alt="log" width={158} height={26} />
      </div>
      <div className="flex flex-row w-full lg:w-auto justify-center items-center mt-12 lg:mt-24 gap-x-12 lg:gap-x-5">
        <FacebookIcon className="hover:cursor-pointer hover:fill-brightRed fill-white w-5 h-5 scale-150 lg:scale-110" />
        <YoutubeIcon className="hover:cursor-pointer hover:fill-brightRed fill-white w-5 h-5 scale-150 lg:scale-110" />
        <TwitterIcon className="hover:cursor-pointer hover:fill-brightRed fill-white w-5 h-5 scale-150 lg:scale-110" />
        <PinterestIcon className="hover:cursor-pointer hover:fill-brightRed fill-white w-5 h-5 scale-150 lg:scale-110" />
        <InstagramIcon className="hover:cursor-pointer hover:fill-brightRed fill-white w-5 h-5 scale-150 lg:scale-110" />
      </div>
      <div className="flex flex-col lg:hidden justify-center items-center mt-14">
        <Image src={"/assets/logo.svg"} alt="log" width={158} height={26} />
        <span className="text-sm mt-10 text-gray-400">
          Copyright 2020 All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
