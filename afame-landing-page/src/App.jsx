import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import ServiceCard from './Component/ServiceCard'
import Service from './Component/Service'
import Client from './Component/Client'
import Footer from './Component/Footer'

function App() {
 

  return (
    <>
      <Navbar/>
      <Hero/>
      <Service/>
      <Client/>
      <Footer/>
    </>
  )
}

export default App
