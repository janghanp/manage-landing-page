const Features = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start max-w-[1110px] mx-auto my-24 py-2">
      <div className="flex flex-col w-[445px] items-center lg:items-start mb-14">
        <h1 className="text-darkBlue text-3xl w-[332px] lg:w-auto font-bold mb-5 lg:mb-10 text-center lg:text-left">
          What&apos;s different about Manage?
        </h1>
        <p className="text-base text-gray-400 w-[350px] text-center lg:text-left">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className="flex flex-col gap-y-14 w-[360px] lg:w-[540px]">
        <div className="flex flex-col">
          <div className="flex flex-row gap-0 lg:gap-x-5 items-center mb-5">
            <div className="bg-gradient-to-r from-white via-veryPaleRed to-veryPaleRed lg:bg-none">
              <button className="bg-brightRed text-white font-bold rounded-3xl px-6 py-2">
                01
              </button>
            </div>
            <span className="font-bold text-darkBlue py-2 pl-5 lg:pl-0 bg-veryPaleRed lg:bg-white w-full lg:w-auto">
              Track company-wide progress
            </span>
          </div>
          <p className="text-gray-400 ml-0 lg:ml-[90px] lg:leading-relaxed">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row gap-0 lg:gap-x-5 items-center mb-5">
            <div className="bg-gradient-to-r from-white via-veryPaleRed to-veryPaleRed lg:bg-none">
              <button className="bg-brightRed text-white font-bold rounded-3xl px-6 py-2">
                02
              </button>
            </div>
            <span className="font-bold text-darkBlue py-2 pl-5 lg:pl-0 bg-veryPaleRed lg:bg-white w-full lg:w-auto">
              Advanced built-in reports
            </span>
          </div>
          <p className="text-gray-400 ml-0 lg:ml-[90px] lg:leading-relaxed">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-0 lg:gap-x-5 items-center mb-5">
            <div className="bg-gradient-to-r from-white via-veryPaleRed to-veryPaleRed lg:bg-none">
              <button className="bg-brightRed text-white font-bold rounded-3xl px-6 py-2">
                03
              </button>
            </div>
            <span className="font-bold text-darkBlue py-2 pl-3 lg:pl-0 bg-veryPaleRed lg:bg-white w-full lg:w-auto">
              Everything you need in one place
            </span>
          </div>
          <p className="text-gray-400 ml:0 lg:ml-[90px] lg:leading-relaxed">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
