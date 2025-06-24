'use client';
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Logo from '@/public/images/affiliate-title.jpg';
import TransitionLink from '../ultils/transitionLink';
import Link from 'next/link';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const handleMobileClick = () => {
        setIsMenuOpen(false);
    };

    const navElem = [
        { id: 1, name: 'CLOTHING', path: '/category/clothing' },
        { id: 2, name: 'PRODUCTS', path: '/category/products' },
        { id: 3, name: 'FOODS', path: '/category/food' },
        { id: 4, name: 'TRAVEL', path: '/category/travel' },
        { id: 5, name: 'SERVICES', path: '/category/service' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        setIsMounted(true); // Set mounted to true when component mounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <div className={`sticky top-0 z-40 bg-white ${isMounted ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
            <nav className="flex items-center justify-between py-4 px-6">
                <div className="flex md:hidden items-center mx-auto gap-2">
                    <button 
                        className="text-2xl"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <FiMenu />
                    </button>
                    <Image
                        src={Logo}
                        alt="he is a great God"
                        className="scale-75"
                    />
                </div>

                <div className="hidden md:flex flex-1 justify-start">
                    <Image
                        src={Logo}
                        alt="he is a great God"
                        className={`
                            mx-auto md:mx-0 pl-5 md:pl-0 scale-75 md:scale-0
                            md:transform-gpu md:transition-all md:duration-500 ease-in-out
                            ${scrolled ? "md:scale-50 md:-translate-x-[5rem]" : "md:scale-75 md:translate-x-[-2rem]"}
                        `}
                    />
                </div>

                <div className="hidden md:flex flex-1 justify-center">
                    <ul className="flex items-center gap-14">
                        {navElem.map((item) => (
                            <div key={item.id}>
                                <TransitionLink href={item.path}>
                                    <li
                                        className={`
                                            hover:text-[#A1ACAF] text-[12px] font-[600] cursor-pointer
                                            transition-transform duration-200 ease-out
                                            ${scrolled ? "transform -translate-y-1" : ""}
                                        `}
                                    >
                                        {item.name}
                                    </li>
                                </TransitionLink>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:block flex-1" />
            </nav>

<hr
  className={`
    w-full h-[0.055px] bg-[#454545]  
    border-none
    transition-all duration-700 ease-out
  `}
/>



            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-50 p-4">
                    <div className="flex justify-end">
                        <button 
                            className="text-2xl p-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FiX />
                        </button>
                    </div>

                    <div className="mt-8">
                        <ul className="space-y-6">
                            {navElem.map((item) => (
                                <React.Fragment key={item.id}>
                                    <li className="text-md cursor-pointer">
                                        <Link
                                            href={item.path}
                                            onClick={handleMobileClick}
                                            className="block py-2 text-sm hover:text-[#A1ACAF] font-semibold cursor-pointer"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                    <div className="border-t border-gray-200 w-full"></div>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;