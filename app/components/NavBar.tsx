'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent p-4 backdrop-blur-3xl">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <img src="../../logo.svg" alt="Logo" className="w-10 h-10" />
          </Link>
        </div>
        <div className="hidden md:flex gap-10">
          <Link href="/" className="text-white font-medium hover:text-[#17B121] transition-colors duration-300 pl-20">Home</Link>
          <Link href="/grupos" className="text-white font-medium hover:text-[#17B121] transition-colors duration-300">Grupos</Link>
          <Link href="/sobre" className="text-white font-medium hover:text-[#17B121] transition-colors duration-300">Sobre</Link>
        </div>
        <div className="hidden md:block">
          <Link href="/contate-nos" className="bg-gradient-to-r from-[#65AF36] to-[#17B121] text-white px-4 py-2 rounded-lg font-medium">Contate-nos</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden pt-4 md:pt-0">
          <Link href="/" className="block text-white px-4 py-2 font-medium hover:text-[#17B121] transition-colors duration-300">Home</Link>
          <Link href="/grupos" className="block text-white px-4 py-2 font-medium hover:text-[#17B121] transition-colors duration-300">Grupos</Link>
          <Link href="/sobre" className="block text-white px-4 py-2 font-medium hover:text-[#17B121] transition-colors duration-300">Sobre</Link>
          <Link href="/contate-nos" className="block bg-gradient-to-r from-[#65AF36] to-[#17B121] text-white px-4 py-2 rounded mt-2 font-medium">Contate-nos</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
