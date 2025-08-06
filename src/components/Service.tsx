import Image from "next/image";

const services = [
  {
    title: "Game Development",
    description:
      "Creating immersive gameplay, logic, and mechanics using engines like Unity or Unreal.",
    color: "bg-[#D33738]",
    image: "/service/1.webp",
  },
  {
    title: "Art",
    description:
      "Designing game assets, characters, environments, and visual FX for an engaging experience.",
    color: "bg-[#F2AE1D]",
    image: "/service/2.webp",
  },
  {
    title: "Server Development",
    description:
      "Building and maintaining scalable game servers, APIs, and real-time multiplayer logic.",
    color: "bg-[#2DB366]",
    image: "/service/3.webp",
  },
  {
    title: "Quality Assurance",
    description:
      "Testing gameplay, performance, bugs, and ensuring overall game stability.",
    color: "bg-[#095AB3]",
    image: "/service/4.webp",
  },
];

function Service() {
  return (
    <div className=" flex items-center ">
      <div className="container mx-auto px-14 py-6  ">
        <div>
          {/* 1st div */}
          <div>
            <h1 className="text-4xl font-bold mb-4 hover:cursor-pointer hover:animate-pulse">
              <span className="text-6xl text-red-600">O</span>UR{" "}
              <span className="text-6xl text-red-600">S</span>ERVICES
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              We offer a wide range of services to help you achieve your goals.
              From mobile app development to game design, we have the expertise
              to bring your ideas to life.
            </p>
          </div>
          {/* 2nd div */}
          <div className="mt-24">
            <div className="flex  h-[700px] overflow-hidden rounded-3xl">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative w-1/4 flex flex-col justify-between items-center ${service.color} hover:${service.color} transition-all duration-300 hover:w-[90%]`}
                >
                  <div className="p-6 text-white text-2xl font-bold">
                    {service.title}
                  </div>

                  {/* Hover Info */}
                  <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 ">
                    <p className="text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="pb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
