import React from 'react'

const Prin = () => {
  return (
    <div>
      <section className="py-16 px-6 text-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-10">Pricing</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Free Plan</h3>
          <p className="my-4">Basic features</p>
          <button className="bg-green-500 px-4 py-2 rounded">
            Choose
          </button>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Pro Plan</h3>
          <p className="my-4">All premium features</p>
          <button className="bg-yellow-500 px-4 py-2 rounded">
            Choose
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Prin
