import React from 'react'

const Card = ({id,title,description}) => {
    return (
      
            <div
                id={id}
                className="bg-gray-900 text-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl hover:scale-105 transition transform"
            >
                <h2 className="text-xl font-bold text-red-500 mb-2">{title}</h2>
                <p className="text-gray-400">{description}</p>
            </div>
      
    )
}

export default Card
