import { useState } from "react"
import SocialLinks from "../components/SocialLinks"
import React from "react"
import { toast } from "react-toastify"


function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const submitHandler = async () => {
    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
    toast.success("Message sent successfully 🚀")

  }

  return (
    <div className="py-28 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="text-gray-400 mb-8">
            Let’s build something together.
          </p>
          <SocialLinks />
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl">
          <input
            className="w-full p-3 mb-4 bg-slate-900 rounded"
            placeholder="Name"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="w-full p-3 mb-4 bg-slate-900 rounded"
            placeholder="Email"
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            className="w-full p-3 mb-4 bg-slate-900 rounded"
            placeholder="Message"
            onChange={e => setForm({ ...form, message: e.target.value })}
          />
          <button
            onClick={submitHandler}
            className="w-full bg-cyan-500 text-black py-3 rounded-xl"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
