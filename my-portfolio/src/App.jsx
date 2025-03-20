import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/about/About'
import Skills from './pages/skills/Skills'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {

  return (

    <Router>
      <div>
        <Header />
        <h1>Meu portfólio</h1>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  )
}

export default App
