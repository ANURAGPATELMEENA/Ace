import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// const images = [
//     "https://avatars.githubusercontent.com/u/93965871?s=96&v=4",
//   "https://aeccc.targettechnology.in/static/media/AbirPal.574a09ad7cb325853b29.jpg",
//   "https://aeccc.targettechnology.in/static/media/SoumyaBanerjee.2e2521d6029842435080.jpg",
//      "https://aeccc.targettechnology.in/static/media/SaikatMukherjee.033310703edff52d0532.jpg",
// "https://avatars.githubusercontent.com/u/93366359?v=4",
      
// ];
export const SliderData = [
     {
        name: "Priyansh Patel",
        job: "MERN Stack Developer",
        name: "Priyansh Patel",
        job: "MERN Stack Developer",
        text: "I'm a Frontend Web Developer, I mastered HTML, and CSS, and am a beginner in JavaScript, and Tailwind CSS. I can convert your design into pixel perfect frontend website. I provide well-structured, valid, adaptive, featured, clean, readable, and maintainable code.",
      src:      "https://avatars.githubusercontent.com/u/93965871?s=96&v=4",
      alt: 'Image 1',
     },
     {
        name: "Priyansh Patel",
        job: "MERN Stack Developer",
        text: "I'm a Frontend Web Developer, I mastered HTML, and CSS, and am a beginner in JavaScript, and Tailwind CSS. I can convert your design into pixel perfect frontend website. I provide well-structured, valid, adaptive, featured, clean, readable, and maintainable code.",
       src: "https://aeccc.targettechnology.in/static/media/AbirPal.574a09ad7cb325853b29.jpg",
       alt: 'Image 2',
     },
     { 
        name: "Priyansh Patel",
        job: "MERN Stack Developer",
        text: "I'm a Frontend Web Developer, I mastered HTML, and CSS, and am a beginner in JavaScript, and Tailwind CSS. I can convert your design into pixel perfect frontend website. I provide well-structured, valid, adaptive, featured, clean, readable, and maintainable code.",
       src:  "https://aeccc.targettechnology.in/static/media/SoumyaBanerjee.2e2521d6029842435080.jpg",
       alt: 'Image 3',
     },
     {
        name: "Priyansh Patel",
        job: "MERN Stack Developer",
        text: "I'm a Frontend Web Developer, I mastered HTML, and CSS, and am a beginner in JavaScript, and Tailwind CSS. I can convert your design into pixel perfect frontend website. I provide well-structured, valid, adaptive, featured, clean, readable, and maintainable code.",
       src:  "https://aeccc.targettechnology.in/static/media/SaikatMukherjee.033310703edff52d0532.jpg",
       alt: 'Image 4',
     },
     {
        name: "Priyansh Patel",
        job: "MERN Stack Developer",
        text: "I'm a Frontend Web Developer, I mastered HTML, and CSS, and am a beginner in JavaScript, and Tailwind CSS. I can convert your design into pixel perfect frontend website. I provide well-structured, valid, adaptive, featured, clean, readable, and maintainable code.",

       src:  "https://avatars.githubusercontent.com/u/93366359?v=4",
              alt: 'Image 5',
     }
    ]
const WhyUs = ({images}) => {
  return (
    <div className="w-full max-w-3xl mx-auto">

        <div>
            <h2 className="text-lg font-semibold text-slate-200 flex justify-center uppercase">Why Us ?</h2>

        </div>
        <div>
            <h2 className="text-lg font-semibold text-gray-200 sm:text-xl lg:text-2xl py-4">Our Instructor</h2>
            <p className="text-sm text-gray-300 mt-1 sm:text-base py-4">Discover brilliance in code with our expert instructors. Passionate mentors dedicated to fueling your coding journey at Ace of Spades</p>
        </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-64"
      >
        {SliderData.map((images, index) => (
          <SwiperSlide key={index}>
            <div className="flex bg-slate-900 gap-4 rounded-md">
            <img src={images.src} width={250} className=" object-cover rounded-lg shadow-lg" />
            <div className="text-center sm:text-left">
        <h2 className="text-lg font-semibold text-gray-200 sm:text-xl lg:text-2xl py-4">{images.name}</h2>
        <h3 className="text-md text-gray-500 sm:text-lg py-4">{images.job}</h3>
        <p className="text-sm text-gray-600 mt-1 sm:text-base py-4">{images.text}</p>
      </div>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WhyUs;