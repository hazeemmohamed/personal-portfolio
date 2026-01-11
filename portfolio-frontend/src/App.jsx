import React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />

      {/* Toasts */}
      <ToastContainer position="top-right" theme="dark" />
    </>
  )
}

export default App
