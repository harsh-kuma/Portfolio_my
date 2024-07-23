import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Experiance from './components/Experiance'
import Footer from './components/Footer'
import Home from './components/Home'
import Navebar from './components/Navebar'
import Project from './components/Project'
function App() {
  return (
    <div>
      <Navebar/>
      <Home/>
      <About/>
      <Project/>
      <Experiance/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
