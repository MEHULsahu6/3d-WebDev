import React, { useEffect } from "react";
import { gsap } from "gsap";

function Preloader() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("body", {
      overflow: "hidden",
    })
      .to(".preloader .text-container", {
        duration: 0,
        visibility: "visible",
        ease: "Power3.easeOut",
      })
      .from(".preloader .text-container h1", {
        duration: 1.5,
        delay: 1,
        y: 70,
        skewY: 10,
        stagger: 0.4,
        ease: "Power3.easeOut",
      })
      .to(".preloader .text-container h1", {
        duration: 1.2,
        y: 70,
        skewY: -20,
        stagger: 0.2,
        ease: "Power3.easeOut",
      })
      .to(".preloader", {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
      })
      .to(
        "body",
        {
          overflow: "auto",
        },
        "-=2"
      )
      .to(".preloader", {
        display: "none",
      });
  }, []);

  return (
    <div className="preloader">
      <div className="text-container">
        <h1>GSAP</h1>
        <h1>Preloader</h1>
        <h1>Animation</h1>
      </div>
    </div>
  );
}

export default Preloader;
