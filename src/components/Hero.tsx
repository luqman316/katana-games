"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
     <div className="container mx-auto px-14 py-6 flex justify-center min-h-screen items-center">
          <div className="grid grid-cols-2 gap-10">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <h1 className="text-4xl font-serif font-bold leading-snug ">
                  <span className="text-6xl text-red-600">T</span>RANS
                  <span className="text-red-600 text-6xl">F</span>
                  <span className="">ORMING</span>{" "}
                  <span className="text-6xl text-red-600">Y</span>OUR{" "}
                  <span className="text-6xl text-red-600">V</span>ISION
                  <br />
                  <span className="text-6xl text-red-600">I</span>NTO{" "}
                  <span className="text-6xl text-red-600">A</span>N{" "}
                  <span className="text-6xl text-red-600">E</span>PIC{" "}
                  <span className="text-6xl text-red-600">C</span>REATION
                </h1>
              </motion.div>

              <div>
                <br />
                <p className="line-clamp-3 text-lg font-medium text-gray-300 ">
                  We understand the expectations of gamers of today, thus
                  creating games that involve the latest trends of technology
                  and expertise including Metaverse/NFT/Blockchain
                </p>
                <br />
                <br />
                <ul className="list-disc pl-5 ">
                  <li className="text-lg font-medium text-gray-300">
                    Game Development
                  </li>
                  <li className="text-lg font-medium text-gray-300">
                    Blockchain Development
                  </li>
                  <li className="text-lg font-medium text-gray-300">
                    NFT Marketplace
                  </li>
                  <li className="text-lg font-medium text-gray-300">
                    Metaverse Development
                  </li>
                </ul>
                <br />
                <br />
                <div className="flex flex-row gap-5">
                  <Link
                    href={"/contact"}
                    className="bg-red-900 flex items-center text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
                  >
                    Get Started
                    <span className="ml-2">
                      <FontAwesomeIcon icon={faArrowRight} className="size-5" />
                    </span>
                  </Link>
                  <Link
                    href={"/contact"}
                    className="bg-red-900 flex items-center text-white font-bold py-3 px-6 rounded-lg hover:bg-red-800 transition-colors duration-300"
                  >
                    Get Started
                    <span className="ml-2">
                      <FontAwesomeIcon icon={faArrowRight} className="size-5" />
                    </span>
                  </Link>
                  <Link
                    href={"/contact"}
                    className="bg-red-900 flex items-center text-white font-bold py-3 px-6 rounded-lg hover:bg-red-800 transition-colors duration-300"
                  >
                    Get Started
                    <span className="ml-2">
                      <FontAwesomeIcon icon={faArrowRight} className="size-5" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
  )
}

export default Hero
