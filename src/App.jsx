
import Home from './components/Home'
import Navbar from './components/Navbar'

import Footer from './components/Footer'

import { Link, Outlet } from "react-router-dom";

function App() {


  return (
    <>
      <Navbar/>
      <Footer/>
     <Outlet/>
    </>
  )
}

export default App