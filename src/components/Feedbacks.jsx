import React from "react";
import { motion } from "framer-motion";

// Sample leaderboard data
const leaderboardData = [
  { rank: 1, player: "AceHunter", score: 3050, stars: 5 },
  { rank: 2, player: "ShadowSlayer", score: 2955, stars: 5 },
  { rank: 3, player: "DragonKing", score: 2649, stars: 4 },
  { rank: 4, player: "NightWolf", score: 2403, stars: 4 },
  { rank: 5, player: "PhoenixRider", score: 2396, stars: 4 },
  { rank: 6, player: "BlazeFury", score: 2208, stars: 3 },
  { rank: 7, player: "StealthHunter", score: 2000, stars: 3 },
  { rank: 8, player: "IronFist", score: 1985, stars: 3 },
  { rank: 9, player: "Firestorm", score: 1805, stars: 2 },
];

// Leaderboard row component
const LeaderboardRow = ({ rank, player, score, stars }) => {
  const rankColors = {
    1: "text-yellow-500",
    2: "text-gray-300",
    3: "text-amber-700",
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-blue-800 bg-opacity-90 rounded-md shadow-md text-white">
      {/* Rank */}
      <div
        className={`flex items-center justify-center w-8 h-8 font-bold ${
          rankColors[rank] || "text-white"
        }`}
      >
        {rank <= 3 ? "🏅" : rank}
      </div>
      {/* Player Name */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full flex justify-center items-center text-black font-bold">
          {player.charAt(0)}
        </div>
        <p className="font-semibold">{player}</p>
      </div>
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">
            ⭐
          </span>
        ))}
      </div>
      {/* Score */}
      <p className="font-semibold">{score}</p>
    </div>
  );
};

// Main leaderboard component
const Leaderboard = () => {
  // Sample rules data
  const rules = [
    "Players must adhere to fair play and avoid any use of hacks or cheats.",
    "Team communication should be respectful; abusive language is strictly prohibited.",
    "Game settings must not be altered to gain an unfair advantage.",
    "Players must not intentionally harm or sabotage their teammates.",
    "Ensure a stable internet connection to avoid unfair disconnections during gameplay.",
    "All participants must comply with the tournament organizer's instructions.",
    "Use only approved software and devices to play the game.",
    "Avoid AFK (Away From Keyboard) behavior that disrupts the flow of the game.",
  ];

  return (
    <div className="flex flex-col items-center mt-12 px-4">
      {/* Header */}
      <div className="bg-blue-700 text-white py-4 px-6 rounded-t-lg shadow-lg w-full max-w-2xl text-center mb-8">
        <h1 className="text-3xl font-bold">LEADERBOARD</h1>
      </div>

      {/* Leaderboard Body */}
      <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-6 w-full max-w-2xl rounded-lg shadow-2xl">
        <div className="space-y-4">
          {leaderboardData.map((entry, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <LeaderboardRow {...entry} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rules & Regulations */}
      <div className="mt-12 w-full max-w-2xl  p-6 rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-4 ">Rules & Regulations</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          {rules.map((rule, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="transition-all ease-in-out"
            >
              {rule}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
