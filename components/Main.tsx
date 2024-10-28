import React from "react";

function Main() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-around py-20 mt-2">
        <div className="md:w-1/2 space-y-4">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-[#3c3cbf] dark:from-[#3c3cbf] dark:to-white font-bold text-[2.2rem] lg:text-7xl md:mr-12 md:mt-0 text-center md:w-full mt-12 md:text-left">
            Everything Talent simplifies hiring with a free ATS and AI-driven
            assessments.
          </p>
        </div>
        <div className="  mt-2 md:mt-10 ">
          <img
            src="https://everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout1.204b8a17.jpg&w=640&q=75" // Replace with the actual image URL
            alt="Workspace"
            className=" rotate-45 size-52 md:size-80 object-cover "
          />
          <div className="top-60 ">
            <img
              src="https://everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout2.282e4650.jpg&w=384&q=75" // Replace with the actual image URL
              alt="Workspace"
              className=" rotate-45 size-52 md:size-80 object-cover "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
