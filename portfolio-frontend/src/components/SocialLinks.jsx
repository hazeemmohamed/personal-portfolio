import React from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function SocialLinks() {
  return (
    <div className="flex gap-6 text-2xl text-gray-400">
     <a href="https://www.linkedin.com/in/mohamed-hazeem1" target="_blank"> <FaLinkedin className="hover:text-cyan-400 cursor-pointer" /></a>
      <a href="https://github.com/hazeemmohamed" target="_blank"><FaGithub className="hover:text-cyan-400 cursor-pointer" /></a>
      <a href="mailto:mhmmdhazeem9@gmail.com" aria-label="Email"><FaEnvelope className="hover:text-cyan-400 cursor-pointer" /></a>
    </div>
  )
}

export default SocialLinks
