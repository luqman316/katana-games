"use client";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectLayout from "./ProjectLayout";

// projects are now imported from @/data/projects
type ProjectsProps = {
  limit?: number;
};

function Projects({ limit }: ProjectsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-2 sm:px-4 py-6 sm:py-8 text-white"
    >
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-2 font-extrabold underline underline-offset-8 tracking-tight text-gray-100">
        Projects
      </h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-8">
        {(limit ? projects.slice(0, limit) : projects.slice(0, 8)).map(
          (project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block"
            >
              <ProjectLayout
                image={Array.isArray(project.image) ? project.image[0] : project.image}
                title={project.title}
                description={project.description}
                direction={index % 2 === 0 ? "left" : "right"}
              />
            </Link>
          )
        )}
      </div>
      <div className="mt-4 text-center">
        <Link href={"/work"}>
          <p className="text-xs sm:text-sm md:text-base  animate-bounce text-gray-400 mt-6">
            For more projects, click here
          </p>
        </Link>
      </div>
    </motion.div>
  );
}

export default Projects;
