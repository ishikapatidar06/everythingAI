import React, { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Vikram Sinha",
    role: "Founder / CEO",
    description: "Tech innovator solving real-world problems.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75",
  },
  {
    id: 2,
    name: "Radhika Iyer",
    role: "Chief Strategy Officer",
    description: "Drives growth with strategic insights.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Finf1.jpg&w=96&q=75",
  },
  {
    id: 3,
    name: "Ethan Mitchell",
    role: "Lead Product Designer",
    description: "Designs seamless and innovative user experiences.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam1.jpg&w=96&q=75",
  },
  {
    id: 4,
    name: "Meera Joshi",
    role: "Head of Digital Marketing",
    description: "Boosts online presence and recognition.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Finf2.jpg&w=96&q=75",
  },
  {
    id: 5,
    name: "Chris Anderson",
    role: "Content Strategist",
    description: "Creates engaging content strategies.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
  },
  {
    id: 6,
    name: "Sophia Miller",
    role: "Social Media Manager",
    description: "Builds brands through social media.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Famf1.jpg&w=96&q=75",
  },
  {
    id: 7,
    name: "Amit Verma",
    role: "Senior UI/UX Designer",
    description: "Crafts intuitive and appealing interfaces.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Finf2.jpg&w=96&q=75",
  },
  {
    id: 8,
    name: "Nisha Rao",
    role: "Brand Manager",
    description: "Maintains strong brand identity.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Famf2.jpg&w=96&q=75",
  },
  {
    id: 9,
    name: "Benjamin Harris",
    role: "SEO Specialist",
    description: "Optimizes content for search rankings.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam3.jpg&w=96&q=75",
  },
  {
    id: 10,
    name: "Olivia Brown",
    role: "Content Writer",
    description: "Develops engaging and informative content.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Finf4.jpg&w=96&q=75",
  },
  {
    id: 11,
    name: "Rajesh Kannan",
    role: "Graphic Designer",
    description: "Creates visually striking designs.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Famf3.jpg&w=96&q=75",
  },
  {
    id: 12,
    name: "Aditi Shah",
    role: "Public Relations Manager",
    description: "Manages media relations and communication.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin3.jpg&w=96&q=75",
  },
  {
    id: 13,
    name: "James Cooper",
    role: "Business Analyst",
    description: "Uses data to drive decisions.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Finf5.jpg&w=96&q=75",
  },
  {
    id: 14,
    name: "Priya Desai",
    role: "HR Manager",
    description: "Optimizes talent management and environment.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Famf3.jpg&w=96&q=75",
  },
  {
    id: 15,
    name: "Robert Taylor",
    role: "Technical Support Lead",
    description: "Ensures smooth technical operations.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam5.jpg&w=96&q=75",
  },
  {
    id: 16,
    name: "Sneha Menon",
    role: "Project Manager",
    description: "Manages projects for quality outcomes.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Famf4.jpg&w=96&q=75",
  },
];
interface TeamExpertsProps {
  id: number;
}

const TeamExperts: React.FC<TeamExpertsProps> = ({ id }) => {
  const member = teamMembers.find((member) => member.id === id);
  const [hovered, setHovered] = useState(false);

  if (!member) return null;

  return (
    <div
      className="relative flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="rounded-full w-8 h-8 md:w-24 md:h-24  object-cover "
      />
      {hovered && (
        <div className="absolute top-8 md:top-24 w-56 p-4 bg-blue-500 text-white rounded-lg shadow-lg text-center z-10">
          <h3 className="font-semibold">{member.name}</h3>
          <p className="text-sm">{member.role}</p>
          <p className="text-xs mt-1">{member.description}</p>
        </div>
      )}
    </div>
  );
};
const TeamGrid: React.FC = () => {
  return (
    <section className="text-center px-4 ">
      <h2 className="text-5xl font-bold mb-4">Our Experts Team</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto md:mb-14 md:text-lg">
        At Everything Talent, our innovative team develops AI-driven assessments
        and an advanced ATS to modernize hiring. We focus on reducing bias,
        making recruitment efficient, and providing accessible tools for
        companies of all sizes to attract top talent.
      </p>

      <div className="grid grid-rows-7 grid-flow-col grid-cols-7 gap-4 mx-auto max-w-5xl">
        <div className="col-start-4 row-start-1 flex justify-center">
          <TeamExperts id={1} />
        </div>
        <div className="col-start-3 row-start-2 flex justify-center">
          <TeamExperts id={2} />
        </div>
        <div className="col-start-5 row-start-2 flex justify-center">
          <TeamExperts id={3} />
        </div>
        <div className="col-start-2 row-start-3 flex justify-center">
          <TeamExperts id={4} />
        </div>
        <div className="col-start-4 row-start-3 flex justify-center">
          <TeamExperts id={5} />
        </div>
        <div className="col-start-6 row-start-3 flex justify-center">
          <TeamExperts id={6} />
        </div>
        <div className="col-start-1 row-start-4 flex justify-center">
          <TeamExperts id={7} />
        </div>
        <div className="col-start-3 row-start-4 flex justify-center">
          <TeamExperts id={8} />
        </div>
        <div className="col-start-5 row-start-4 flex justify-center">
          <TeamExperts id={9} />
        </div>
        <div className="col-start-7 row-start-4 flex justify-center">
          <TeamExperts id={10} />
        </div>
        <div className="col-start-2 row-start-5 flex justify-center">
          <TeamExperts id={11} />
        </div>
        <div className="col-start-4 row-start-5 flex justify-center">
          <TeamExperts id={12} />
        </div>
        <div className="col-start-6 row-start-5 flex justify-center">
          <TeamExperts id={13} />
        </div>
        <div className="col-start-3 row-start-6 flex justify-center">
          <TeamExperts id={14} />
        </div>
        <div className="col-start-5 row-start-6 flex justify-center">
          <TeamExperts id={15} />
        </div>
        <div className="col-start-4 row-start-7 flex justify-center">
          <TeamExperts id={16} />
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
