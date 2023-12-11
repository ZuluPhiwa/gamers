import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {

  const [nav, setNav] = useState(false);

  const HandleNav =()=> 
  {
      setNav (!nav);
      if(!setNav)
      {
        document.body.style.overflow = 'hidden'
      }
      else
      {
        document.body.style.overflow = 'scroll'
      }
  }
  const closeMenu =()=> setNav(false);
  return (
    <div>
        

        <div className=' hidden md:flex shadow-md py-4 justify-between'>
      <Link to='/gamers/'><a className='px-4 font-bold text-base'>GamersHut</a></Link>  
        <ul className='flex  space-x-4 font-bold text-base'>
         <Link to='/gamers/'><li>Home</li></Link>   
          <Link to='/gamers/about'><li>About</li></Link>  
          <Link to='/gamers/contact'><li className='pr-4'>Contact</li></Link>  
        </ul>
        <h1 className=' bg-slate-600 uppercase text-xs text-white font-bold rounded-full p-2 mr-4'>
        Sign In  
    </h1>
        </div>
  
        <div onClick={HandleNav} className='block  md:hidden '>
              { nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={ 25}/>}
              
            </div>
            <div className={nav ? 'fixed h-full left-0 top-0 bg-[#000300] uppercase border-r w-[65%] border-r-gray-900 ease-in-out duration-500' : "fixed left-[-100%]"}>
            <h1 className=' text-white mt-8 mx-6 font-bold font-krinkesregular text-3xl'>
       Gamer's hut
        </h1>
            <ul className=' pt-24 font-bold text-white'>
                <li className='mx-6 pb-4'> <Link to="/gamers/" onClick={closeMenu}>Home</Link> </li>
                <li className='mx-6 pb-4'><Link to="/gamers/about" onClick={closeMenu}>About</Link> </li>
                <li className='mx-6 pb-4'><Link to="/gamers/contact" onClick={closeMenu}>Contact</Link> </li>
                
            </ul> 
            </div>
    </div>
  )
}

export default Navbar