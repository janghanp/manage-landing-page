import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between lg:items-top w-full max-w-[1110px] mx-auto mt-5 md:mt-28 ">
        {/* left */}
        <div className="flex flex-col items-center lg:items-start w-[445px] mt-2 lg:mt-16">
          <h1 className="font-bold text-[40px] lg:text-5xl text-darkBlue leading-[3.5rem] text-center lg:text-left">
            Bring everyone together to build better products.
          </h1>
          <p className="text-gray-400 text-[16px] mt-1 mb-5 lg:my-10 w-[350px] text-center lg:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="rounded-3xl w-[130.9px] bg-brightRed text-white py-3 px-7 shadow-md shadow-brightRedLight text-[13px] hover:cursor-pointer hover:bg-brightRedLight transition duration-300">
            Get Started
          </button>
        </div>
        {/* right */}
        <div className="relative">
          <Image
            src={"/assets/illustration-intro.svg"}
            alt="chart"
            width={540}
            height={485}
          />
        </div>
      </div>
      <div className="absolute -top-96 -right-40 -z-10"></div>
    </div>
  );
};

export default Hero;
