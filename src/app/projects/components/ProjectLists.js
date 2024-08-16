"use client";
import ProjectCard from "./ProjectCards";
import DashedDivider from "@/app/commons/components/elements/DashedDivider";
import SectionHeading from "@/app/commons/components/elements/SectionHeading";
import SectionSubHeading from "@/app/commons/components/elements/SectionSubHeading";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { PROJECTSLISTS } from "@/app/commons/constants/ProjectsLists";

const LazyprojectCard = dynamic(() => import("./ProjectCards"));

export default function ProjectsLists() {
  const filteredProjects = PROJECTSLISTS.filter((project) => project?.is_show);

  if (filteredProjects.length === 0) {
    return <SectionHeading title={"No Projects Found"} />;
  }

  return (
    <div className="">
      <div className="space-y-6">
        <div className="space-y-2">
          <SectionHeading title="Projects" />
          <SectionSubHeading>
            <p className="dark:text-neutral-400">
              Showcasing my passion for technology, design, and problem-solving
              through code.
            </p>
          </SectionSubHeading>
        </div>
        <DashedDivider />
        <div className="grid sm:grid-cols-2  justify-center gap-5 mb-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard
                is_featured={project.is_featured}
                Index={index}
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                tech_stack={project.tech_stack}
                slug={project.slug}
                link_demo={project.link_demo}
                link_github={project.link_github}
                tooltip={project.tooltip}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
