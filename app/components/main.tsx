import React from 'react'
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { FaArrowRightLong } from "react-icons/fa6";

import AFFLIATE_ITEMS from './data/affliateItems';
const Main = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {AFFLIATE_ITEMS.map((item) => (
          <div key={item.id} className='border border-[#333] aspect-square flex flex-col p-4'>
            <div className="relative w-full h-1/2">
              <Image 
                src={item.img} 
                alt='ohms'
                fill
                className="object-cover"
              />
            </div>
            <div className='flex flex-col flex-grow justify-between'>
              <div>
                <h1 className="text-xl font-bold mt-2">{item.title}</h1>
                <p className="mt-2">{item.decrib}</p>
              </div>
              <button className="bg-[#333333] text-white px-6 py-1 font-bold hover:bg-[#fff] hover:text-[#333] border hover:border-[#333] whitespace-nowrap transition-transform duration-300 ease-in-out hover:shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.9 mt-4 self-start">
                SHOP NOW <FaArrowRightLong className="inline ml-1" />
              </button>    
            </div>
          </div>
        ))}
    </main>
  )
}
export default Main;