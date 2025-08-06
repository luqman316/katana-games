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
      <div className="container mx-auto px-4 py-6  flex flex-col items-center">
        <div>
          {/* Heading */}
          <div className="flex items-start">
            <h1 className="text-4xl font-bold mb-8 hover:cursor-pointer hover:animate-pulse uppercase ">
              <span className="text-6xl text-red-600">C</span>lients{" "}
              <span className="text-6xl text-red-600">R</span>eviews
            </h1>
          </div>

          {/* Carousel */}
          <Carousel
            plugins={[autoplayPlugin]}
            className="relative w-full felx justify-center max-w-7xl"
          >
            <CarouselContent className="flex gap-4 p-10">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/1 sm:basis-1/2 md:basis-1/3 justify-center flex"
                >
                  <div className="bg-transparent shadow-2xl border border-gray-500 p-14 rounded-xl text-center h-full flex flex-col justify-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">
                      {review.name}
                    </h1>
                    <p className="text-gray-300 mb-6">{review.content}</p>
                    <div className="flex justify-center gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} />
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
