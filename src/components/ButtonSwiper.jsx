import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { SliderData } from "./whyUs";
const ButtonSwiper = () => {
  return (
    <div className='mx-auto'>
        <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000}}
        loop={true}
        className="w-1/6 h-24"
      >
        {SliderData.map((data, index) => (
          <SwiperSlide key={index}>
         
            
           {/* <img src={images.data} width={250} className=" object-cover rounded-lg shadow-lg" /> */}
            <button className="bg-blue-500 text-white font-bold py-2 px-4 w-fit rounded hover:bg-blue-700">{data.data} </button>
             
          </SwiperSlide>
        ))}
        
      </Swiper>
 
    </div>
  )
}

export default ButtonSwiper
