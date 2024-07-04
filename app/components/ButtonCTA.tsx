import Link from 'next/link';

const ButtonCTA = () => (
  <div className="mt-20">
    <Link 
      href="/grupo" 
      className="block backdrop-blur-3xl border text-sm border-white rounded-full p-2 text-center w-[80%] max-w-[250px] mx-auto transition-transform duration-300 hover:scale-105 focus:outline-none sm:w-[250px]"
    >
      Participe do nosso grupo <span className="text-[#17B121] font-semibold">grátis!</span>
    </Link>
  </div>
);

export default ButtonCTA;
