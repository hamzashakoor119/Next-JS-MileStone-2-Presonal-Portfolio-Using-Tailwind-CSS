import Link from 'next/link';
import React from 'react';
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-center items-center'>
            <ul className='flex gap-10 lg:gap-16'>
              <li className="menuLink relative transition-transform duration-200 hover:-translate-y-0.5 hover:text-blue-400">
                <Link href="#hero">Home</Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="menuLink relative transition-transform duration-200 hover:-translate-y-0.5 hover:text-blue-400">
                <Link href="#about">About</Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </li>
              <li className="menuLink relative transition-transform duration-200 hover:-translate-y-0.5 hover:text-blue-400">
                <Link href="#projects">Projects</Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </li>
              <li className="menuLink relative transition-transform duration-200 hover:-translate-y-0.5 hover:text-blue-400">
                <Link href="#skills">Skills</Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </li>
              <li className="menuLink relative transition-transform duration-200 hover:-translate-y-0.5 hover:text-blue-400">
                <Link href="#contact">Contact</Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </li>
            </ul>
            <button className='md:hidden'>
                <FiMenu size={30} />
            </button>
        </div>
    </div>
  );
};

export default Navbar;
