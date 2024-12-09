import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const darkBackground = "#0c111f";
const cardBackground = "#20293a";
const textColor = "#f7f7f7";
const accentColor = "#95389e";

const slideLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
`;

const slideRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
`;

const SliderContainer = styled.div`
  background-color: transparent;
  padding: 20px;
  overflow: hidden;
  height: 300px; /* Increase the height as needed */
`;


const Row = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${(props) => (props.direction === "left" ? slideLeft : slideRight)}
    20s linear infinite;
`;

const Card = styled.div`
  background-color: ${cardBackground};
  color: ${textColor};
  border: 2px solid ${accentColor};
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  min-width: 400px; /* Increased from 300px */
  max-width: 400px; /* Increased from 300px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;


const HighlightText = styled.div`
  font-weight: bold;
  color: ${accentColor};
  margin-bottom: 10px;
`;

const Slider = () => {
  const dataRow1 = [
    { name: "Krishna Patel", prize: "Won 25 Lakh" },
    { name: "Rakesh Sunda", prize: "Won 13 Lakh" },
    { name: "Anita", prize: "Won Rs. 7.1 Lakhs" },
    { name: "Rahul", prize: "Won 5 Lakh" },
  ];

  const dataRow2 = [
    { name: "Pradeep", prize: "Won Rs. 13 Lakhs" },
    { name: "Mikee Kumari", prize: "Won Smartphone Giveaway" },
    { name: "Arjun", prize: "Won 1 Lakh" },
    { name: "Pooja", prize: "Won Rs. 10 Lakhs" },
  ];

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX / 10, y: e.clientY / 10 });
  };

  return (
    <div onMouseMove={handleMouseMove}>
<motion.h1
  className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
  style={{
    transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
    transition: "transform 0.1s ease-out",
    textShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)", // Subtle glowing effect
    marginLeft: "65px", // Add space from the left
  }}
>
  Winners Hub
</motion.h1>
<br/>
<br/>
      <SliderContainer>
        <Row direction="left">
          {dataRow1.map((user, index) => (
            <Card key={index}>
              <HighlightText>{user.prize}</HighlightText>
              <div>{user.name}</div>
            </Card>
          ))}
          {dataRow1.map((user, index) => (
            <Card key={`duplicate1-${index}`}>
              <HighlightText>{user.prize}</HighlightText>
              <div>{user.name}</div>
            </Card>
          ))}
        </Row>
        <Row direction="right">
          {dataRow2.map((user, index) => (
            <Card key={index}>
              <HighlightText>{user.prize}</HighlightText>
              <div>{user.name}</div>
            </Card>
          ))}
          {dataRow2.map((user, index) => (
            <Card key={`duplicate2-${index}`}>
              <HighlightText>{user.prize}</HighlightText>
              <div>{user.name}</div>
            </Card>
          ))}
        </Row>
      </SliderContainer>
    </div>
  );
};

export default Slider;
