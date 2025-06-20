import React from 'react'
import { FaSquareInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-7 p-6 border-t
     border-gray-200">
      <h1 className='font-extrabold text-2xl cursor-pointer order-3 md:order-1'>
        WENA AFFLIATE
      </h1>

      <p className='text-[#5d6b6b] text-sm order-2 md:order-2 text-center'>
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