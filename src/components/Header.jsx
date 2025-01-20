import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="bg-gray-800 shadow-md p-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-red-500">Ace of Spades</div>
                <nav className="flex gap-4">
                    <a href="#startups" className="text-white hover:text-red-500 transition">
                        Startups
                    </a>
                    <a href="#dsa" className="text-white hover:text-red-500 transition">
                        Learn DSA
                    </a>
                    <a href="#tech" className="text-white hover:text-red-500 transition">
                        Tech Development
                    </a>
                    <a href="#contact" className="text-white hover:text-red-500 transition">
                        Contact
                    </a>
                </nav>
            </header>
        </div>
    )
}

export default Header
