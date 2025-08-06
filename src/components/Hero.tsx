"use client";
import Katana3D from "@/components/Katana3D";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Hero() {
  return (
    // <div className="container mx-auto px-14 py-6 min-h-screen flex items-center ">
    //   <div className="flex items-center ">
    //     {/* 1st div */}
    //     <div className="grid grid-cols-2 ">
    //       <div>
    //         <div>
    //           <h1 className="text-4xl font-serif font-bold leading-snug ">
    //             <span className="text-6xl text-red-600">T</span>RANS
    //             <span className="text-red-600 text-6xl">F</span>
    //             <span className="">ORMING</span>{" "}
    //             <span className="text-6xl text-red-600">Y</span>OUR{" "}
    //             <span className="text-6xl text-red-600">V</span>ISION
    //             <br />
    //             <span className="text-6xl text-red-600">I</span>NTO{" "}
    //             <span className="text-6xl text-red-600">A</span>N{" "}
    //             <span className="text-6xl text-red-600">E</span>PIC{" "}
    //             <span className="text-6xl text-red-600">C</span>REATION
    //           </h1>
    //         </div>

    //         <div>
    //           <br />
    //           <p className="line-clamp-3 text-lg font-medium text-gray-300 ">
    //             We understand the expectations of gamers of today, thus creating
    //             games that involve the latest trends of technology and expertise
    //             including Metaverse/NFT/Blockchain
    //           </p>
    //           <br />
    //           <br />
    //           <ul className="list-disc pl-5 ">
    //             <li className="text-lg font-medium text-gray-300">
    //               Game Development
    //             </li>
    //             <li className="text-lg font-medium text-gray-300">
    //               Blockchain Development
    //             </li>
    //             <li className="text-lg font-medium text-gray-300">
    //               NFT Marketplace
    //             </li>
    //             <li className="text-lg font-medium text-gray-300">
    //               Metaverse Development
    //             </li>
    //           </ul>
    //           <br />
    //           <br />
    //           <div className="flex flex-row gap-5">
    //             <Link
    //               href={"/contact"}
    //               className="bg-red-900 flex items-center text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
    //             >
    //               Get Started
    //               <span className="ml-2">
    //                 <FontAwesomeIcon icon={faArrowRight} className="size-5" />
    //               </span>
    //             </Link>
    //             <Link
    //               href={"/contact"}
    //               className="bg-red-900 flex items-center text-white font-bold py-3 px-6 rounded-lg hover:bg-red-800 transition-colors duration-300"
    //             >
    //               Get Started
    //               <span className="ml-2">
    //                 <FontAwesomeIcon icon={faArrowRight} className="size-5" />
    //               </span>
    //             </Link>
    //             <Link
    //               href={"/contact"}
    //               className="bg-red-900 flex items-center text-white font-bold py-3 px-6 rounded-lg hover:bg-red-800 transition-colors duration-300"
    //             >
    //               Get Started
    //               <span className="ml-2">
    //                 <FontAwesomeIcon icon={faArrowRight} className="size-5" />
    //               </span>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-black">
    //       <Katana3D />
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto px-14 py-6 min-h-screen flex items-center justify-between gap-8">
      {/* Left Section - Text Content */}
      <div className="w-1/2">
        <h1 className="text-4xl font-serif font-bold leading-snug">
          <span className="text-6xl text-red-600">T</span>RANS
          <span className="text-red-600 text-6xl">F</span>
          <span>ORMING </span>
          <span className="text-6xl text-red-600">Y</span>OUR{" "}
          <span className="text-6xl text-red-600">V</span>ISION
          <br />
          <span className="text-6xl text-red-600">I</span>NTO{" "}
          <span className="text-6xl text-red-600">A</span>N{" "}
          <span className="text-6xl text-red-600">E</span>PIC{" "}
          <span className="text-6xl text-red-600">C</span>REATION
        </h1>

        <br />
        <p className="text-lg font-medium text-gray-300">
          We understand the expectations of gamers of today, thus creating games
          that involve the latest trends of technology and expertise including
          Metaverse/NFT/Blockchain
        </p>

        <br />
        <ul className="list-disc pl-5 text-lg font-medium text-gray-300 space-y-1">
          <li>Game Development</li>
          <li>Blockchain Development</li>
          <li>NFT Marketplace</li>
          <li>Metaverse Development</li>
        </ul>

        <br />
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="bg-red-900 flex items-center text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Get Started
            <span className="ml-2">
              <FontAwesomeIcon icon={faArrowRight} className="size-5" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="bg-red-900 flex items-center text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Get Started
            <span className="ml-2">
              <FontAwesomeIcon icon={faArrowRight} className="size-5" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="bg-red-900 flex items-center text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Get Started
            <span className="ml-2">
              <FontAwesomeIcon icon={faArrowRight} className="size-5" />
            </span>
          </Link>
        </div>
      </div>

      {/* Right Section - Katana3D */}
      <div className="w-1/2 p-3 flex justify-center items-center">
        <Katana3D />
      </div>
    </div>
  );
}

export default Hero;
