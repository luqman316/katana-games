"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="">
        {/* header */}
        <div className="bg-red-900 shadow-2xl border-b-black border-b-2 fixed top-0 left-0 w-full z-50">
          <div className="container mx-auto px-6 sm:px-8 md:px-14 py-4">
            <div className="flex items-center justify-between">
              {/* 1st div */}
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/header/logo.jpg"
                    alt="logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-100">
                    Katana Games
                  </h1>
                </Link>

                {/* Mobile menu button */}
                <button
                  className="md:hidden text-black focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />

                    )}
                  </svg>
                </button>
                {/* Links */}
                <div
                  className={`${
                    isOpen ? "block" : "hidden"
                  } md:flex md:items-center md:gap-6 md:ml-14`}
                >
                  <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mt-4 md:mt-2">
                    {[
                      { href: "/games", label: "Games" },
                      { href: "#about", label: "About" },
                      { href: "#service", label: "Service" },
                      { href: "#technologies", label: "Technologies" },
                      { href: "#client", label: "Clients" },
                      { href: "#reviews", label: "Reviews" },
                    ].map((item, index) => (
                      <li className="relative" key={index}>
                        <Link
                          href={item.href}
                          className="text-white transition-colors duration-300 hover:text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 2nd div - Contact Button */}
              <div className="hidden md:flex bg-black h-10 items-center justify-center text-white font-bold rounded-lg">
                <Link
                  href="/contact"
                  className="px-6 hover:underline hover:text-blue-500 hover:underline-offset-4"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact button on mobile */}
            {isOpen && (
              <div className="mt-4 md:hidden">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-black text-white py-2 rounded-lg font-semibold hover:underline hover:text-blue-500"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
