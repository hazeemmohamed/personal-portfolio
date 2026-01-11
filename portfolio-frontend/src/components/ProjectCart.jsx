import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function ProjectCard({ project }) {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500 transition-all hover:-translate-y-1">
      
      <h3 className="text-2xl font-semibold text-white mb-3">
        {project.title}
      </h3>

      <p className="text-gray-400 text-sm mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-slate-800 px-3 py-1 rounded-full text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-5">
        <a
          href={project.github}
          target="_blank"
          className="flex items-center gap-2 text-gray-300 hover:text-white"
        >
          <FaGithub size={18} /> Code
        </a>

        <a
          href={project.live}
          target="_blank"
          className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
        >
          <FaExternalLinkAlt size={16} /> Live
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
