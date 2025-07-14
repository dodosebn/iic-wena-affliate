'use client'; 

import Main from '@/app/components/main';
import { FaAngleRight } from 'react-icons/fa6';

import NavBar from '@/app/components/navBar';
import CircleIcon from '@/app/ultils/circle';
import TransitionLink from '@/app/ultils/transitionLink';
import Footer from '@/app/components/footer';





export default function Clothing() {
  const currentPage = 1;

  return (
    <>
    <div className='md:block hidden'>
                        <NavBar />

     <div className="px-8 py-5 mx-auto">
          <h1 className="font-bold text-[24px] text-center md:text-left cursor-pointer">
            CLOTHING
          </h1>

     
        </div>
              <Main />


      <div className="flex justify-center items-center gap-2 py-4">
        <CircleIcon
          content={1}
          bgColor={currentPage === 1 ? 'bg-black' : 'bg-white'}
          textColor={currentPage === 1 ? 'text-white' : 'text-gray-800'}
        />
        <TransitionLink href='/category/clothing/page/2'>
        <CircleIcon
          content={2}
          bgColor={'bg-white'}
          textColor={'text-gray-800'}
        />
        </TransitionLink>
                <TransitionLink href='/category/clothing/page/2'>

        <CircleIcon content={<FaAngleRight />} />
                </TransitionLink>

      </div>
                <Footer />

    </div>

    {/* mobile */}
     <div className='md:hidden block'>
                        <NavBar />

     <div className="px-8 py-5 mx-auto">
          <h1 className="font-bold text-[24px] text-center md:text-left cursor-pointer">
            CLOTHING
          </h1>

     
        </div>
              <Main />


      <div className="flex justify-center items-center gap-2 py-4">
        <CircleIcon
          content={1}
          bgColor={currentPage === 1 ? 'bg-black' : 'bg-white'}
          textColor={currentPage === 1 ? 'text-white' : 'text-gray-800'}
        />
        <TransitionLink href='/category/clothing/page/2'>
        <CircleIcon
          content={2}
          bgColor={'bg-white'}
          textColor={'text-gray-800'}
        />
        </TransitionLink>
                <TransitionLink href='/category/clothing/page/2'>

        <CircleIcon content={<FaAngleRight />} />
                </TransitionLink>

      </div>
                <Footer />

    </div>
    </>
  );
}
