import React from 'react'
import { FaSquareInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import Image from 'next/image';
import Logo from '@/public/images/affiliate-title.jpg';
const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-7 p-6 border-t
     border-gray-200">
      <h1 className='cursor-pointer order-3 md:order-1'>
        <Image src={Logo} alt='ohmss' className='scale-75' />
      </h1>

      <p className='text-[13px] text-[#454545] order-2 md:order-2 text-center'>
        © 2025 A THE WENA PROJECT company. All Rights Reserved.
      </p>

      <div className="flex gap-4 order-1 md:order-3">
        <div className='border-[#d3d3d3] border-1 p-3'>
        <FaSquareInstagram className="text-xl hover:text-[#333] transition-colors" />
        </div>
                <div className='border-[#d3d3d3] border-1 p-3'>

        <FaXTwitter className="text-xl hover:text-[#333] transition-colors" />
        </div>
                        <div className='border-[#d3d3d3] border-1 p-3'>

        <FaTiktok className="text-xl hover:text-[#333] transition-colors" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;