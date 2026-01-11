import React from "react"

function About() {
  return (
    <div className="py-28 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-400 mb-12 max-w-3xl">
          I am a motivated and detail-oriented aspiring Full Stack Developer with a strong
          interest in building modern web applications. I enjoy learning new technologies
          and creating clean, user-friendly solutions with understandable code.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Skills</h3>
            <p className="text-gray-400">
              HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express, MongoDB,
              Git, GitHub
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <p className="text-gray-400">
              Self-learning through online courses and project-based practice,
              focusing on modern web development.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Experience</h3>
            <p className="text-gray-400">
              Built multiple frontend and full-stack projects, worked on UI improvements,
              backend integration, and feature enhancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
