// src/components/ImageSlider.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ImageSlider = ({ images }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative bg-zinc-200 w-1/2 mx-auto rounded-md">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        customLeftArrow={
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            &larr;
          </button>
        }
        customRightArrow={
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            &rarr;
          </button>
        }
      >
        

        
        
 {images.map((image, index) => (
    <div 
      key={index} 
      className="flex items-center space-x-4 p-4 bg-white shadow-lg rounded-lg border border-gray-200 
                 transition-all duration-300 hover:shadow-xl hover:border-gray-300"
    >
      <img 
        src={image.image} 
        alt={image.alt} 
        width={100} 
        className="object-cover rounded-full border-4 border-gray-300 sm:w-24 lg:w-28"
      />
      <div className="text-center sm:text-left">
        <h2 className="text-lg font-semibold text-gray-800 sm:text-xl lg:text-2xl">{image.name}</h2>
        <h3 className="text-md text-gray-500 sm:text-lg">{image.job}</h3>
        <p className="text-sm text-gray-600 mt-1 sm:text-base">{image.text}</p>
      </div>
    </div>
  ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
