import './App.css'
import Nav from './Components/Navbar/Nav'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import ProjectSection from './Components/Project/ProjectContainer'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Hero/Hero'

function App() {
 

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills /> 
      <ProjectSection />
      <Contact />
    </>
  )
}

export default App
