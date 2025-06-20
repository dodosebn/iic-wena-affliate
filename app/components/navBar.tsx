'use client';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navElem = [
        { id: 1, name: 'CLOTHING' },
        { id: 2, name: 'PRODUCTS' },
        { id: 3, name: 'FOODS' },
        { id: 4, name: 'TRAVEL' },
        { id: 5, name: 'SERVICES' }
    ];

    return (
        <div className="relative">
            <nav className="flex items-center justify-between p-6">
                <button 
                    className="md:hidden text-2xl"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <FiMenu />
                </button>

                <div className={`${isMenuOpen ? 'hidden' : 'block'} md:block`}>
                    <h1 className='font-extrabold text-2xl  text-center md:text-left cursor-pointer'>WENA AFFLIATE</h1>
                </div>

                <div className="hidden md:flex md:flex-1 md:justify-center">
                    <ul className='flex items-center gap-8'>
                        {navElem.map((item) => (
                            <li key={item.id} className='hover:text-[#bda37a] text-sm font-semibold cursor-pointer'>{item.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="md:hidden w-8"></div>
            </nav>
            
<hr className='flex w-screen'/>

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
                                        <a href="#" className="block py-2 hover:text-[#bda37a]
                                        text-sm font-semibold cursor-pointer'">
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