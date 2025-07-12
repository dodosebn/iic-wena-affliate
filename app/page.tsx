import React from 'react';
import Image from 'next/image';
import bgImg from '@/public/images/backgroundBg.png';
import TransitionLink from './ultils/transitionLink';

const Page = () => {
  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1 
    }}>
      <Image
        src={bgImg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      
      <section className="fixed top-0 left-0 bottom-0 w-full h-full flex justify-center px-5 
                          md:justify-end md:pr-10 md:pt-10 overflow-y-auto">
        <div className="w-full max-w-[30rem] flex flex-col mb-auto mt-4 md:mt-8">
          <div className='p-6 bg-[#f9f9f9]/90'>
            <div>
              <h1 className='font-bold lg:text-[52px] text-[48px] lg:tracking-[0.8em] tracking-[0.4em]'>BREEZY</h1>
            </div>
            <div className='flex text-center mx-auto md:text-start'>
              <h2 className='text-[#A1ACAF] font-semibold tracking-[1em] text-md lg:text-lg'>COLLECTION</h2>
            </div>
            <div className='mt-[1rem]'>
              <p className='text-[#454545] text-[13px] md:max-w-md leading-[1.4rem] md:leading-[1.8rem]'>
                <span className='text-[#454545] font-bold'>Lorem Ipsum </span>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but a
              </p>
              <p className='text-[#454545] text-[13px] mt-[0.6rem] md:max-w-md leading-[1.4rem] md:leading-[1.8rem]'>
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five centuries, but a
              </p>
              <p className='text-[#454545] text-[13px] mt-[0.6rem] md:max-w-md leading-[1.4rem] md:leading-[1.8rem]'>
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but a
              </p>
              <p className='text-[#454545] text-[13px] mt-[0.6rem] md:max-w-md leading-[1.4rem] md:leading-[1.8rem]'>
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but a ever since the 1500s, when an unknown 
              </p>
            </div>
          </div>
          <div className='py-4 flex justify-start'>
            <TransitionLink href='/category/clothing'>
            <button className='text-[13px] text-[#fff] bg-[rgb(7,7,7)]
                           hover:bg-[#f9f9f9]/90 hover:text-[#070707] py-4 px-14 font-semibold'>
              ENTER
            </button>
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;