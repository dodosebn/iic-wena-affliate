'use client';

import { useState } from 'react';
import Main from '@/app/components/main';
import { FaAngleLeft } from 'react-icons/fa6';
import NavBar from '@/app/components/navBar';
import TransitionLink from '@/app/ultils/transitionLink';
import CircleIcon from '@/app/ultils/circle';
import Footer from '@/app/components/footer';
import { usePathname } from 'next/navigation';

export default function Home() {
  const currentPage = 2;
  const pathname = usePathname();
  const lastPathSegment = pathname.split('/').filter(Boolean).pop(); // Gets 'clothing'

  return (
    <div>
      <NavBar />

      <div className="p-4 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="font-bold text-2xl text-center md:text-left cursor-pointer uppercase">
            {lastPathSegment}
          </h1>
        </div>
      </div>

      <Main />

      <div className="flex justify-center items-center gap-2 py-4">
        <TransitionLink href={'/category/clothing'}>
          <CircleIcon content={<FaAngleLeft />} />
        </TransitionLink>

        <TransitionLink href={'/category/clothing'}>
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
