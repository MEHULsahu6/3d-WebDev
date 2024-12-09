import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({ index, winnerName, rank, winnerImage }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="transform transition-all duration-500 ease-in-out hover:scale-110"
    >
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 450,
        }}
        className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-5 rounded-2xl sm:w-[360px] w-full shadow-lg neumorphism-card-dark"
      >
        {/* Winner's Image Section with Unique Styling */}
        <div className="relative w-full h-[230px] bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden neumorphism-image-container-dark">
          {/* Winner's Image */}
          <img
            src={winnerImage}
            alt="winner"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-blue-700"
          />
        </div>

        {/* Winner Details Section */}
        <div className="mt-4 text-center neumorphism-details-dark">
          <h3 className="text-white font-extrabold text-[20px] hover:text-blue-500 transition-colors duration-300">
            {winnerName}
          </h3>
          <p className="mt-2 text-gray-400 text-[14px] font-semibold">
            Rank: <span className="text-white">{rank}</span>
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const winners = [
    {
      winnerName: "Player1",
      rank: "1st",
      winnerImage: "./user.png",
    },
    {
      winnerName: "Player2",
      rank: "2nd",
      winnerImage: "./user.png",
    },
    {
      winnerName: "Player3",
      rank: "3rd",
      winnerImage: "./user.png",
    },
    // Add more winners as needed
  ];

  return (
    <>
      {/* Section Heading with Styling */}
      <motion.div variants={fadeIn()}>
        <p className="sectionSubText text-xl font-semibold text-gray-300 mb-2">Game Winners</p>
        <h2 className="sectionHeadText text-4xl font-extrabold text-white leading-tight mb-6">
          Top Players
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center text-gray-400"
        >
          Here are the top winners from the latest game event.
        </motion.p>
      </div>

      {/* 3D Effect Container */}
      <div className="mt-20 flex flex-wrap gap-7 justify-center perspective-1000">
        {/* Render winner cards */}
        {winners.map((winner, index) => (
          <motion.div
            key={`winner-${index}`}
            className="transform transition-all duration-500 ease-in-out hover:rotate-y-12 hover:scale-110"
          >
            <ProjectCard
              index={index}
              winnerName={winner.winnerName}
              rank={winner.rank}
              winnerImage={winner.winnerImage}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
