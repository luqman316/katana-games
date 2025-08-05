import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="">
        {/*  header */}
        <div className="bg-red-900 shadow-2xl border-b-black border-b-2 fixed top-0 left-0 w-full z-50">
          <div className="container mx-auto px-14 py-6">
            <div className="flex items-center justify-between">
              {/* * 1st div */}
              <div className="flex items-center gap-14">
                <div className="">
                  <Link href="/" className="flex items-center gap-2">
                    {/* ! Logo and Image */}
                    <Image
                      src="/header/logo.jpg"
                      alt="logo"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <h1 className="text-3xl font-bold  text-gray-100">
                      Katana Games
                    </h1>
                  </Link>
                </div>
                {/*  links */}
                <div className="">
                  <ul className="flex items-center gap-6 mt-2">
                    <li className="relative">
                      <a
                        href="#"
                        className="transition-colors duration-300 font-bold  hover:text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                      >
                        About
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="transition-colors duration-300 font-bold  hover:text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                      >
                        Service
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="transition-colors duration-300 font-bold  hover:text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                      >
                        Technologies
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="transition-colors duration-300 font-bold  hover:text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                      >
                        Clients
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="transition-colors duration-300 font-bold  hover:text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* * 2nd div */}
              <div className="bg-black h-10 flex items-center justify-center text-white font-bold rounded-lg">
                <Link
                  href={"/contact"}
                  className="p-10 hover:underline hover:text-blue-500 hover:underline-offset-4"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
