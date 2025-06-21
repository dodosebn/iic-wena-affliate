import React from 'react'
import { FaSquareInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import Image from 'next/image';
import Logo from '@/public/images/affiliate-title.jpg';
const Footer = () => {
  return (
   <footer className="flex items-center flex-col md:flex-row justify-between md:gap-0 gap-[3rem] px-6 py-7
    mt-6 border-t border-[#454545]">
  <div className="flex-1 flex justify-start md:order-1 order-3">
    <h1 className="cursor-pointer">
      <Image src={Logo} alt="ohmss" className="scale-75" />
    </h1>
  </div>

  <div className="flex-1 text-center order-2">
    <p className="text-[13px] text-[#454545]">
      © 2025 A THE WENA PROJECT company. All Rights Reserved.
    </p>
  </div>

  {/* Right: Social Icons */}
  <div className="flex-1 flex justify-end gap-4 order-1 md:order-3">
    <div className="border border-[#d3d3d3] p-3">
      <FaSquareInstagram className="text-xl hover:text-[#333] transition-colors" />
    </div>
    <div className="border border-[#d3d3d3] p-3">
      <FaXTwitter className="text-xl hover:text-[#333] transition-colors" />
    </div>
    <div className="border border-[#d3d3d3] p-3">
      <FaTiktok className="text-xl hover:text-[#333] transition-colors" />
    </div>
  </div>
</footer>

  )
}

export default Footer;