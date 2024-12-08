import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, setHidePointer }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    onMouseEnter={() => setHidePointer(true)} // Hide pointer on hover
    onMouseLeave={() => setHidePointer(false)} // Show pointer after hover
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-3 p-2 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-full h-full object-contain pb-4"
        />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [pointerTrail, setPointerTrail] = useState([]);
  const [hidePointer, setHidePointer] = useState(false);
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const r = Math.floor((e.clientX / window.innerWidth) * 255);
    const g = Math.floor((e.clientY / window.innerHeight) * 255);
    const b = Math.floor(Math.random() * 255);

    const newPoint = {
      id: Date.now(),
      left: e.clientX,
      top: e.clientY,
      color: `rgb(${r}, ${g}, ${b})`,
      distance: Math.sqrt(
        Math.pow(e.clientX - window.innerWidth / 2, 2) +
          Math.pow(e.clientY - window.innerHeight / 2, 2)
      ),
    };

    setPointerTrail((prevTrail) => [...prevTrail, newPoint]);
    setPointerPos({ x: e.clientX, y: e.clientY }); // Update mouse position
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPointerTrail((prevTrail) =>
        prevTrail.filter((point) => Date.now() - point.id < 300) // Reduce lifespan to 300ms
      );
    }, 50); // Check every 50ms for cleanup

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Filter out the first and last particles
  const filteredTrail = pointerTrail.slice(1, pointerTrail.length - 1);

  return (
    <>
      {/* Custom Pointer with Trail */}
      {!hidePointer && (
        <div
          style={{
            position: "fixed",
            left: `${pointerPos.x}px`, // Position the visible pointer at the current mouse position
            top: `${pointerPos.y}px`,
            width: "20px", // Size of the visible pointer
            height: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.7)", // Make the pointer semi-transparent
            borderRadius: "50%",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)", // Center the pointer over the cursor
            zIndex: 1000,
          }}
        />
      )}

      {/* Trail Effect */}
      {!hidePointer &&
        filteredTrail.map((point, index) => {
          const maxSize = 20;
          const minSize = 5;
          const size = Math.max(minSize, maxSize - index * 3); // Particle size decreases as index increases

          const fadeDuration = 150 + (index * 50); // Make it even faster for each subsequent particle

          return (
            <div
              key={point.id}
              style={{
                position: "fixed",
                left: `${point.left}px`,
                top: `${point.top}px`,
                width: `${size}px`, // Dynamic size based on distance from pointer
                height: `${size}px`, // Dynamic size based on distance from pointer
                backgroundColor: point.color,
                borderRadius: "50%",
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
                zIndex: 1000,
                animation: `growShrinkFadeOut ${fadeDuration}ms linear`, // Shrink and fade-out animation
              }}
            />
          );
        })}

<motion.div variants={textVariant()}>
  <h2 className={styles.sectionHeadText}>Game Modes</h2>

  <div className="mt-4 flex flex-wrap gap-6">
  <div
    className="p-6 rounded-lg shadow-md w-[calc(50%-0.75rem)] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
  >
    <h3 className="text-xl font-bold text-white">Classic Mode</h3>
    <p className="text-white mt-2">
      Experience the timeless gameplay with classic challenges and progressive difficulty levels.
    </p>
  </div>
  <div
    className="p-6 rounded-lg shadow-md w-[calc(50%-0.75rem)] bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
  >
    <h3 className="text-xl font-bold text-white">Adventure Mode</h3>
    <p className="text-white mt-2">
      Embark on an exciting journey with unique levels, storylines, and special rewards.
    </p>
  </div>
  <div
    className="p-6 rounded-lg shadow-md w-[calc(50%-0.75rem)] bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
  >
    <h3 className="text-xl font-bold text-white">Multiplayer Mode</h3>
    <p className="text-white mt-2">
      Compete with friends or players worldwide in real-time, showing off your skills.
    </p>
  </div>
  <div
    className="p-6 rounded-lg shadow-md w-[calc(50%-0.75rem)] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
  >
    <h3 className="text-xl font-bold text-white">Challenge Mode</h3>
    <p className="text-white mt-2">
      Test your limits with special challenges that push your skills to the max.
    </p>
  </div>
</div>

</motion.div>





      {/* Example Content */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            setHidePointer={setHidePointer} // Pass the hide pointer function
          />
        ))}
      </div>

      {/* Inline Styles for Keyframes */}
      <style>
        {`
          @keyframes growShrinkFadeOut {
            0% {
              opacity: 1;
              transform: scale(1); /* Start with the particle at its largest size */
            }
            50% {
              opacity: 0.5;
              transform: scale(0.8); /* Shrink the particle slightly */
            }
            100% {
              opacity: 0; /* Fade out completely */
              transform: scale(0.3); /* Shrink the particle to its smallest size */
            }
          }

          body {
            cursor: default; /* Set the default cursor visible */
          }
        `}
      </style>
    </>
  );
};

export default SectionWrapper(About, "about");
