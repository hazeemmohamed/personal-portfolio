import React from "react"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        <h1 className="font-bold text-xl">Mohamed Hazeem</h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur px-6 pb-6 text-gray-300">
          <div className="flex flex-col gap-4 mt-4">
            <a href="#home" onClick={() => setOpen(false)} className="hover:text-cyan-400">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-cyan-400">About</a>
            <a href="#projects" onClick={() => setOpen(false)} className="hover:text-cyan-400">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
