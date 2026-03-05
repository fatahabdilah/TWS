import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-24 pb-16 px-6 bg-black border-t border-gray-800 text-white text-left relative z-10 font-['Neue Montreal']">
      <div className="container mx-auto max-w-[1180px]">
        {/* --- BARIS 1: LOGO, SOSMED & CONTACT (Dipertahankan dari desain sebelumnya) --- */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16 mb-16">
          {/* Kolom 1: Logo */}
          <div className="md:w-1/2 flex flex-col items-start">
            <div className="mb-6">
              <img 
                loading="lazy" 
                src="https://tradewithsuli.com/wp-content/uploads/2025/01/logo-suli-1.png" 
                className="h-10 md:h-12 w-auto object-contain" 
                alt="Logo" 
              />
            </div>
            <p className="text-[#A3A3A3] text-[16px] md:text-[18px] leading-tight">
              Komunitas dua arah untuk belajar Cryptocurrency
            </p>
          </div>

          {/* Kolom 2: Social Media */}
          <div className="md:w-1/4">
            <h4 className="text-white text-[18px] md:text-[20px] font-normal mb-6">Social Media</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/tradewithsuli/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </a>
              <a href="http://discord.gg/withsuli" target="_blank" rel="noreferrer" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 448 512"><path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path></svg>
              </a>
            </div>
          </div>

          {/* Kolom 3: Contact */}
          <div className="md:w-1/4">
            <h4 className="text-white text-[18px] md:text-[20px] font-normal mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M4.33464 4.33398H21.668C22.8596 4.33398 23.8346 5.30898 23.8346 6.50065V19.5007C23.8346 20.6923 22.8596 21.6673 21.668 21.6673H4.33464C3.14297 21.6673 2.16797 20.6923 2.16797 19.5007L2.1788 6.50065C2.1788 5.30898 3.14297 4.33398 4.33464 4.33398ZM13.0013 14.084L21.668 8.66732V6.50065L13.0013 11.9173L4.33464 6.50065V8.66732L13.0013 14.084Z" fill="white"></path></svg>
                <span className="text-[#FFFFFF] text-[16px] md:text-[20px]">admin@tradewithsuli.com</span>
              </li>
              <li className="flex items-center gap-3">
                <a href="https://wa.link/kx65m7" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <svg aria-hidden="true" className="w-5 h-5 fill-white" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                  <span className="text-[#FFFFFF] text-[16px] md:text-[20px]">0813 8543 1811</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BARIS 2: DISCLAIMER (ELEMENTOR STYLE) --- */}
        <div className="w-full flex justify-center mb-4">
          <div className="w-[82%] text-left text-[#A3A3A3] text-[10px] md:text-[14px] leading-relaxed font-normal pt-12">
            Trade With Suli adalah platform edukasi dan komunitas seputar investasi, crypto, dan makroekonomi. Kami tidak menyediakan layanan pinjaman, P2P lending, pengelolaan dana, maupun jasa keuangan berizin. Seluruh informasi yang diberikan bersifat edukasi dan bukan merupakan saran investasi personal. Kami juga tidak pernah menawarkan produk pinjaman, investasi, ataupun profit secara pribadi. Apabila ada pihak yang menghubungi Anda dan mengaku dari Trade With Suli untuk tujuan tersebut, berarti itu adalah pihak yang mengatasnamakan kami.”
          </div>
        </div>

        {/* --- BARIS 3: DIVIDER --- */}
        <div className="py-4">
          <div className="w-full border-t border-[#333333]"></div>
        </div>

        {/* --- BARIS 4: COPYRIGHT & POLICY (GRID ELEMENTOR) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="text-left text-[#A3A3A3] text-[12px] md:text-[16px] font-normal">
            PT SOLUSI FINANSIAL MEDIA ©2025 All rights reserved
          </div>
          <div className="text-right text-[#A3A3A3] text-[12px] md:text-[16px] font-normal">
            <a href="https://tradewithsuli.com/privacy-and-policy/" className="text-white hover:underline transition-all">
              Privacy and Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;