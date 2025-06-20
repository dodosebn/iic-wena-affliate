'use client'; 

import Main from '@/app/components/main';
import CircleIcon from './ultils/circle';
import { FaAngleRight } from 'react-icons/fa6';
import TransitionLink from './ultils/transitionLink';
import { useState } from 'react';
import CategorySelect from './ultils/filtering';

const navElem = [
  { id: 1, name: 'CLOTHING' },
  { id: 2, name: 'PRODUCTS' },
  { id: 3, name: 'FOODS' },
  { id: 4, name: 'TRAVEL' },
  { id: 5, name: 'SERVICES' },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('TRAVEL');
  const currentPage = 1;

  return (
    <div>
     <div className="p-4  max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="font-bold text-2xl text-center md:text-left cursor-pointer">
            {selectedCategory}
          </h1>

          <CategorySelect
            navElem={navElem}
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>
        </div>
              <Main />


      <div className="flex justify-center items-center gap-2 py-4">
        <CircleIcon
          content={1}
          bgColor={currentPage === 1 ? 'bg-black' : 'bg-white'}
          textColor={currentPage === 1 ? 'text-white' : 'text-gray-800'}
        />
        <TransitionLink href='/page2'>
        <CircleIcon
          content={2}
          bgColor={'bg-white'}
          textColor={'text-gray-800'}
        />
        </TransitionLink>
                <TransitionLink href='/page2'>

        <CircleIcon content={<FaAngleRight />} />
                </TransitionLink>

      </div>

    </div>
  );
}
