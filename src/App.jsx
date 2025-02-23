import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Footer from './components/Footer'

import ImageSlider from './components/ImageSlider';
import { SliderData } from './SliderData';
import WhyUs from './components/WhyUs';


function App() {
  

  return (
    <div className='bg-gray-700'>
    <Header />
    <Hero />
    <Sections />
    <div className="text-lg font-semibold text-slate-200 flex justify-center uppercase" >our team</div>
    <ImageSlider images={SliderData}/>


    <WhyUs images={SliderData}/>

    <Footer />
  </div>
  )
}

export default App
