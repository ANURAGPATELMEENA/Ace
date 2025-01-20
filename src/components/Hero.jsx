import React from 'react'

const Hero = () => {
    return (
       
            <div className="bg-cover bg-center text-center text-white py-16 px-8" style={{ backgroundImage: `url('https://via.placeholder.com/1500x800')` }}>
                <h1 className="text-4xl font-bold mb-4">Innovate. Learn. Lead.</h1>
                <p className="text-lg max-w-xl mx-auto">
                    Your one-stop platform to build startups, master cutting-edge technologies, and learn Data Structures and Algorithms.
                </p>
                <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-700 transition">
                    Get Started
                </button>
            </div>
       
    )
}

export default Hero
