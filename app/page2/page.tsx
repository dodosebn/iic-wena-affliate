'use client';

import { useState } from 'react';
import Main from '@/app/components/main';
import { FaAngleLeft } from 'react-icons/fa6';
import CircleIcon from '../ultils/circle';
import TransitionLink from '../ultils/transitionLink';
import CategorySelect from '../ultils/filtering';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

const navElem = [
  { id: 1, name: 'CLOTHING' },
  { id: 2, name: 'PRODUCTS' },
  { id: 3, name: 'FOODS' },
  { id: 4, name: 'TRAVEL' },
  { id: 5, name: 'SERVICES' },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('CLOTHING');
  const currentPage = 2;

  return (
    <div>
                <NavBar />

      <div className="p-4 max-w-[1200px] mx-auto">
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
        <TransitionLink href={'/page1'}>
          <CircleIcon content={<FaAngleLeft />} />
        </TransitionLink>

        <TransitionLink href={'/page1'}>
          <CircleIcon content={1} bgColor="bg-white" textColor="text-gray-800" />
        </TransitionLink>

        <CircleIcon
          content={2}
          bgColor={currentPage === 2 ? 'bg-black' : 'bg-white'}
          textColor={currentPage === 2 ? 'text-white' : 'text-gray-800'}
        />
      </div>
                <Footer />

    </div>
  );
}
