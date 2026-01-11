import ProjectCard from "../components/ProjectCart"
import React from "react"
import projects from "../data/Projects"

function Projects() {
  return (
    <section id="projects" className="py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
