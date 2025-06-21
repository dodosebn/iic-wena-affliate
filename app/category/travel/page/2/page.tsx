// app/category/page2.tsx or app/category/page2/page.tsx (depending on your routing structure)
'use client';

import NavBar from '@/app/components/navBar';
import Footer from '@/app/components/footer';
import TransitionLink from '@/app/ultils/transitionLink';
import CircleIcon from '@/app/ultils/circle';
import { FaAngleLeft } from 'react-icons/fa6';
import AFFLIATE_ITEMS from '@/app/components/data/affliateItems';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";

const Page2 = () => {
  const currentPage = 2;
  const lastItem = AFFLIATE_ITEMS.slice(9); 

  return (
    <div>
      <NavBar />
      <div className="px-8 py-5 mx-auto">
        <h1 className="font-bold text-[24px] text-center md:text-left cursor-pointer">
          TRAVEL
        </h1>
      </div>

      <main className="grid grid-cols-1 md:grid-cols-3">
        {lastItem.map((item) => (
          <div key={item.id} className="border border-[#eaeaea] flex flex-col h-full">
            <div className="relative w-full lg:aspect-[5.5/3] aspect-5/3">
              <Image
                src={item.img}
                alt="ohms"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col flex-grow px-8 py-7">
              <div>
                <TransitionLink href={item.path}>
                  <h1 className="text-[23px] font-medium hover:text-[#dcb28a]">{item.title}</h1>
                </TransitionLink>
                <p className="pt-2 whitespace-normal leading-relaxed text-[13px] text-[#454545]">
                  {item.decrib}
                </p>
              </div>
              <div className='pt-2'>
                <TransitionLink href={item.path}>
                  <button className="bg-[#000] text-white py-3 px-4 text-[13px] font-bold hover:bg-[#fff]
                    hover:text-[#454545] border hover:border-[#454545] whitespace-nowrap transition-transform duration-300 ease-in-out hover:shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.9 mt-4 self-start">
                    SHOP NOW <FaArrowRightLong size={10} className="inline ml-1" />
                  </button>
                </TransitionLink>
              </div>
            </div>
          </div>
        ))}
      </main>

      <div className="flex justify-center items-center gap-2 py-4">
        <TransitionLink href="/category/travel">
          <CircleIcon content={<FaAngleLeft />} />
        </TransitionLink>
        <TransitionLink href="/category/travel">
          <CircleIcon
            content={1}
            bgColor={'bg-white'}
            textColor={'text-gray-800'}
          />
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
};

export default Page2;
