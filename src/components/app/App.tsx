import Header from '../header/Header'
import About from '../about/About'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

import './index.css'


function App() {

  return (
    <main style={{

      marginTop:'5em',
      position: 'relative'
    
    }}>
     <Header />
     <About />
     <Projects />
     <Skills />
     <Contact />
     <Footer />
    </main>
  )
}

export default App
