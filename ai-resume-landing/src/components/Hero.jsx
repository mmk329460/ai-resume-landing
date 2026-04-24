import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">
        Build Your Resume in Seconds with AI
      </h1>
      <p className="text-lg mb-6">
        Create professional resumes instantly using AI-powered tools
      </p>
     <button
         onClick={() => {
         document.getElementById("features").scrollIntoView({ behavior: "smooth" });
         }}
        className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
      >
       Get Started
      </button>
    </section>
    </div>
  )
}

export default Hero
