'use client';

import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Logo from '@/public/images/affiliate-title.jpg';
import TransitionLink from '../ultils/transitionLink';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleMobileClick = () => setIsMenuOpen(false);

  const navElem = [
    { id: 1, name: 'CLOTHING', path: '/category/clothing' },
    { id: 2, name: 'PRODUCTS', path: '/category/products' },
    { id: 3, name: 'FOODS', path: '/category/food' },
    { id: 4, name: 'TRAVEL', path: '/category/travel' },
    { id: 5, name: 'SERVICES', path: '/category/service' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    setIsMounted(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

 const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.7 },
  },
};


  const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.4 },
  },
};

  return (
    <div className={`sticky top-0 z-40 bg-white ${isMounted ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
      <nav className="flex items-center justify-between py-4 px-6">
        {/* Mobile Menu Button & Logo */}
        <div className="flex md:hidden items-center mx-auto gap-2">
          <Link href={'/'}><Image src={Logo} alt="Logo" className="scale-75" /> </Link>
           <button onClick={() => setIsMenuOpen(true)} 
             className="text-3xl text-gray-700 cursor-pointer rotate-90
                   block md:absolute md:right-5 md:top-1/2 md:-translate-y-1/2">
            <FiMenu />
          </button>
        </div>

        {/* Desktop Logo */}
        <div className="hidden md:flex flex-1 justify-start">
          <Image
            src={Logo}
            alt="Logo"
            className={`mx-auto md:mx-0 pl-5 md:pl-0 scale-75 md:scale-0 md:transform-gpu md:transition-all md:duration-500 ease-in-out
              ${scrolled ? "md:scale-50 md:-translate-x-[5rem]" : "md:scale-75 md:translate-x-[-2rem]"}`}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-14">
            {navElem.map((item) => (
              <li key={item.id}>
                <TransitionLink href={item.path}>
                  <span className={`hover:text-[#A1ACAF] text-[12px] font-[600] cursor-pointer transition-transform duration-200 ease-out
                    ${scrolled ? "transform -translate-y-1" : ""}`}>
                    {item.name}
                  </span>
                </TransitionLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block flex-1" />
      </nav>

      {/* Divider Line */}
      <hr className="w-full h-[0.055px] bg-[#454545] border-none transition-all duration-700 ease-out" />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white
             flex items-center justify-center z-50 p-4"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {/* <div className="flex justify-end"> */}
              <button
                className="absolute top-5 right-5 
                text-2xl cursor-pointer z-50"

               onClick={() => setIsMenuOpen(false)} >
                <FiX />
              </button>
            {/* </div> */}

            {/* <motion.div
              className="mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            > */}
              <motion.ul
               className="w-full text-xl absolute 
       sm:text-3xl space-y-5
       font-light text-center"
         variants={containerVariant}
                initial="hidden"
                animate="visible"
                exit="hidden">
                {navElem.map((item) => (
                  <React.Fragment key={item.id}>
                    <motion.li
                      variants={itemVariant}
                      className="text-md"
                    >
                      <Link
                        href={item.path}
                        onClick={handleMobileClick}
                        className="block py-2 text-sm hover:text-[#A1ACAF] font-semibold"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                    <motion.div
                      variants={itemVariant}
                      className="border-t border-gray-200 w-full"
                    />
                  </React.Fragment>
                ))}
              </motion.ul>
            </motion.div>
        //   </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
