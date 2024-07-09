import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from "react-icons/fa";

const ButtonGrupo = () => {
  return (
    <div className="container mx-auto px-4 relative flex justify-center mt-20">
      <Image src="/luz.png" width={399} height={329} alt="" className="absolute -z-10 inset-0 m-auto" quality={100} />
      <Link 
        href="/" 
        className="flex items-center justify-center gap-5 px-8 py-3 rounded-full text-white text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#65AF36] to-[#17B121] transition-transform duration-300 hover:scale-105 focus:outline-none"
      >
        Grupo do Whatsapp
        <FaWhatsapp className="w-10 h-10" />
      </Link>
    </div>
  )
}

export default ButtonGrupo

