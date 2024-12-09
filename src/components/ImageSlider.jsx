import React from "react";
import styled, { keyframes } from "styled-components";

function Slidernew() {
  const row1 = [
    "https://picsum.photos/800/400?random=1",
    "https://picsum.photos/800/400?random=2",
    "https://picsum.photos/800/400?random=3",
    "https://picsum.photos/800/400?random=4",
    "https://picsum.photos/800/400?random=5",
    "https://picsum.photos/800/400?random=6",
    "https://picsum.photos/800/400?random=7",
  ];

  const row2 = [
    "https://picsum.photos/800/400?random=8",
    "https://picsum.photos/800/400?random=9",
    "https://picsum.photos/800/400?random=10",
    "https://picsum.photos/800/400?random=11",
    "https://picsum.photos/800/400?random=12",
    "https://picsum.photos/800/400?random=13",
    "https://picsum.photos/800/400?random=14",
  ];

  return (
    <div className="w-full h-full bg-[#051224] flex items-center justify-center py-4">
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`Row 1 Image ${index + 1}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`Row 1 Image ${index + 1}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee reverse>
          <MarqueeGroup>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`Row 2 Image ${index + 1}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`Row 2 Image ${index + 1}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </div>
  );
}

export default Slidernew;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );

  ${({ reverse }) =>
    reverse &&
    `
      animation-direction: reverse;
    `}
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 20vmin, 30rem);
  padding: calc(clamp(5rem, 1rem + 10vmin, 10rem) / 10);

  @media (max-width: 768px) {
    width: clamp(8rem, 1rem + 20vmin, 25rem);
    padding: calc(clamp(8rem, 1rem + 20vmin, 25rem) / 10);
  }

  @media (max-width: 480px) {
    width: clamp(6rem, 1rem + 20vmin, 20rem);
    padding: calc(clamp(6rem, 1rem + 20vmin, 20rem) / 10);
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 768px) {
    // padding: 3px 15px;
  }

  @media (max-width: 480px) {
    // padding: 2px 10px;
  }
`;
