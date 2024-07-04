import React from 'react'
import Link from 'next/link'

const ButtonGrupo = () => {
  return (
    <div className="container mx-auto px-4 relative flex justify-center mt-20">
      <img src="../../luz.png" alt="" className="absolute -z-10 inset-0 m-auto" />
      <Link 
        href="https://t.me/your_telegram_group" 
        className="flex items-center justify-center gap-5 px-8 py-3 rounded-full text-white text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#65AF36] to-[#17B121] transition-transform duration-300 hover:scale-105 focus:outline-none"
      >
        Grupo do Telegram
        <img src="../../telegram.svg" alt="Telegram Icon" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>
      </Link>
    </div>
  )
}

export default ButtonGrupo
