import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../constants/projectsData";
import categoryData from "../constants/categoryData";

function ProjectGrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("All");

  useEffect(() => {
    const fetchData = () => {
      try {
        setProjects(projectsData);
        setCategories(categoryData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //Logic to filter projects based on the button clicked
  const filteredProjects =
    selectCategory === "All"
      ? projects
      : projects.filter((project) => project.category_name === selectCategory);

  if (loading)
    return <div className="text-white text-center py-20">Loading...</div>;

  //Framer Motion Variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-10">
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectCategory("All")}
            className={`px-6 py-2 rounded-full transition-all ${
              selectCategory === "All"
                ? "bg-blue-500 text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectCategory(category.name)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectCategory === category.name
                  ? "bg-blue-500 text-white"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid Display */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-slate-500 py-10">
            No projects found in this category yet!
          </div>
        )}
      </section>
    </>
  );
}

export default ProjectGrid;
