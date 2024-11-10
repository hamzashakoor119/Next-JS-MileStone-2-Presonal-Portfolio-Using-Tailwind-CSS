import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsTelephoneOutbound } from "react-icons/bs";
import Link from 'next/link';

const Contect = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl'>Get In Touch</h2>
          <p className='text-gray-400 text-[18px] pt-2'>
          You can reach out to me for expertise in web development,
          including front-end, back-end, and full-stack solutions.
          I also offer services for software development, utilizing cutting-edge
          technologies to build efficient and innovative solutions.

          </p>
          <div className='flex gap-3 items-center text-white cursor-pointer'>
            <IoIosMail size={30} /> hamzashakoor119@gmail.com
          </div>

          <div className='flex gap-3 items-center text-white cursor-pointer'>
            <BsTelephoneOutbound size={30} /> +923052334794
          </div>
        </div>


        <div className='space-y-8'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name :</label>
            <input type="text" id='name' placeholder="Type Your Full Name" className='h-[40px] bg-transparent pl-2 border border-accent' />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email :</label>
            <input type="text" id='email' placeholder='Type Your Phone No' className='h-[40px] bg-transparent pl-2 border border-accent' />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="msg">Message :</label>
            <textarea
              placeholder='Type Msg For Me' className='bg-transparent pl-2 border border-accent'
              id='msg' rows={8}>
            </textarea>
          </div>
          <button 
          className='relative transition-transform duration-200 hover:-translate-y-0.5 bg-blue-500 hover:bg-blue-800 text-white w-[55px] rounded font-serif'>Send</button>
        </div>

      </div>
    </div>
  )
}

export default Contect