import React from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";

import AFFLIATE_ITEMS from './data/affliateItems';
import TransitionLink from '../ultils/transitionLink';

const Main = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {AFFLIATE_ITEMS.map((item) => (
        <div
          key={item.id}
          className="border border-[#d3d3d3] flex flex-col p-4 h-full"
        >
<div className="relative w-full aspect-[5/3]">
            <Image
              src={item.img}
              alt="ohms"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col flex-grow">
            <div>
              <TransitionLink href={item.path}><h1 className="text-xl font-bold mt-2">{item.title}</h1></TransitionLink>
              <p className="mt-2 px-2 whitespace-normal leading-relaxed text-sm text-[#5d6b6b]">
                {item.decrib}
              </p>
            </div>
               <TransitionLink href={item.path}>
            <button className="bg-[#333333] text-white px-6 py-1 font-bold hover:bg-[#fff] hover:text-[#333] border hover:border-[#333] whitespace-nowrap transition-transform duration-300 ease-in-out hover:shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.9 mt-4 self-start">
              SHOP NOW <FaArrowRightLong className="inline ml-1" />
            </button>
            </TransitionLink>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Main;
