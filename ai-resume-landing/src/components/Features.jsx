import React from 'react'

const Features = () => {
  return (
    <div>
      <section id="features" className="py-16 px-6 text-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-10">Features</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">AI Resume Builder</h3>
          <p>Create resumes instantly using AI</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">ATS Friendly</h3>
          <p>Optimized for job selection systems</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Easy Download</h3>
          <p>Download resume in PDF format</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Features
