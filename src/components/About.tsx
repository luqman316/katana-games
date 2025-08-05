"use client";
import { motion } from "framer-motion";

import Image from "next/image";
const stats = [
  { title: "7+ Years", subtitle: "Professional Experienced" },
  { title: "200+", subtitle: "Projects & MVPs Delivered" },
  { title: "100 million+", subtitle: "Games Reached by Users" },
];

function About() {
  return (
    <div className="container mx-auto px-14 py-6 mt-24 min-h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-16">
        <div className="flex flex-col  p-5 justify-center md:items-start max-w-max items-center text-balance md:text-left">
          <p className="text-sm mb-2 text-green-500 font-semibold animate-pulse">
            FROM IDEAS TO REALITY
          </p>
          <h1 className="text-4xl font-bold mb-4 hover:cursor-pointer hover:animate-pulse">
            <span className="text-6xl text-red-600">A</span>BOUT{" "}
            <span className="text-6xl text-red-600">U</span>S
          </h1>
          <p className="text-lg text-gray-300">
            GenITeam is an award winning mobile app and game development company
            that offers development and publishing solutions from concept,
            development to app discovery. We have worked on diverse projects
            with a global customer base.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Offering over 50 million global user base and years of experience
            across all major platforms including iOS, Android, Amazon, Facebook,
            Web & PC etc. We are a trusted partner for top tier mobile studios
            from around the world.
          </p>
          {/* <div className="flex items-center mt-8">
            <button className="bg-green-400 hover:bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
              </svg>
            </button>
            <span className="ml-4 text-green-700 font-bold text-lg">GENITEAM SHOWREEL</span>
          </div> */}
        </div>
        <div className=" h-96 relative flex justify-center items-center">
          <Image
            src="/about/aim.webp"
            alt="About Us"
            fill
            quality={100}
            className="object-contain  rounded-2xl"
          />
        </div>
      </div>
      {/* projects numbers */}
      <div className="grid grid-cols-1 xs:grid-cols-2 mt-10 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-center items-center text-center p-4 sm:p-6 rounded-2xl bg-red-900 hover:bg-red-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer w-full min-w-[180px] max-w-xs mx-auto"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.04 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              type: "spring",
              stiffness: 80,
              damping: 18,
            }}
          >
            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2"
              whileHover={{
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.6 },
              }}
            >
              {item.title}
            </motion.h1>
            <p className="text-xs sm:text-base md:text-lg text-gray-300">
              {item.subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
