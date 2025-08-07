// import ProjectsGames from "./Pro";

// function Games() {
//   return (
//     <div className="">
//       <div className="container mx-auto px-14 py-6 flex flex-col items-start ">
//         <div>
//           {/* 1st div */}
//           <div>
//             <h1 className="text-4xl font-bold mb-4 hover:cursor-pointer hover:animate-pulse">
//               <span className="text-6xl text-red-600">O</span>UR{" "}
//               <span className="text-6xl text-red-600">P</span>ROJECT
//             </h1>
//           </div>
//           {/* 2nd */}
//         </div>
//         <ProjectsGames />
//       </div>
//     </div>
//   );
// }

// export default Games;


import ProjectsGames from "./Pro";

function Games() {
  return (
    <div className="w-full  text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-14 py-6 flex flex-col items-start">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 hover:cursor-pointer hover:animate-pulse">
          <span className="text-5xl sm:text-6xl text-red-600">O</span>UR{" "}
          <span className="text-5xl sm:text-6xl text-red-600">P</span>ROJECT
        </h1>

        {/* Projects Section */}
        <ProjectsGames />
      </div>
    </div>
  );
}

export default Games;
