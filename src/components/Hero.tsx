import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/portfolio-pic.png)] shadow shadow-white bg-right lg:bg-[85%] bg-cover'
    style={{backgroundSize: "35%", backgroundPosition: "right 100px top 100px"}} >

        <Navbar />
        <div className='container grid lg:grid-col-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>

          <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'></div>

          <div className='ml-[100px] mt-[-300px]'>
            <p className='font-serif text-[25px]'>Hi I AM <span className='text-sky-400'>Hamza Shakoor</span></p>
            <p className='text-sky-400 font-bold text-[50px]'>Web Developer .</p>
            <p className='text-sky-400 font-bold text-[50px]'>Software Engineer .</p><br />
            <p className='w-[35%] font-serif text-left'>Hello! I am a Full Stack Web Developer,
              Software and Generative Al Engineer, and Data Analyst. I am passionate about
              creating innovative solutions and seeking an environment where I can showcase my talent.</p>
          </div>
          
        </div>

    </div>
  )

}
export default Hero