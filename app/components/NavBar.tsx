'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent py-4 backdrop-blur-3xl">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={1000} height={1000} className="w-10 h-10 md:w-12 md:h-12" quality={100} />
          </Link>
        </div>
        <div className="hidden md:flex gap-10">
          <Link href="/" className="text-white font-medium hover:text-[#17B121] transition-colors duration-300 pl-20">Home</Link>
          <Link href="/" className="text-white font-medium hover:text-[#17B121] transition-colors duration-300">Grupos</Link>
          <Link href="/" className="text-white font-medium hover:text-[#17B121] transition-colors duration-300">Sobre</Link>
        </div>
        <div className="hidden md:block">
          <Link href="/" className="bg-gradient-to-r from-[#65AF36] to-[#17B121] text-white px-4 py-2 rounded-lg font-medium">Contate-nos</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <IoClose className="w-8 h-8" />
            ) : (
              <IoMenu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden pt-4 md:pt-0">
          <Link href="/" className="block text-white px-4 py-2 font-medium hover:text-[#17B121] transition-colors duration-300">Home</Link>
          <Link href="/" className="block text-white px-4 py-2 font-medium hover:text-[#17B121] transition-colors duration-300">Grupos</Link>
          <Link href="/" className="block text-white px-4 py-2 font-medium hover:text-[#17B121] transition-colors duration-300">Sobre</Link>
          <Link href="/" className="block bg-gradient-to-r from-[#65AF36] to-[#17B121] text-white px-4 py-2 rounded mt-2 font-medium">Contate-nos</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
