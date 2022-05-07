const CTA = () => {
  return (
    <div id="cta" className="w-full h-[405px] lg:h-[220px] bg-brightRed flex justify-center mt-10 lg:px-[165px]">
      <div className="w-[312px] lg:w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <h1 className="text-white font-bold text-4xl text-center lg:text-left lg:w-[445px]">
          Simplify how your team works today.
        </h1>
        <button className="rounded-3xl mt-10 lg:mt-0 bg-white font-semibold text-brightRed py-3 px-7 shadow-md text-[13px] hover:cursor-pointer hover:text-veryPaleRed transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
