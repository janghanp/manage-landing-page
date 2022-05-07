import Image from "next/image";

import Dropmenu from "./DropMenu";
import HambergerIcon from "./svgComponents/HambergetIcon";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-[1110px] mx-auto h-[44px] px-6 lg:px-0">
      <Image src={"/assets/logo.svg"} alt="logo" width={147} height={24} />
      <ul className="hidden lg:flex text-md gap-8 text-darkBlue">
        <li className="hover:cursor-pointer hover:text-gray-400">Pricing</li>
        <li className="hover:cursor-pointer hover:text-gray-400">Product</li>
        <li className="hover:cursor-pointer hover:text-gray-400">About Us</li>
        <li className="hover:cursor-pointer hover:text-gray-400">Careers</li>
        <li className="hover:cursor-pointer hover:text-gray-400">Comunity</li>
      </ul>
      <button className="hidden lg:block rounded-3xl bg-brightRed text-white py-3 px-7 shadow-md shadow-brightRedLight text-[13px] hover:cursor-pointer hover:bg-brightRedLight transition duration-300">
        Get Started
      </button>
      <div className="block lg:hidden hover:cursor-pointer relative z-40">
        <HambergerIcon />
      </div>
      <Dropmenu />
    </div>
  );
};

export default Navbar;
