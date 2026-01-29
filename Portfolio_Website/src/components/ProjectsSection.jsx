import React from "react";
import ProjectGrid from "./ProjectGrid";

function ProjectsSection() {
  return (
    <>
      <section id="projects" className="py-5 bgslate900/50">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Projects
        </h2>
        <ProjectGrid />
      </section>
    </>
  );
}

export default ProjectsSection;
