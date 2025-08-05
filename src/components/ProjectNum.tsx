"use client";
import { motion } from "framer-motion";

const stats = [
  { title: "7+ Years", subtitle: "Professional Experienced" },
  { title: "200+", subtitle: "Projects & MVPs Delivered" },
  { title: "100 million+", subtitle: "Games Reached by Users" },
];

export default function ProjectNum() {
  return (
    <div className="container mx-auto px-14 py-6   flex items-center sm:px-4 sm:py-10 text-white">
      <div className="flex justify-center items-center mt-10 sm:mt-12 w-full">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl mx-auto">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center text-center p-4 sm:p-6 rounded-2xl bg-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer w-full min-w-[180px] max-w-xs mx-auto"
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
    </div>
  );
}
