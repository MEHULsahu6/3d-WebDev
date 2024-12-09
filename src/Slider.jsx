import React from "react";
import styled, { keyframes } from "styled-components";

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
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`;

const SliderContainer = styled.div`
  background-color: transparent;
  padding: 20px;
  overflow: hidden;
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
  min-width: 300px;
  max-width: 300px;
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

  return (
    <SliderContainer>
      <Row direction="left">
        {dataRow1.map((user, index) => (
          <Card key={index}>
            <HighlightText>{user.prize}</HighlightText>
            <div>{user.name}</div>
          </Card>
        ))}
        {/* Duplicate for smooth infinite sliding */}
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
        {/* Duplicate for smooth infinite sliding */}
        {dataRow2.map((user, index) => (
          <Card key={`duplicate2-${index}`}>
            <HighlightText>{user.prize}</HighlightText>
            <div>{user.name}</div>
          </Card>
        ))}
      </Row>
    </SliderContainer>
  );
};

export default Slider;
