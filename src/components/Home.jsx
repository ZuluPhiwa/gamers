import React from 'react'
import Banner from '../assets/dualsense2.png'
import LearnMore from './LearnMore'
import WhyVisit from './WhyVisit'

const Home = () => {
  return (
    <div className='  '>
    
        <div className='p-1 sm:p-4 mx-8 sm:mx-16 grid gap-0 sm:grid-cols-2'>
        <div>
            <h1 className=' mt-16 sm:mt-40 text-2xl sm:text-6xl font-poppinss uppercase  font-extrabold'>
                Keep Up With
            </h1>
            <h1 className=' mt-4  text-2xl sm:text-6xl font-poppinss uppercase font-extrabold'>
             The New Era.
            </h1>
            <p className=' text-lg pt-2 text-justify pr-3 sm:pr-6'>
            Stand a chance to win real money playing sports games.<br /> Compete in our  Head-to-Head competitions for cash prizes.
            </p>
            <button className='my-2  bg-blue-400 p-2 uppercase font-bold text-xs rounded-full'>
                Play Now
            </button>
        </div>

        <div className='mt-16'>
            <img src={Banner} alt="PS5 controller here"  className=' w-max h-max object-center '/>
        </div>

        </div>
      <LearnMore/>
        <WhyVisit/>
  
    </div>
  )
}

export default Home