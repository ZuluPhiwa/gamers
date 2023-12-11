
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Policy from './components/Policy'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import { Link, Outlet } from "react-router-dom";

function App() {


  return (
    <>
    <Navbar/>
    <Home/>

     <Footer/>
     <Outlet/>
    </>
  )
}

export default App
