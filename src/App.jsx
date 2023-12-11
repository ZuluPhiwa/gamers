
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Policy from './components/Policy'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import { useLocation, Routes, Route } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
    <Navbar/>
    <Routes location={location} key={location.pathname}>
                <Route path='/home' element= {<Home/>}/>
                <Route path="/about" element={ <About/>}/>
                <Route path="/gallery" element={ <Gallery/>}/>
                <Route path="/contact" element={ <Contact/>}/>
                <Route path="/privacy" element={ <Policy/>}/>
      </Routes>
    
     <Footer/>
     
    </>
  )
}

export default App
