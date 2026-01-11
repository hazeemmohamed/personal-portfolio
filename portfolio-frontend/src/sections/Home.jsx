import SocialLinks from "../components/SocialLinks"
import React from "react"

function Home() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-cyan-400">Your Name</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Python Developer · Full Stack Learner · QA Enthusiast
          </p>

          <div className="mt-8 flex gap-4">
            <a className="px-6 py-3 bg-cyan-500 text-black rounded-xl font-semibold hover:scale-105 transition">
              Download CV
            </a>
            <a className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-white hover:text-black transition">
              View Projects
            </a>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="absolute -inset-1 bg-cyan-500 blur opacity-30 rounded-2xl"></div>
          <img
            src="https://via.placeholder.com/380"
            className="relative rounded-2xl shadow-2xl"
            alt="profile"
          />
        </div>

      </div>
    </section>
  )
}

export default Home
