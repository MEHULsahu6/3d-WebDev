import React from "react";
import "./Dock.css";
import { FaHome, FaPlay, FaCrosshairs, FaCodeBranch, FaTimes, FaGithub } from "react-icons/fa";

const Dock = () => {
  const icons = [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaPlay />, label: "Play" },
    { icon: <FaCrosshairs />, label: "Aceternity UI" },
    { icon: <FaCodeBranch />, label: "Branches" },
    { icon: <FaTimes />, label: "Close" },
    { icon: <FaGithub />, label: "GitHub" },
  ];

  return (
    <div className="dock">
      {icons.map((item, index) => (
        <div className="dock-item" key={index}>
          <div className="icon">{item.icon}</div>
          <span className="tooltip">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Dock;
