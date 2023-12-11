import React from 'react'
import {FaWhatsapp,FaFacebook,FaYoutube} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div >
       
     <div className='items-center mt-20 p-8'>

            <ul className=' justify-center mx-auto flex'>
              <a href="http://wa.me/26876274147" target="_blank" rel="noopener noreferrer"><li className='mx-4'><FaWhatsapp size={30}/></li></a>  
                <li className='mx-4'><FaFacebook size={30}/></li>
               <a href="http://www.YouTube.com/@gamersztv100" target="_blank" rel="noopener noreferrer"><li className='mx-4'><FaYoutube size={30}/></li></a> 
            </ul>
     </div>
 <hr className=' border-black' />

 <div className=' items-center uppercase'>
    <ul className='grid md:flex justify-center'>
    <Link to='/gamers/about'><li className='m-4'>About</li> </Link>
    <Link to='/gamers/contact'><li className='m-4'>Contact</li></Link>
    <Link to='/gamers/gallery'>   <li className='m-4'>Gallery</li> </Link>
    <Link to='/gamers/policy'>   <li className='m-4'>Privacy Policy</li> </Link>
    </ul>
 </div>

    <p className='text-center pb-4'>
       &copy; {new Date().getFullYear()} Gamershut Eswatini
    </p>
    </div>
  )
}

export default Footer