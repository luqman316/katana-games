"use client";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaCode,
  FaGamepad,
  FaNetworkWired,
  FaPuzzlePiece,
  FaUnity,
} from "react-icons/fa";
import { SiUnrealengine, SiVirtualbox } from "react-icons/si";

const highlights = [
  {
    title: "Unity Game Development",
    description: "Built frameworks powering successful games for years.",
    icon: (
      <FaUnity className="text-2xl sm:text-3xl lg:text-4xl text-gray-950" />
    ),
  },
  {
    title: "Unreal Engine Development",
    description: "Built frameworks powering successful games for years.",
    icon: (
      <SiUnrealengine className="text-2xl sm:text-3xl lg:text-4xl text-slate-100" />
    ),
  },
  {
    title: "AR/VR Development",
    description: "Established boilerplates and coding guidelines.",
    icon: (
      <SiVirtualbox className="text-2xl sm:text-3xl lg:text-4xl text-blue-500" />
    ),
  },

  {
    title: "Plugin & SDK Integration",
    description: "Troubleshooting and optimizing third-party tools.",
    icon: (
      <FaPuzzlePiece className="text-2xl sm:text-3xl lg:text-4xl text-pink-500" />
    ),
  },
  {
    title: "Code Quality & Best Practices",
    description: "Established boilerplates and coding guidelines.",
    icon: (
      <FaCode className="text-2xl sm:text-3xl lg:text-4xl text-green-500" />
    ),
  },
  {
    title: "Multiplayer Game Development",
    description: "Expertise in Photon PUN2, Mirror, and Netcode.",
    icon: (
      <FaNetworkWired className="text-2xl sm:text-3xl lg:text-4xl text-blue-500" />
    ),
  },
  {
    title: "Game Architecture & Scalability",
    description: "Built frameworks powering successful games for years.",
    icon: (
      <FaGamepad className="text-2xl sm:text-3xl lg:text-4xl text-indigo-400" />
    ),
  },
  {
    title: "Game Optimization & Performance",
    description: "Ensured smooth gameplay, even on low-tier devices.",
    icon: (
      <FaBolt className="text-2xl sm:text-3xl lg:text-4xl text-yellow-500" />
    ),
  },
  // {
  //   title: "Leadership & Team Management",
  //   description: "Led teams of 5 to 20 developers, driving decisions.",
  //   icon: <FaUsers className="text-2xl sm:text-3xl lg:text-4xl text-red-500" />,
  // },
];
function Technologies() {
  return (
    <div>
      <div className="container mx-auto px-14 py-6  flex items-center">
        <div>
          {/* 1st div */}
          <div>
            <h1 className="text-4xl font-bold mb-4 hover:cursor-pointer hover:animate-pulse uppercase">
              <span className="text-6xl text-red-600">T</span>echnology{" "}
              <span className="text-6xl text-red-600">S</span>tack
            </h1>
          </div>
          {/* 2nd div */}
          <div className="flex justify-center mt-16 items-center">
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex flex-col justify-center  mx-auto items-center md:mx-0"
            >
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 items-center justify-center gap-16 sm:gap-3 md:gap-6 mt-4 sm:mt-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className="p-2 sm:p-3 rounded-2xl bg-gray-700 flex-row justify-center  items-center group hover:bg-white/10 transition-all shadow-md hover:shadow-lg hover:shadow-indigo-500/20"
                  >
                    <div className="mb-2 flex items-center justify-center">
                      <span className="bg-white/10 rounded-full p-2 sm:p-3 group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-base md:text-lg font-bold text-indigo-300 group-hover:text-indigo-400 text-center">
                      {item.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
