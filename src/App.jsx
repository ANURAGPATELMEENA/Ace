import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Footer from './components/Footer'



function App() {
  

  return (
    <div className='bg-gray-700'>
    <Header />
    <Hero />
    <Sections />
    <Footer />
  </div>
  )
}

export default App
