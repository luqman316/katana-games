"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { projects } from "@/data/projects";
import Autoplay from "embla-carousel-autoplay";
import ProjectLayout1 from "./ProjectLayout";
import { ProjectGridSkeleton } from "./ProjectSkeleton";

type ProjectsProps = {
  limit?: number;
};

function ProjectsGame({ limit }: ProjectsProps) {
  const [isLoading, setIsLoading] = useState(true);
  const projectList = limit ? projects.slice(0, limit) : projects;

  const autoplayPlugin = Autoplay({ delay: 4000 });

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-6 text-white">
        <ProjectGridSkeleton count={limit || 4} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 py-6  text-white"
    >
      <Carousel plugins={[autoplayPlugin]} className="relative">
        <CarouselContent className="flex gap-4">
          {projectList.map((project, index) => (
            <CarouselItem
              key={project.slug}
              className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Link href={`/projects/${project.slug}`}>
                <ProjectLayout1
                  image={
                    Array.isArray(project.image)
                      ? project.image[0]
                      : project.image
                  }
                  title={project.title}
                  description={project.description}
                  direction={index % 2 === 0 ? "left" : "right"}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>

      {/* Optional: More projects link */}
      <div className="mt-6 text-center">
        <Link href="/games">
          <p className="text-sm md:text-base animate-bounce text-gray-400">
            For more projects, click here
          </p>
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectsGame;
