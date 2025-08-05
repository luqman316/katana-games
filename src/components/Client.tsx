"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const client = [
  { image: "/client/1.png" },
  { image: "/client/2.png" },
  { image: "/client/3.png" },
  { image: "/client/4.png" },
  { image: "/client/5.png" },
  { image: "/client/6.png" },
  { image: "/client/7.png" },
  { image: "/client/8.png" },
];

function Client() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-14 py-6 flex mt-24 items-center">
        <div>
          {/* 1st div */}
          <div>
            <h1 className="text-4xl font-bold mb-4 hover:cursor-pointer hover:animate-pulse  uppercase">
              <span className="text-6xl text-red-600">O</span>ur{" "}
              <span className="text-6xl text-red-600">C</span>lients
            </h1>
          </div>
          {/* 2nd div */}
          <div className="mt-10 flex flex-col items-center justify-center">
            <p className="text-lg text-gray-300 mb-6">
              We have had the privilege of working with some of the most
              innovative and forward-thinking companies in the industry. Here
              are some of our esteemed clients.
            </p>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-2 mt-14 lg:grid-cols-4 gap-x-4 sm:gap-x-8  sm:gap-y-10">
            {client.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-2 gap-10 hover:bg-red-900 hover:rounded-lg hover:shadow-2xl sm:p-4"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                }}
              >
                <Image
                  src={item.image}
                  alt={`Client ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain h-14  sm:h-20 w-auto max-w-[120px] sm:max-w-[140px] max-h-[60px] sm:max-h-[80px] transition-all duration-300"
                  priority
                />
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
