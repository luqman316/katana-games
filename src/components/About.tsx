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
    <div className="container mx-auto px-4 lg:px-14 py-4 lg:py-6 mt-8 lg:mt-24 min-h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 lg:gap-16">
        <div className="flex flex-col p-4 lg:p-5 justify-center items-center text-center lg:md:items-start lg:text-left max-w-full lg:max-w-max">
          <p className="text-xs lg:text-sm mb-2 text-green-500 font-semibold animate-pulse">
            FROM IDEAS TO REALITY
          </p>
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 hover:cursor-pointer hover:animate-pulse">
            <span className="text-4xl lg:text-6xl text-red-600">A</span>BOUT{" "}
            <span className="text-4xl lg:text-6xl text-red-600">U</span>S
          </h1>
          <p className="text-base lg:text-lg text-gray-300">
            Katana Games is an award winning mobile app and game development company
            that offers development and publishing solutions from concept,
            development to app discovery. We have worked on diverse projects
            with a global customer base.
          </p>
          <p className="mt-4 text-base lg:text-lg text-gray-300">
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
        <div className="h-64 lg:h-96 relative flex justify-center items-center w-full max-w-sm lg:max-w-none mx-auto">
          <Image
            src="/about/aim.webp"
            alt="About Us"
            fill
            quality={100}
            className="object-contain rounded-2xl"
          />
        </div>
      </div>
      {/* projects numbers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-24 gap-4 lg:gap-6 w-full max-w-5xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-center items-center bg-gradient-to-l from-black/10 to-red-900/30 rounded-xl text-center p-4 lg:p-6 hover:bg-red-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer w-full max-w-xs mx-auto"
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
              className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-yellow-400 mb-2"
              whileHover={{
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.6 },
              }}
            >
              {item.title}
            </motion.h1>
            <p className="text-sm lg:text-base xl:text-lg text-gray-300">
              {item.subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
