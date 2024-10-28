import React from "react";

function Main() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-center mt-2 md:mt-12 md:px-36 py-10">
        <div className="md:w-3/4 ">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-[#3c3cbf] dark:from-[#3c3cbf] dark:to-white font-bold text-[2.2rem] lg:text-7xl md:mr-12 md:mt-0 text-center md:w-full mt-12 md:text-left">
            <div>Everything Talent</div>
            <div>simplifies hiring with a</div>
            <div> free ATS and AI-driven assessments.</div>
          </p>
        </div>
        <div className=" w-1/4 mt-4 md:mt-20 ">
          <img
            src="/main1.webp"
            alt="Workspace"
            className=" rotate-45 size-48 md:size-80 object-cover border-2 border-gray-400 dark:border-blue-700"
          />
          <div className="top-60 ">
            <img
              src="/main2.webp"
              alt="Workspace"
              className=" rotate-45 size-48 md:size-80 object-cover border-2 border-gray-400 dark:border-blue-700 "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
