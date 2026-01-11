import SocialLinks from "./SocialLinks"
import React from "react"


function Footer() {
  return (
    <footer className="bg-black text-gray-500 py-8 text-center">
      <p>© 2026 Your Name</p>
      <div className="mt-4 flex justify-center">
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
