import SocialLinks from "../components/SocialLinks"
import React from "react"

function Hero() {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-5xl font-extrabold">
            Hi, I’m <span className="text-cyan-400">Mohamed Hazeem</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            Frontend Developer · Full stack Learner · React · Node.js 
          </p>

          <div className="mt-8 flex gap-4">
            <a href="/HazeemResume.pdf" download className="px-6 py-3 bg-cyan-500 text-black rounded-xl font-semibold">
              Download CV
            </a>
            <a href="#projects" className="px-6 py-3 border border-gray-600 rounded-xl">
              View Projects
            </a>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        {/* <img
          src="https://via.placeholder.com/380"
          className="rounded-2xl shadow-2xl"
          alt="profile"
        /> */}
      </div>
    </div>
  )
}

export default Hero
