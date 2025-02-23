import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ButtonSwiper from "./ButtonSwiper";


// const images = [
//     "https://avatars.githubusercontent.com/u/93965871?s=96&v=4",
//   "https://aeccc.targettechnology.in/static/media/AbirPal.574a09ad7cb325853b29.jpg",
//   "https://aeccc.targettechnology.in/static/media/SoumyaBanerjee.2e2521d6029842435080.jpg",
//      "https://aeccc.targettechnology.in/static/media/SaikatMukherjee.033310703edff52d0532.jpg",
// "https://avatars.githubusercontent.com/u/93366359?v=4",
      
// ];
export const SliderData = [
     {
      src:      "https://avatars.githubusercontent.com/u/93965871?s=96&v=4",
      alt: 'Image 1',
      data:"Mentorship"
     },
     {
       src: "https://aeccc.targettechnology.in/static/media/AbirPal.574a09ad7cb325853b29.jpg",
       alt: 'Image 2',
       data:"Best Content"
     },
     { 
       src:  "https://aeccc.targettechnology.in/static/media/SoumyaBanerjee.2e2521d6029842435080.jpg",
       alt: 'Image 3',
       data:"Practise"
     },
     {
               src:  "https://aeccc.targettechnology.in/static/media/SaikatMukherjee.033310703edff52d0532.jpg",
       alt: 'Image 4',
       data:"doubt resolution"
     },
     {
               src:  "https://aeccc.targettechnology.in/static/media/SaikatMukherjee.033310703edff52d0532.jpg",
       alt: 'Image 4',
       data:" Project Based Learning"
     },
     {
               src:  "https://aeccc.targettechnology.in/static/media/SaikatMukherjee.033310703edff52d0532.jpg",
       alt: 'Image 4',
       data:" Career Support"
     },
     {
               src:  "https://aeccc.targettechnology.in/static/media/SaikatMukherjee.033310703edff52d0532.jpg",
       alt: 'Image 4',
       data:"meetings"
     },
     {
               src:  "https://aeccc.targettechnology.in/static/media/SaikatMukherjee.033310703edff52d0532.jpg",
       alt: 'Image 4',
       data:"Have A Team"
     },
     {
               src:  "https://avatars.githubusercontent.com/u/93366359?v=4",
              alt: 'Image 5',
              data:"Startup Support"
     }
    ]
const WhyUs = ({images}) => {
  return (
 
    <div className="w-full max-w-3xl mx-auto  relative ">

        <div>
            <h2 className="text-lg font-semibold text-slate-200 flex justify-center uppercase">Why Us ?</h2>

        </div>
        <div>
            <h2 className="text-lg font-semibold text-gray-200 sm:text-xl lg:text-2xl py-4">Our Instructor</h2>
            <p className="text-sm text-gray-300 mt-1 sm:text-base py-4">Discover brilliance in code with our expert instructors. Passionate mentors dedicated to fueling your coding journey at Ace of Spades</p>
        </div>
       

      
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000}}
        loop={true}
        className="w-1/4 h-34"
        >
        {SliderData.map((images, index) => (
          <SwiperSlide key={index}>
            {/* <ImageSwiper index={index} image={images.src}/> */}
            <div className=" bg-slate-900 gap-4 rounded-md flex ">
          
           <img src={images.src} width={250} className=" object-cover rounded-lg shadow-lg" />
           
            </div> 
          </SwiperSlide>
        ))}
        
      </Swiper>
        <ButtonSwiper className="flex justify-center"/>
      
    </div>
  
  );
};

export default WhyUs;




// Mentorship
// Best Content
// Practise
// doubt resolution
// Project Based Learning
// Career Support
// meetings
// Have A Team
// Startup Support