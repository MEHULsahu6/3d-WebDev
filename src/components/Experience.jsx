import React, { useState } from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles"; // Ensure you have defined styles in ../styles
import { SectionWrapper } from "../hoc"; // Ensure SectionWrapper is a valid HOC
import { Scene3d } from "./canvas";

const Experience = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 50; // Scale movement to ±50px
    const y = (e.clientY / window.innerHeight - 0.5) * 50; // Scale movement to ±50px
    setCursorPos({ x, y });
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div onMouseMove={handleMouseMove} className="relative">
      {/* Enhanced Animated Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        style={{
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
          transition: "transform 0.1s ease-out",
          textShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)", // Subtle glowing effect
        }}
      >
        Invited Teams
      </motion.h1>

      {/* 3D Scene Section */}
      <div className="mt-[-10vh]">
        <Scene3d />
      </div>

      {/* Game Related Paragraphs */}
      <motion.div
        className="game-paragraphs mt-10"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2, // Stagger the appearance of each paragraph
            },
          },
        }}
      >
        <motion.p
          className="text-white text-lg mb-6"
          variants={fadeInVariant}
        >
          The game offers an exciting experience where you can compete against some of the best teams from around the world. The dynamics of the game push you to think strategically, adapt to changing environments, and outsmart your opponents. Whether you're playing solo or with a squad, each match is a new challenge filled with surprises.
        </motion.p>
        <motion.p
          className="text-white text-lg mb-6"
          variants={fadeInVariant}
        >
          Players can choose from a wide variety of characters, each with their own special abilities that can turn the tide of the game. Whether you prefer offensive tactics or a defensive strategy, there's a character that suits your playstyle, allowing you to dominate the battlefield.
        </motion.p>
        <motion.p
          className="text-white text-lg mb-6"
          variants={fadeInVariant}
        >
          With frequent updates, new events, and limited-time modes, the game keeps things fresh and exciting. Every time you log in, there’s something new to explore, from new weapons and skins to dynamic challenges that will test your skills to the limit. Join the community and prove that you have what it takes to be the champion!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
