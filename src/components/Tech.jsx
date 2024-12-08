import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cards = [
    {
      feature: "Battle Royale Mode",
      description: "Engage in intense 50-player battles to become the last person standing in this popular mode!",
    },
    {
      feature: "Character Abilities",
      description: "Each character has a unique ability that can turn the tide of battle. Pick the best one for your strategy.",
    },
    {
      feature: "Weapons",
      description: "Choose from a wide range of weapons including guns, grenades, and melee weapons.",
    },
    {
      feature: "Squad Play",
      description: "Team up with your friends and fight together in squads for an added advantage in the battle.",
    },
    {
      feature: "Customizable Skins",
      description: "Personalize your character with custom skins to stand out in the battlefield.",
    },
    {
      feature: "Events",
      description: "Participate in limited-time events for exclusive rewards and challenges.",
    },
  ];

  const hoverAnimation = {
    whileHover: {
      scale: 1.05,
      backgroundColor: "rgba(0, 153, 255, 0.1)", // Light blue background on hover
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="py-4 h-full">
      {/* Dynamic Heading */}
      <div
        className="features-heading"
        style={{
          ...styles.heading,
          transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px) rotate(${(mousePosition.x + mousePosition.y) / 100}deg)`,
        }}
      >
        Features
      </div>

      {/* Slider Section */}
      <Slider cards={cards} />

      {/* Game-Related Content */}
      <div className="game-content mt-10 px-6">
        {[
          {
            title: "Unmatched Thrill",
            description:
              "Step into a world of intense action and strategic gameplay where every decision counts. Whether it's sneaking through enemy lines or launching a full-scale attack, the thrill of competition keeps you on the edge of your seat.",
          },
          {
            title: "Diverse Characters",
            description:
              "Choose from a roster of uniquely skilled characters. From healers to damage dealers, each has a role to play in achieving victory. Master your favorite to dominate the battlefield.",
          },
          {
            title: "Endless Customization",
            description:
              "Express yourself with custom skins, weapons, and emotes. Stand out in the heat of battle and showcase your unique style to the world.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="content-section p-5 rounded-lg mb-5"
            {...hoverAnimation}
          >
            <h3 className="text-light-blue text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-light-gray text-lg leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");

// Inline CSS styles for the page
const styles = {
  heading: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "3rem", // Adjusted font size for better visibility
    fontWeight: "bold",
    color: "rgb(200, 240, 255)", // Lighter heading color
    textAlign: "left", // Align text to the left
    marginBottom: "30px",
    position: "absolute", // Absolute positioning to place the heading
    left: "20px", // Adjust the left position
    top: "20px", // Adjust the top position
    textTransform: "uppercase",
    letterSpacing: "2px",
    transition: "transform 0.1s ease-out", // Smooth transition for movement and rotation
    textShadow: "0 0 10px rgba(200, 240, 255, 0.6), 0 0 20px rgba(200, 240, 255, 0.4)", // Subtle glow effect
  },
};
