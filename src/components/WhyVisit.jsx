import React from 'react'
import Tournament from '../assets/banner8.jpg'
const WhyVisit = () => {
  return (
    <div className=' pt-6 mx-3 sm:mx-8 sm:pt-12'>
        <p className='my-8 uppercase text-right font-poppinss font-extrabold text-xl'>
          Visit Gamershut  
        </p>

        <div className='grid sm:flex sm:grid-cols-2 gap-4'>

        <p className=' text-justify'>
        Looking for a place to escape reality, challenge your friends, and have tons of fun? Look no further than Gamershut, your ultimate gaming destination!

At Gameshut, we offer a wide variety of games to cater to everyone's taste: <br /> <br />

<ul className=' list-disc ml-8'>
    <li>
    Thrill-seekers: Immerse yourself in virtual worlds with our VR headsets or test your reflexes on our high-octane racing games. 
    </li>
   
   <li>
    RPG fans: Be the protagonist of your favourite Role Playing Game and immerse yourself in the open world of GTA V, God of War and Fortnite amoungst others.
    </li>
    <li>
    Sports fans: Experience the thrill of the game on our sports simulators, whether it's football, basketball, or Wrestling. ⚾️
    </li>
  
</ul>



<br /> 
And the best part? You can start playing for as little as E10!
             </p>
      <img src={Tournament} className=' relative object-contain w-full sm:w-[50%] shadow-md ' alt="" />  
      

        </div>

    </div>
  )
}

export default WhyVisit