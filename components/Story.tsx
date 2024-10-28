import React from "react";

function Story() {
  return (
    <div>
      <section className="text-center px-3 md:px-8 py-8">
        <h2 className="text-4xl md:text-5xl font-bold py-4 md:py-5">
          Our Story
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto py-1 md:py-3 md:text-lg text-xl">
          We not only make the world's most comfortable hammocks, but through
          training and sustainable job creation, we empower our weavers and
          their families to break the cycle of poverty and build a brighter
          future.
        </p>
      </section>
      <section className="px-4 md:px-36 space-y-12 py-6 md:py-10">
        <div className="flex flex-col-reverse md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 space-y-2 md:px-14">
            <h3 className="text-2xl font-bold py-3">
              The Journey to Transform Recruitment
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-justify">
              Everything Talent was founded with a vision to transform the way
              organizations approach hiring. Frustrated by traditional,
              cumbersome methods of recruiting, our founder set out to create a
              solution that simplifies the hiring journey while leveraging the
              latest advancements in technology.
            </p>
          </div>
          <div className="md:w-1/2 md:p-2">
            <img
              src="https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Fstory_1.png&w=640&q=75" // Replace with the actual image URL
              alt="Transformation"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 space-y-2 md:px-14">
            <h3 className="text-2xl font-bold py-3">
              Combining Innovation with Efficiency
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-justify">
              Our platform combines a free Applicant Tracking System (ATS) with
              AI-driven tech assessments. This allows you to evaluate candidates
              quickly and accurately, regardless of their background or the
              complexity of the role. We are committed to leveraging the latest
              technology to streamline the recruitment process and reduce bias.
            </p>
          </div>
          <div className="md:w-1/2 md:p-2">
            <img
              src="https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Fstory_2.png&w=640&q=75" // Replace with the actual image URL
              alt="Innovation"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 space-y-2 md:px-14 py-3 ">
            <h3 className="text-2xl font-bold">
              Democratizing Recruitment Tools
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-justify">
              We believe in democratizing access to powerful recruitment tools,
              making them available to both startups and established companies
              alike. Our goal is to level the playing field, ensuring that every
              organization, regardless of size, can compete for and secure the
              best talent available.
            </p>
          </div>
          <div className="md:w-1/2 md:p-2">
            <img
              src="https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Fstory_3.png&w=640&q=75" // Replace with the actual image URL
              alt="Democratizing Tools"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Story;
