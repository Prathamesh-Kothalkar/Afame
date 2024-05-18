
import './App.css'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Skills from './Component/Skills'
import Project from './Component/Projects'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

function App() {
 

  return (
    <>
    <SpeedInsights/>
      <Navbar/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
     <Analytics/>
     
    </>
  )
}

export default App
