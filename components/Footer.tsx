import React from 'react';
import Image from 'next/image';

import { FaLocationArrow } from "react-icons/fa";


const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-black pt-8 mt-8 item-center">
    <div className='flex flex-col items-center'>
        <h2 className='heading text-base text-white'>
            Let&apos;s Chat!
        </h2>
        <p className="py-10 text-center text-white">I hope you liked my App, please drop me a line below to get in touch</p>
        <a href="mailto:dowdodds@gmail.com">
            <button
                className=" bg-orange text-white w-15% whitespace-nowrap flex text-center justify-center item-center"
            >
                Contact Me <FaLocationArrow  className='ml-2'/>
            </button>
        </a>
    </div>
    <div className="flex mt-4 md:flex-row flex-1 justify-between items-center p-4">
        <p className=" text-white font-light text-xs">Copyright © 2024 Dow Dodds</p>
        <div className="flex items-center md:gap-3 gap-6"
        >
            
                <div className='w-10 h-10 cursor-pointer flex justify-center 
                items-center backdrop-filter backdrop-blur-lg 
                saturate-180 bg-opacity-75 rounded-lg 
                border border-black hover:cursor-pointer hover:opacity-80'>
                <a href="https://github.com/Dow-Dodds">
                    <Image src="/git.svg" 
                    alt="github"
                    width={20}
                    height={20} 
                                 
                    />
                </a>
                </div>
                <div className='w-10 h-10 cursor-pointer flex justify-center 
                items-center backdrop-filter backdrop-blur-lg 
                saturate-180 bg-opacity-75 rounded-lg 
                border border-black hover:cursor-pointer hover:opacity-80'>
                <a href="https://www.linkedin.com/in/dowdodds/">
                    <Image src="/link.svg" 
                    alt="linked in"
                    width={20}
                    height={20}  
                                   
                    />
                </a>
                </div>
        
        </div>
    </div>
</footer>
  )
}

export default Footer