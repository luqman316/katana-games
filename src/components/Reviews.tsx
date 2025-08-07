// "use client";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Autoplay from "embla-carousel-autoplay";
// const autoplayPlugin = Autoplay({ delay: 3000 });

// function Reviews() {
//   return (
//     <div className="min-h-screen">
//       <div className="container mx-auto px-14 py-6 mt-24 flex items-center">
//         <div>
//           {/* Heading */}
//           <div>
//             <h1 className="text-4xl font-bold mb-4 hover:cursor-pointer hover:animate-pulse uppercase">
//               <span className="text-6xl text-red-600">C</span>lients{" "}
//               <span className="text-6xl text-red-600">R</span>eviews
//             </h1>
//           </div>

//           {/* Carousel */}
//           <div className="mt-10 flex flex-col items-center justify-center">
//             <Carousel plugins={[autoplayPlugin]} className="cursor-pointer">
//               <CarouselContent className="flex gap-4 items-center p-10">
//                 {/* 1st */}
//                 <CarouselItem className="basis-1/3">
//                   <div className="bg-transparent shadow-2xl border border-gray-500 p-10 rounded-xl text-center">
//                     <h1 className="text-2xl font-bold text-red-600 text-shadow-red-400 ">Cross Box Games</h1>
//                     <br />
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Repellat minima libero ad odit delectus eligendi eius
//                       incidunt id quam a, officia nihil sunt nulla sit vitae
//                       accusamus recusandae. Ducimus, labore.
//                     </p>
//                     <br />
//                     <h3 className="flex justify-center items-center gap-1">
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                     </h3>
//                   </div>
//                 </CarouselItem>
//                 {/* 2nd */}
//                 <CarouselItem className="basis-1/3">
//                   <div className="bg-transparent shadow-2xl border border-gray-500 p-10 rounded-xl text-center">
//                     <h1 className="text-2xl font-bold text-red-600 text-shadow-red-400 ">Max Games Production</h1>
//                     <br />
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Repellat minima libero ad odit delectus eligendi eius
//                       incidunt id quam a, officia nihil sunt nulla sit vitae
//                       accusamus recusandae. Ducimus, labore.
//                     </p>
//                     <br />
//                     <h3 className="flex justify-center items-center gap-1">
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                     </h3>
//                   </div>
//                 </CarouselItem>
//                 {/* 3rd */}
//                 <CarouselItem className="basis-1/3">
//                   <div className="bg-transparent shadow-2xl border border-gray-500 p-10 rounded-xl text-center">
//                     <h1 className="text-2xl font-bold text-red-600 text-shadow-red-400">Frank Vidal</h1>
//                     <br />
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Repellat minima libero ad odit delectus eligendi eius
//                       incidunt id quam a, officia nihil sunt nulla sit vitae
//                       accusamus recusandae. Ducimus, labore.
//                     </p>
//                     <br />
//                     <h3 className="flex justify-center items-center gap-1">
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                     </h3>
//                   </div>
//                 </CarouselItem>
//                 {/* 4th */}
//                 <CarouselItem className="basis-1/3">
//                   <div className="bg-transparent shadow-2xl border border-gray-500 p-10 rounded-xl text-center">
//                     <h1 className="text-2xl text-red-600 text-shadow-red-400 font-bold ">Tech Tycoon Studio</h1>
//                     <br />
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Repellat minima libero ad odit delectus eligendi eius
//                       incidunt id quam a, officia nihil sunt nulla sit vitae
//                       accusamus recusandae. Ducimus, labore.
//                     </p>
//                     <br />
//                     <h3 className="flex justify-center items-center gap-1">
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                     </h3>
//                   </div>
//                 </CarouselItem>
//                 {/* 5th */}
//                 <CarouselItem className="basis-1/3">
//                   <div className="bg-transparent shadow-2xl border border-gray-500 p-10 rounded-xl text-center">
//                     <h1 className="text-2xl text-red-600 text-shadow-red-400 font-bold ">UNICEF</h1>
//                     <br />
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Repellat minima libero ad odit delectus eligendi eius
//                       incidunt id quam a, officia nihil sunt nulla sit vitae
//                       accusamus recusandae. Ducimus, labore.
//                     </p>
//                     <br />
//                     <h3 className="flex justify-center items-center gap-1">
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                     </h3>
//                   </div>
//                 </CarouselItem>
//                 {/* 6th */}
//                 <CarouselItem className="basis-1/3">
//                   <div className="bg-transparent shadow-2xl border border-gray-500 p-10 rounded-xl text-center">
//                     <h1 className="text-2xl text-red-600 text-shadow-red-400 font-bold ">GenI-Team</h1>
//                     <br />
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Repellat minima libero ad odit delectus eligendi eius
//                       incidunt id quam a, officia nihil sunt nulla sit vitae
//                       accusamus recusandae. Ducimus, labore.
//                     </p>
//                     <br />
//                     <h3 className="flex justify-center items-center gap-1">
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                       <FontAwesomeIcon
//                         icon={faStar}
//                         className="text-yellow-500"
//                       />
//                     </h3>
//                   </div>
//                 </CarouselItem>
//               </CarouselContent>
//             </Carousel>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Reviews;

"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Autoplay from "embla-carousel-autoplay";

const autoplayPlugin = Autoplay({ delay: 3000 });

function Reviews() {
  const reviews = [
    {
      name: "Cross Box Games",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima libero ad odit delectus eligendi eius incidunt id quam a.",
    },
    {
      name: "Max Games Production",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima libero ad odit delectus eligendi eius incidunt id quam a.",
    },
    {
      name: "Frank Vidal",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima libero ad odit delectus eligendi eius incidunt id quam a.",
    },
    {
      name: "Tech Tycoon Studio",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima libero ad odit delectus eligendi eius incidunt id quam a.",
    },
    {
      name: "UNICEF",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima libero ad odit delectus eligendi eius incidunt id quam a.",
    },
    {
      name: "GenI-Team",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima libero ad odit delectus eligendi eius incidunt id quam a.",
    },
  ];

  return (
    <div className="">
      <div className="container mx-auto px-3 sm:px-4 lg:px-14 py-3 sm:py-4 lg:py-6 flex flex-col items-center">
        <div className="w-full">
          {/* Heading */}
          <div className="flex items-start justify-center lg:justify-start">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 hover:cursor-pointer hover:animate-pulse uppercase text-center lg:text-left">
              <span className="text-3xl sm:text-4xl lg:text-6xl text-red-600">
                C
              </span>
              lients{" "}
              <span className="text-3xl sm:text-4xl lg:text-6xl text-red-600">
                R
              </span>
              eviews
            </h1>
          </div>

          {/* Carousel */}
          <Carousel
            plugins={[autoplayPlugin]}
            className="relative w-full flex justify-center max-w-7xl mx-auto"
          >
            <CarouselContent className="flex gap-1 sm:gap-2 lg:gap-4 p-2 sm:p-4 lg:p-10">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 justify-center flex"
                >
                  <div className="bg-transparent shadow-2xl border border-gray-500 p-4 sm:p-6 md:p-8 lg:p-14 rounded-xl text-center h-full flex flex-col justify-center min-h-[250px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px] w-full">
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-red-600 mb-2 sm:mb-3 lg:mb-4">
                      {review.name}
                    </h1>
                    <p className="text-gray-300 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm md:text-base leading-relaxed px-1">
                      {review.content}
                    </p>
                    <div className="flex justify-center gap-0.5 sm:gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className="text-xs sm:text-sm md:text-base"
                        />
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="absolute left-1 sm:left-2 lg:left-0 top-1/2 -translate-y-1/2 z-10 h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
            <CarouselNext className="absolute right-1 sm:right-2 lg:right-0 top-1/2 -translate-y-1/2 z-10 h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
