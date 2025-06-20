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
      
      <section className="fixed top-0 left-0 bottom-0 w-full h-full flex justify-center px-5 pt-10
                          md:justify-end md:pr-10 md:pt-10 overflow-y-auto">
        <div className="w-full max-w-[30rem] flex flex-col mb-auto mt-10">
          <div className='p-7 bg-[#f9f9f9]'>
            <div>
              <h1 className='font-bold text-[52px] lg:tracking-[0.8em] tracking-[0.4em]'>BREEZY</h1>
            </div>
            <div>
              <h2 className='text-[#A1ACAF] font-semibold tracking-[1em] text-lg'>COLLECTION</h2>
            </div>
            <div className='mt-[1rem]'>
              <p className='text-[#454545] text-[13px] max-w-sm leading-[1.8rem]'>
                <span className='text-[#454545] font-bold'>Lorem Ipsum </span>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but a
              </p>
              <p className='text-[#454545] text-[13px] mt-[1rem] max-w-sm leading-[1.8rem]'>
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five centuries, but a
              </p>
              <p className='text-[#454545] text-[13px] mt-[1rem] max-w-sm leading-[1.8rem]'>
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but a
              </p>
              <p className='text-[#454545] text-[13px] mt-[1rem] max-w-sm leading-[1.8rem]'>
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but a ever since the 1500s, when an unknown 
              </p>
            </div>
          </div>
          <div className='py-4 flex justify-start'>
            <TransitionLink href='/page1'>
            <button className='text-[13px] text-[#fff] bg-[rgb(7,7,7)]
                           hover:bg-[#fff] hover:text-[#070707] py-4 px-14 font-semibold'>
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