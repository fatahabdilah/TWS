import React from 'react';

const IconBeginnerHeader = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 1193 574" fill="none" className="shrink-0">
    <g clipPath="url(#clip0_header)">
      <g opacity="0.05">
        <path d="M674.594 9.87341H958.279L511.312 563.579H227.627L674.594 9.87341Z" fill="white"></path>
      </g>
      <rect x="8.48392" y="2.07864" width="1175.22" height="569.297" rx="284.649" stroke="url(#paint1_header)" strokeWidth="5.03034"></rect>
      <path d="M252.893 134.768H316.783L366.322 328.755H367.248V134.768H412.619V458.852H360.303L299.19 222.271H298.264V458.852H252.893V134.768ZM450.471 134.768H589.364V181.066H501.399V266.716H571.308V313.014H501.399V412.554H589.364V458.852H450.471V134.768ZM606.625 134.768H655.7L678.386 383.849H679.312L703.387 134.768H758.944L783.018 383.849H783.944L806.63 134.768H850.613L817.742 458.852H754.314L731.165 240.327H730.239L707.09 458.852H639.496L606.625 134.768ZM880.54 269.957V134.768H931.467V269.957L924.986 373.201H887.022L880.54 269.957ZM881.466 409.776H930.541V458.852H881.466V409.776Z" fill="white"></path>
      <path d="M252.893 134.768H316.783L366.322 328.755H367.248V134.768H412.619V458.852H360.303L299.19 222.271H298.264V458.852H252.893V134.768ZM450.471 134.768H589.364V181.066H501.399V266.716H571.308V313.014H501.399V412.554H589.364V458.852H450.471V134.768ZM606.625 134.768H655.7L678.386 383.849H679.312L703.387 134.768H758.944L783.018 383.849H783.944L806.63 134.768H850.613L817.742 458.852H754.314L731.165 240.327H730.239L707.09 458.852H639.496L606.625 134.768ZM880.54 269.957V134.768H931.467V269.957L924.986 373.201H887.022L880.54 269.957ZM881.466 409.776H930.541V458.852H881.466V409.776Z" fill="url(#paint2_header)" fillOpacity="0.7"></path>
    </g>
    <defs>
      <linearGradient id="paint1_header" x1="596.095" y1="-0.436523" x2="596.095" y2="573.891" gradientUnits="userSpaceOnUse"><stop stopColor="#FCFDED"></stop><stop offset="0.670961" stopColor="#FFEBB4"></stop></linearGradient>
      <linearGradient id="paint2_header" x1="251.751" y1="71.1045" x2="995.675" y2="214.093" gradientUnits="userSpaceOnUse"><stop stopColor="#B5AF6E"></stop><stop offset="0.255" stopColor="#FFF9BA"></stop><stop offset="0.54" stopColor="#B5AF6E"></stop><stop offset="0.785" stopColor="#FFF9BA"></stop><stop offset="1" stopColor="#B5AF6E"></stop></linearGradient>
      <clipPath id="clip0_header"><rect width="1192.19" height="573.458" fill="white"></rect></clipPath>
    </defs>
  </svg>
);

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-40 py-6 px-[8%] flex justify-between items-center bg-transparent">
      {/* Logo Area */}
      <div className="flex items-center w-[40%]">
        <a href="https://tradewithsuli.com/">
          <img 
            src="https://tradewithsuli.com/wp-content/uploads/2025/04/tws-logo.webp" 
            alt="TWS Logo" 
            className="h-[32px] md:h-[38px] object-contain" 
          />
        </a>
      </div>

      {/* Navigation Links Area */}
      <nav className="hidden lg:flex items-center justify-end gap-6 w-[60%]">
        <a 
          href="https://tradewithsuli.com/beginner-trading-guide/" 
          className="flex items-center gap-2 text-[16px] font-normal text-white hover:text-gray-400 transition-colors"
        >
          <IconBeginnerHeader />
          Beginner Trading Guide
        </a>
        <a 
          href="http://tradewithsuli.com/free-modul" 
          className="text-[16px] font-normal text-white hover:text-gray-400 transition-colors"
        >
          Free Module
        </a>
        <a 
          href="https://tradewithsuli.com/login" 
          className="text-[16px] font-normal text-white hover:text-gray-400 transition-colors"
        >
          Login
        </a>
        <a 
          href="https://tradewithsuli.com/sign-up" 
          className="brand-button !py-2.5 !px-10 !text-[16px] !rounded-lg"
        >
          Sign Up
        </a>
      </nav>

      {/* Mobile Menu Icon (Placeholder) */}
      <button className="lg:hidden text-white p-2">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;