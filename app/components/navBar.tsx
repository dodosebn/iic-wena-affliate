'use client';
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Logo from '@/public/images/affiliate-title.jpg';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navElem = [
        { id: 1, name: 'CLOTHING' },
        { id: 2, name: 'PRODUCTS' },
        { id: 3, name: 'FOODS' },
        { id: 4, name: 'TRAVEL' },
        { id: 5, name: 'SERVICES' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <div className="sticky top-0 z-40 bg-white">
            <nav className="flex items-center justify-between py-5 px-7">
                {/* Mobile menu button (left) */}
                <button 
                    className="md:hidden text-2xl"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <FiMenu />
                </button>

                {/* Logo - centered on mobile, normal on desktop */}
                <div className={`${isMenuOpen ? 'hidden' : 'block'} flex-1 text-center md:text-left md:flex-none`}>
                    <div className={`md:relative`}>
                        <Image
                            src={Logo}
                            alt="he is a great God"
                            className={`
                                mx-auto md:mx-0 pl-5 md:pl-0 scale-75 md:scale-0
                                md:transform-gpu  md:transition-all md:duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                                ${scrolled ? "md:scale-50 md:-translate-x-[5rem]" : "md:scale-75 md:translate-x-[-2rem]"}
                            `}
                        />
                    </div>
                </div>

                <div className="hidden md:flex md:flex-1 md:justify-center">
                    <ul className='flex items-center gap-8'>
                        {navElem.map((item) => (
                            <li key={item.id} className='hover:text-[#A1ACAF] text-[13px] font-semibold cursor-pointer'>{item.name}</li>
                        ))}
                    </ul>
                </div>

                <div className="md:hidden w-8"></div>
            </nav>
            
            <hr className='w-full border border-[#454545]' />

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
                                        <a href="#" className="block py-2 
                                        text-sm hover:text-[#A1ACAF] font-semibold cursor-pointer">
                                            {item.name}
                                        </a>
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