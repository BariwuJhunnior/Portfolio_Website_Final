import React from "react";
import { Github, ExternalLink, PlayCircle, Code, Settings } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.98 }}
      className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-100 shadow-xl"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <div className="aspect-video w-gull bg-slate-800 overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-100 transition-transform duration-500 px-4 py-4 absolute inset-0"
            loading="lazy"
          />
        </div>

        {project.is_deployed && (
          <span className="absolute top-3 right-3 bg-blue-400 text-slate-900 text-[10px] font-bold px-2 mt-1 ml-1 rounded-tr-full py-1  uppercase tracking-wider">
            Deployed
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white  transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Tag */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech_stack.map((text, index) => (
            <span
              key={index}
              className="text-[10px] bg-slate-700 text-slate-300 px-2 py-1 rounded"
            >
              {text}
            </span>
          ))}
        </div>

        {/* Action Buttons (Conditional Logic) */}
        <div className="flex items-center gap-4">
          <a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-xs font-medium"
          >
            <Github size={18} />
            GitHub Repo
          </a>

          {/* Only show Deployed Link if it exists */}
          {project.deployed_url && (
            <a
              href={project.deployed_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-xs font-medium"
            >
              <ExternalLink size={18} /> Visit Site
            </a>
          )}

          {/* Only show Video Icon if it exists */}
          {project.demo_video_url && (
            <a
              href={project.demo_video_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-xs font-medium"
            >
              <PlayCircle size={18} /> Watch Demo
            </a>
          )}

          {!project.deployed_url && (
            <span className="ml-auto flex items-center gap-1 text-[10px] text-slate-500 uppercase italic">
              <Code size={12} /> Code Only
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
