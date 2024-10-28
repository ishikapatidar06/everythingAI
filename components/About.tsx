"use client";
import React, { useState } from "react";

import TeamExperts from "./TeamExperts";
import Journey from "./Timeline";
import Footer from "./Footer";
import Story from "./Story";
import Values from "./Values";
import Culture from "./Culture";
import Main from "./Main";
import TeamGrid from "./TeamExperts";

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 ">
      {/* Top Section */}
      <Main />

      {/* Our Story */}
      <Story />

      {/* Our Values */}
      <Values />

      {/* Our Team Experts Section */}
      <TeamGrid />

      {/* Our Culture Section */}
      <Culture />

      {/* Journey Section */}
      <Journey />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;
