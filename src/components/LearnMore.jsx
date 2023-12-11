import React from 'react'
import { FaPlayCircle,FaArrowsAltV,FaMoneyBill } from "react-icons/fa";
import Tournament from '../assets/banner5.png'
const LearnMore = () => {
  return (
    <div className='mt-12'>
        
 
        
        <div>
        <h1 className=' text-center font-poppinss font-extrabold uppercase justify-center mx-auto mb-8 text-xl sm:text-4xl'>
            How it works
        </h1>

        <div className='grid sm:flex sm:grid-cols-3 gap-2   justify-center'>

                <div className=' bg-gray-200 rounded-md p-4   shadow-md w-full h-full sm:w-[20%] sm:h-[50%] '>

                <p className=' text-center p-3'>
                        Step 1
                    </p>
                <FaArrowsAltV className=' justify-center text-blue-400  mx-auto' size={35} /> 
                    <p className=' text-center font-bold p-3 text-lg'>
                        Join a match
                    </p>

                </div>
                <div className=' bg-gray-200 rounded-md p-4  shadow-md w-full h-full sm:w-[20%]'>
                <p className=' text-center p-3 '>
                        Step 2
                    </p>
                       <FaPlayCircle className=' justify-center text-blue-400 mx-auto' size={35} /> 
                    <p className=' text-center font-bold p-3 text-lg'>
                        Play your match
                    </p>

                </div>
                <div className=' bg-gray-200 rounded-md p-4 shadow-md w-full h-full sm:w-[20%]'>
                <p className=' text-center p-3'>
                        Step 3
                    </p>
                        <FaMoneyBill className=' justify-center text-blue-400 mx-auto' size={35} />
                    <p className=' text-center font-bold p-3 text-lg'>
                        Get paid instantly
                    </p>

                </div>
        </div>
        <h1 className=' font-poppinss font-extrabold uppercase text-xl p-4 ml-8 mt-8'>
            Weekly tournaments
        </h1>

        <div className=' grid sm:grid-cols-2 sm:flex gap-2 mx-4 md:mx-8'>


            <img src={Tournament} alt="tournament poster" className='w-full sm:w-[55%] relative  object-fill p-4  rounded-5xl' />
            <p className='p-0 sm:p-4 text-justify font-poppins   tracking-wide'>
            Unleash your inner football legend whether you're a seasoned FIFA veteran or a newcomer to the virtual football scene, our FC24 tournaments are open to all skill levels. So, grab your controllers, gather your teammates, and get ready to immerse yourselves in the 
            electrifying world of EA Sports FC24. Experience the Thrill of Competition immerse yourself in the heart-pounding matches, strategize with your teammate, and feel the adrenaline rush as your navigate the virtual pitches. Our tournaments are designed to provide you 
            with an exhilirating and unforgettable gaming experience. Amazing prizes await. Elevate your gaming experience with the chance to win some truly remarkable prizes. 
            <br /> <br />
           <b>Date: Every Saturday</b>  <br />
            <b>Venue: Gamershut game room</b>  <br />
           <b>Registration fee: E50</b>  <br />
           <b>Prizes: Exciting prizes for the top players</b> 

                </p>

        </div>
        </div>
    
   
    </div>
  )
}

export default LearnMore