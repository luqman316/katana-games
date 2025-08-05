import Image from "next/image";

function About() {
  return (
    <div className="container mx-auto px-14 py-6 mt-24 min-h-screen flex justify-center items-center">
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
    </div>
  );
}

export default About;
