import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer baru

// --- SVG ICONS ---
const IconWhatsapp = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" fill="none"><path fill="#fff" d="M4.868 43.303l2.694-9.835C5.9 30.59 5.026 27.324 5.027 23.979C5.032 13.514 13.548 5 24.014 5c5.079 0.002 9.845 1.979 13.43 5.566c3.584 3.588 5.558 8.356 5.556 13.428c-0.004 10.465-8.522 18.98-18.986 18.98h-.008c-3.177-.001-6.3-.798-9.073-2.311L4.868 43.303z"></path></svg>
);

const IconGabungArrow = () => (
  <svg width="24" height="24" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="21.5" cy="21.5" r="18" stroke="white" strokeWidth="3"/>
    <path d="M16 27L27 16M27 16H19M27 16V24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconDiscordStat = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 199" fill="white" className="shrink-0">
    <path d="M216.85 16.59C200.28 8.84 182.56 3.21 164.04 0c-2.27 4.11-4.93 9.64-6.76 14.04-19.69-2.96-39.2-2.96-58.53 0-1.83-4.4-4.55-9.93-6.84-14.04-18.54 3.21-36.28 8.86-52.85 16.64-33.42 50.51-42.48 99.76-37.95 148.32 22.17 16.55 43.66 26.61 64.78 33.19 5.21-7.17 9.86-14.8 13.87-22.84-7.63-2.9-14.94-6.48-21.85-10.63 1.83-1.36 3.62-2.78 5.35-4.24 42.12 19.7 87.89 19.7 129.51 0 1.75 1.46 3.54 2.88 5.36 4.24-6.93 4.17-14.26 7.75-21.89 10.65 4.01 8.02 8.64 15.67 13.87 22.84 21.14-6.58 42.64-16.64 64.81-33.19 5.31-56.29-9.08-105.09-38.05-148.36zm-131.38 118.5c-12.64 0-23.01-11.8-23.01-26.18 0-14.37 10.15-26.2 23.01-26.2s23.23 11.82 23.01 26.2c0 14.37-10.14 26.18-23.01 26.18zm85.05 0c-12.64 0-23.01-11.8-23.01-26.18 0-14.37 10.15-26.2 23.01-26.2s23.23 11.82 23.01 26.2c0 14.37-10.14 26.18-23.01 26.18z"/>
  </svg>
);

const IconArrowUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 23 23" fill="none" className="shrink-0">
    <path d="M5.85584 4.26223C8.06562 2.49239 10.683 4.74808 10.683 7.57923V7.57923C10.683 10.2237 12.8267 12.3677 15.4712 12.3677V12.3677C18.3025 12.3677 20.5578 14.9854 18.7878 17.1952C17.1018 19.3002 14.5097 20.6484 11.603 20.6484C6.52149 20.6484 2.40234 16.5292 2.40234 11.4477C2.40234 8.54086 3.75062 5.94833 5.85584 4.26223Z" fill="#2AFF3F"></path>
    <path d="M20.9491 6.47826C19.9586 4.61762 18.4286 3.08761 16.5681 2.09718C14.5522 1.02408 12.5234 2.86448 12.5234 5.14819V6.62674C12.5234 8.77887 14.2681 10.5235 16.4202 10.5235H17.898C20.182 10.5235 22.0224 8.49435 20.9491 6.47826Z" fill="#2AFF3F"></path>
  </svg>
);

const IconFileCalculator = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5.71151 5.69634C5.71151 4.12956 6.97917 2.84766 8.54595 2.84766H19.9407L28.4867 11.3937V28.4858C28.4867 30.0526 27.2048 31.3345 25.638 31.3345H8.5317C6.96493 31.3345 5.69727 30.0526 5.69727 28.4858L5.71151 5.69634ZM18.5163V4.98417H19.9407L26.3502 12.818H18.5163V4.98417Z" fill="white"></path></svg>
);

// --- KOMPONEN FAQ ITEM (ACCORDION DENGAN ANIMASI SMOOTH) ---
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#3F3F3F]">
      <button 
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none cursor-pointer transition-all duration-300"
        onClick={onClick}
      >
        <span className="text-[14px] md:text-[20px] font-medium text-white">
          {question}
        </span>
        <span className="shrink-0 ml-4">
          {isOpen ? (
            <svg aria-hidden="true" className="w-4 h-4 fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
          ) : (
            <svg aria-hidden="true" className="w-4 h-4 fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
          )}
        </span>
      </button>
      {/* Animasi smooth menggunakan max-height */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-[#DBDBDB] text-[12px] md:text-[16px] leading-relaxed pr-10">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [openFAQIndex, setOpenFAQIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqData = [
    {
      question: "Apakah investasi di crypto bisa membuat cepat kaya?",
      answer: "Tidak. Di sini, kami tidak menjanjikan kalian akan cepat kaya dalam beberapa bulan lewat crypto. Kami mengajarkan cara berinvestasi dengan benar, serta bagaimana mempertahankan dan membangun kekayaan secara berkelanjutan."
    },
    {
      question: "Apakah bisa trading crypto kalau saya sibuk?",
      answer: "Di komunitas ini, kami menyediakan beberapa opsi: short-term trading, swing trading, dan long-term investing. Jadi, semua bisa disesuaikan dengan fleksibilitas dan keunggulan masing-masing."
    },
    {
      question: "Saya tidak punya pengetahuan tentang crypto dan investasi, apakah itu masalah?",
      answer: "Tidak masalah. Kami akan mengajarkan semuanya dari nol — mulai dari dasar-dasar investasi hingga menjadi ahli di dunia crypto."
    },
    {
      question: "Saya belum berusia 18 tahun, apakah masih bisa berinvestasi?",
      answer: "Bisa, tapi kalian perlu izin dari orang tua dan menggunakan akun atas nama mereka untuk bisa berinvestasi di dunia crypto."
    },
    {
      question: "Berapa banyak trading call per hari?",
      answer: "Tidak ada jumlah pasti untuk trading call setiap minggu, karena semuanya tergantung pada momentum pasar. Jika kita memaksakan trading tanpa momentum, justru berisiko mengalami kerugian."
    },
    {
      question: "Berapa win-rate trading di Trade With Suli?",
      answer: (
        <span>
          Kalian bisa cek riwayat trading call dan win-rate kami melalui link dibawah&nbsp; 
          {/* Link Trading Recap dengan warna rgb(204, 51, 102) dan tanpa underline */}
          <a href="https://docs.google.com/spreadsheets/d/1rErx-_Vcs8CGmfYW-l-ySZAeveIEnlYi_BFBj9Oj00c/edit?gid=584600580#gid=584600580" target="_blank" rel="noreferrer" style={{ color: 'rgb(204, 51, 102)', textDecoration: 'none' }}>Trading Recap</a>
        </span>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-blue selection:text-white pb-24 relative font-['Neue Montreal'] overflow-x-hidden">
      
      <Header />

      {/* HEADER STICKY */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 px-10 md:px-24 lg:px-32 ${scrolled ? 'translate-y-0 bg-black/95 backdrop-blur-md py-4' : '-translate-y-full py-4'}`}>
        <div className="w-full flex justify-between items-center">
          <a href="https://tradewithsuli.com/">
            <img src="https://tradewithsuli.com/wp-content/uploads/2025/04/Logo-tradewithsuli-white.webp" alt="Logo White" className="h-8 md:h-[44px] object-contain" />
          </a>
          <div className="flex items-center gap-5">
             <button className="hidden md:block text-[16px] text-gray-300 hover:text-white font-semibold transition-colors">Ada Pertanyaan?</button>
             <a href="https://wa.link/kx65m7" className="flex items-center text-[16px] px-6 py-2.5 rounded-xl font-bold transition-all hover:scale-105 shadow-[0px_0px_9px_3px_rgba(255,255,255,0.2)_inset]"
                style={{ backgroundImage: 'linear-gradient(316deg, #FFFFFF 0%, #25D366 24%)' }}>
               <IconWhatsapp /> Whatsapp
             </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 text-center bg-cover bg-center bg-no-repeat overflow-hidden bg-black"
        style={{ backgroundImage: "url('https://tradewithsuli.com/wp-content/uploads/2025/11/hero-image-2-web-tradewithsuli-ver4-scaled.webp')" }}>
        <div className="container mx-auto max-w-[1140px] z-10 pt-40">
          <h1 className="text-[38px] md:text-[52px] font-semibold leading-[1.1] mb-6 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Strategi Trading dan <br className="hidden md:block" /> Investasi Crypto untuk<br />
            <span className="gradient-text font-black tracking-normal">Meningkatkan Ilmu Kamu</span>
          </h1>
          <p className="text-white/90 text-[17px] md:text-[19px] mb-8 font-medium">Gabung ke komunitas kami yang terbukti berhasil.</p>
          <div className="mb-4">
            <a href="#checkout" className="brand-button text-[18px]"><IconGabungArrow /> Gabung Sekarang</a>
          </div>
          <div className="max-w-[850px] mx-auto mb-10 pt-0 opacity-40">
            <img src="https://tradewithsuli.com/wp-content/uploads/2025/11/line.webp" alt="divider" className="w-full" />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto mb-8 fade-sides">
            <div className="flex flex-col items-end bg-[#0a0a0a]/80 rounded-2xl p-4 w-full md:w-[280px] border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-1"><IconDiscordStat /><div className="text-[17px] font-extrabold text-white">120.000+</div></div>
              <div className="text-gray-400 text-[10px] uppercase tracking-wider font-bold opacity-60 text-right pr-0.5">Orang telah bergabung</div>
            </div>
            <div className="flex flex-col items-start bg-[#0a0a0a]/80 rounded-2xl p-4 w-full md:w-[280px] border border-white/5 backdrop-blur-sm text-left">
              <div className="flex items-center gap-3 mb-1"><IconArrowUp /><div className="text-[17px] font-extrabold text-white">Portofolio +53%</div></div>
              <div className="text-gray-400 text-[10px] uppercase tracking-wider font-bold opacity-60 pl-0.5">Portofolio Terbuka Internal*</div>
            </div>
          </div>
          <p className="text-gray-600 text-[11px] uppercase tracking-widest font-medium mt-0">*Per September 2025</p>
        </div>
      </section>

      {/* TESTIMONIAL GRID */}
      <section className="py-24 bg-black text-center text-white">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-[44px] font-bold leading-tight">
              <span className="gradient-text font-black">81% Members Puas</span><br/>dengan Outlook Calls Informasi
            </h2>
            <p className="text-gray-400 mt-4 text-base text-center">Informasi, dan komunitas Trade With Suli (Survei per Juli 2025)</p>
          </div>
          <div className="flex flex-col md:flex-row gap-7 animate-fadeInUp">
            <div className="md:w-[35%] flex flex-col gap-7 md:pt-[90px]">
               <img src="https://tradewithsuli.com/wp-content/uploads/2025/09/Testimoni-TWS-09.png" className="w-full rounded-xl" alt="Testi" />
               <img src="https://tradewithsuli.com/wp-content/uploads/2025/11/testi-05-tradewithsuli.webp" className="w-full rounded-xl" alt="Testi" />
               <img src="https://tradewithsuli.com/wp-content/uploads/2025/11/testi-06-tradewithsuli.webp" className="w-full rounded-xl" alt="Testi" />
            </div>
            <div className="md:w-[35%] flex flex-col gap-7">
               <img src="https://tradewithsuli.com/wp-content/uploads/2025/11/testi-02-tradewithsuli.webp" className="w-full rounded-xl" alt="Testi" />
               <img src="https://tradewithsuli.com/wp-content/uploads/2025/11/testi-04-tradewithsuli.webp" className="w-full rounded-xl" alt="Testi" />
               <img src="https://tradewithsuli.com/wp-content/uploads/2025/09/Testimoni-TWS-03.png" className="w-full rounded-xl" alt="Testi" />
               <img src="https://tradewithsuli.com/wp-content/uploads/2025/11/testi-03-tradewithsuli.webp" className="w-full rounded-xl" alt="Testi" />
            </div>
            <div className="md:w-[35%] flex flex-col gap-7 md:pt-[70px]">
               <img src="https://tradewithsuli.com/wp-content/uploads/2025/09/Testimoni-TWS-05.png" className="w-full rounded-xl" alt="Testi" />
               <img src="https://tradewithsuli.com/wp-content/uploads/2025/09/Testimoni-TWS-06.png" className="w-full rounded-xl" alt="Testi" />
               <img src="https://tradewithsuli.com/wp-content/uploads/2025/11/testi-01-tradewithsuli.webp" className="w-full rounded-xl" alt="Testi" />
            </div>
          </div>
          <div className="text-center mt-20 animate-fadeInUp">
            <div className="mb-10"><a href="https://discord.com/channels/1224561192228487259/1418062368092459049" className="testimonial-button">Lihat Testimoni Member Sepenuhnya Disini</a></div>
            <div className="max-w-3xl mx-auto"><p className="text-gray-500 text-[12px] md:text-[14px] leading-relaxed opacity-60 text-center text-white">DISCLAIMER: Segala bentuk trading memiliki risiko, dan hasil di masa lalu tidak menjamin hasil di masa depan. Testimoni hanya pengalaman pribadi dan bukan jaminan keuntungan.</p></div>
          </div>
        </div>
      </section>

      {/* DAILY SETUP CAROUSEL */}
      <section className="py-28 bg-black relative overflow-hidden flex flex-col items-center text-center">
        <div className="container mx-auto max-w-[1200px] z-10 relative">
          <div className="flex flex-col items-center gap-5 mb-10 px-4">
            <img src="https://tradewithsuli.com/wp-content/uploads/2025/10/dailysetup-tradewithsuli.webp" alt="Daily Setup" className="h-14 md:h-16 object-contain" />
            <h2 className="text-[32px] md:text-[48px] font-normal leading-tight text-white">
               <span className="gradient-text font-bold">Dapatkan Sinyal Trading</span> <br/> dari Suli Sebelum Orang Lain Tahu.
            </h2>
            <p className="max-w-4xl text-[#FFFFFFD9] text-[16px] md:text-[20px] font-light leading-relaxed">Begitu kamu join, kamu akan menerima sinyal harian hasil riset dan screening pribadi Suli terhadap altcoin dengan potensi tertinggi. <strong> Suli memilih setup berdasarkan analisis real-time dengan tingkat akurasi dan hitrate yang terbukti konsisten.</strong></p>
          </div>
        </div>
        <div className="relative w-[110vw] mt-10">
          <div className="absolute left-0 top-0 h-full w-[15%] z-20 pointer-events-none bg-linear-to-r from-black to-transparent"></div>
          <div className="absolute right-0 top-0 h-full w-[15%] z-20 pointer-events-none bg-linear-to-l from-black to-transparent"></div>
          <Swiper modules={[Pagination, Autoplay]} spaceBetween={20} slidesPerView={1.5} centeredSlides={true} loop={true} autoplay={{ delay: 3000 }} pagination={{ clickable: true }} breakpoints={{ 768: { slidesPerView: 3, spaceBetween: 20 } }} className="elementor-image-carousel pb-12">
            <SwiperSlide><img src="https://tradewithsuli.com/wp-content/uploads/2025/11/btc-website-tradewithsuli.webp" className="rounded-xl w-full" alt="BTC" /></SwiperSlide>
            <SwiperSlide><img src="https://tradewithsuli.com/wp-content/uploads/2025/11/eul-website-tradewithsuli.webp" className="rounded-xl w-full" alt="EUL" /></SwiperSlide>
            <SwiperSlide><img src="https://tradewithsuli.com/wp-content/uploads/2025/11/evaa-website-tradewithsuli.webp" className="rounded-xl w-full" alt="EVAA" /></SwiperSlide>
            <SwiperSlide><img src="https://tradewithsuli.com/wp-content/uploads/2025/11/hana-website-tradewithsuli.webp" className="rounded-xl w-full" alt="HANA" /></SwiperSlide>
            <SwiperSlide><img src="https://tradewithsuli.com/wp-content/uploads/2025/11/hype-website-tradewithsuli.webp" className="rounded-xl w-full" alt="HYPE" /></SwiperSlide>
          </Swiper>
        </div>
        <div className="text-center mt-12 z-10 flex flex-col items-center">
          <div className="mb-6"><a href="https://docs.google.com/spreadsheets/d/1rErx-_Vcs8CGmfYW-l-ySZAeveIEnlYi_BFBj9Oj00c/edit?gid=584600580#gid=584600580" target="_blank" className="history-button"><IconGabungArrow /> Cek History Seluruh Trade</a></div>
          <p className="text-[#B8B8B8] text-[10px] md:text-[12px] font-light max-w-2xl mx-auto px-6 opacity-60 text-center">DISCLAIMER: Segala bentuk trading memiliki risiko, dan hasil di masa lalu tidak menjamin hasil di masa depan. Testimoni hanya pengalaman pribadi dan bukan jaminan keuntungan.</p>
        </div>
      </section>

      {/* OFFLINE MEET UP */}
      <section className="w-full mt-16 meetup-container pt-12 pb-14 px-4 animate-fadeIn flex justify-center bg-black">
        <div className="max-w-[1180px] w-full text-center">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-[28px] md:text-[48px] font-normal leading-[1.12] text-white text-center"><b><span className="gradient-text">Offline Meet Up</span> </b> <br/>Bareng Member Lain</h2>
            <div className="max-w-[800px] mx-auto px-4">
              <p className="text-[#FFFFFFD9] text-[14px] md:text-[20px] font-light leading-[1.3] text-shadow-lg text-center">Ketemu langsung dengan gua dan member lainnya dalam bi-weekly private meet up Trade With Suli. Meet up ini bersifat gratis dan kalian berkesempatan untuk dinner bareng gua</p>
            </div>
          </div>
        </div>
      </section>

      {/* RISK CALCULATOR */}
      <section className="w-full bg-black py-24 px-4 animate-fadeIn flex flex-col items-center text-white">
        <div className="container max-w-[1180px] flex flex-col md:flex-row items-center md:items-end gap-10">
           <div className="w-full md:w-[70%] flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                <div className="w-[70%] md:w-[50%] mb-4 mx-auto md:mx-0"><img src="https://tradewithsuli.com/wp-content/uploads/2025/11/akses-gratis-tradewithsuli.webp" alt="Akses Gratis" className="w-full h-auto" /></div>
                <h2 className="text-[28px] md:text-[48px] font-normal leading-[1.12] text-white">Gratis! Trading <b><span className="gradient-text">Risk Calculator</span></b></h2>
                <p className="max-w-[800px] text-[#FFFFFFD9] text-[14px] md:text-[20px] font-light opacity-90">Bangun jurnal trading yang rapi dan profesional, sambil hitung ukuran posisi, manajemen risiko, dan potensi profit secara otomatis.</p>
           </div>
           <div className="w-full md:w-[30%] flex flex-col items-center justify-end"><a href="#popup-calculator" className="calculator-button w-full md:w-auto"><IconFileCalculator /> Akses Sekarang, Gratis!</a></div>
        </div>
        <div className="container max-w-[1180px] mt-16 px-4">
           <img src="https://tradewithsuli.com/wp-content/uploads/2026/01/Future-trading-calculator-web-2-tradewithsuli-scaled.webp" alt="Dashboard" className="hidden md:block w-full rounded-2xl shadow-2xl" />
           <img src="https://tradewithsuli.com/wp-content/uploads/2026/01/Future-trading-calculator-mobile-2-tradewithsuli.webp" alt="Dashboard" className="block md:hidden w-full rounded-2xl shadow-xl" />
        </div>
      </section>

      {/* BITCOIN ASSET GLOBAL */}
      <section className="w-full bg-black py-24 px-4 animate-fadeInLeft flex justify-center text-center text-white">
        <div className="max-w-[1180px] w-full flex flex-col items-center gap-5">
          <h2 className="text-[32px] md:text-[48px] font-normal leading-tight text-white">Bitcoin masih <br/><b><span className="gradient-text">0.17% dari Aset Global</span></b></h2>
          <div className="max-w-[1000px] mx-auto px-4 md:px-[100px]">
            <p className="text-[#FFFFFFD9] text-[16px] md:text-[20px] font-light leading-[1.3] opacity-90 text-center text-white">Bitcoin saat ini baru bernilai $1.7T, hanya sekitar 0.17% dari total aset global, jauh lebih kecil dibanding real estate, obligasi, ekuitas, dan emas. Jika berhasil melampaui valuasi emas, peluang kenaikannya bisa mencapai 16x.</p>
          </div>
        </div>
      </section>

      {/* GLOBAL WEALTH IMAGE */}
      <section className="w-full bg-black pb-24 px-4 flex justify-center">
        <div className="max-w-[1180px] w-full">
          <img src="https://tradewithsuli.com/wp-content/uploads/2025/11/Global-Wealth-is-Distributed-by-Assets-v2-tradewithsuli-scaled.webp" alt="Wealth Distribution" className="w-full rounded-2xl shadow-2xl" />
        </div>
      </section>

      {/* KARENA CRYPTO */}
      <section className="w-full bg-black py-24 px-4 animate-fadeInDown flex justify-center">
        <div className="max-w-[1180px] w-full text-center flex flex-col items-center gap-6 text-white">
           <div className="w-[80%] md:w-[52%]"><img src="https://tradewithsuli.com/wp-content/uploads/2025/09/dari-0-tradewithsuli.png" alt="Banner" className="w-full h-auto" /></div>
           <h2 className="text-[32px] md:text-[48px] font-light text-white">Karena Crypto</h2>
           <div className="max-w-[800px] mx-auto px-4"><p className="text-[#FFFFFFD9] text-[16px] md:text-[20px] font-light leading-[1.3] opacity-90 text-center text-white">Gua tidak mendapatkan support bentuk uang dari orang tua sejak awal. Namun karena berinvestasi dan trading di market crypto, gua berhasil mendapatkan $1,000,000 pertama di umur ke 18. Kalo gua bisa, kalian juga pasti bisa.</p></div>
        </div>
      </section>

      {/* SULI & CZ PHOTO */}
      <section className="w-full bg-black py-12 px-4 flex justify-center">
        <div className="max-w-[1180px] w-full"><img src="https://tradewithsuli.com/wp-content/uploads/2025/09/suli-cz-tradewithsuli-1.png" alt="Suli CZ" className="w-full rounded-2xl shadow-2xl" /></div>
      </section>

      {/* AKSES KOMUNITAS DISKUSI */}
      <section className="w-full bg-black py-24 px-4 animate-fadeInDown flex justify-center text-center text-white">
        <div className="max-w-[1180px] w-full flex flex-col items-center gap-6">
           <h2 className="text-[32px] md:text-[54px] font-normal leading-[1.2]">Akses Komunitas Diskusi Crypto <br/><b><span className="gradient-text">Terbesar di Indonesia</span></b></h2>
           <div className="max-w-[800px] mx-auto px-4 md:px-[160px]"><p className="text-[#FFFFFFD9] text-[16px] md:text-[20px] font-light opacity-90 text-white">100,000+ members telah bergabung and aktif berbagi wawasan setiap hari.</p></div>
        </div>
      </section>

      {/* DISCORD PREVIEW GIF */}
      <section className="w-full bg-black px-4 md:px-20 animate-fadeInUp flex justify-center">
        <div className="max-w-[1180px] w-full -mt-10"><img src="https://tradewithsuli.com/wp-content/uploads/2025/05/May-07-2025-6-03-41%E2%80%AFPM.gif" alt="Discord GIF" className="w-full rounded-2xl shadow-2xl" /></div>
      </section>

      {/* VIDEO EMBED */}
      <div className="w-full bg-black py-24 px-4 animate-fadeIn flex justify-center">
        <div className="max-w-[1180px] w-full">
          <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-2xl border border-white/5">
            <iframe 
              src="https://iframe.mediadelivery.net/embed/409612/e9534dec-be81-4780-83a2-8ec1e846ab7e?autoplay=false&loop=false&muted=false&preload=true&responsive=true" 
              loading="lazy" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
              allowFullScreen={true}
              title="Bloomberg Guide"
            ></iframe>
          </div>
        </div>
      </div>

      {/* BLOOMBERG TERMINAL */}
      <section className="w-full bg-black py-24 px-4 animate-fadeInDown flex justify-center text-center">
        <div className="max-w-[1180px] w-full flex flex-col items-center gap-6 text-white">
           <h2 className="text-[32px] md:text-[54px] font-normal leading-[1.2] text-white">Informasi yang Dipakai<br/><b><span className="gradient-text">Institusi Global.</span></b></h2>
           <div className="max-w-[800px] mx-auto px-4 md:px-[160px]">
             <p className="text-[#FFFFFFD9] text-[16px] md:text-[20px] font-light opacity-90 text-center text-white">Akses data dari Bloomberg Terminal senilai 500 juta per tahun.</p>
             <div className="flex justify-center mt-10">
                <img src="https://tradewithsuli.com/wp-content/uploads/2025/09/added-value-tradewithsuli.png" alt="Value" className="w-[15%] h-auto" />
             </div>
           </div>
           <div className="w-full mt-[-20px] md:mt-[-82px] z-10">
             <img src="https://tradewithsuli.com/wp-content/uploads/2025/09/bloomberg-web-tradewithsuli-1-e1759149237315.jpg" alt="Bloomberg" className="w-full rounded-2xl shadow-2xl" />
           </div>
        </div>
      </section>

      {/* BELAJAR GRATIS BANNER */}
      <div className="w-full bg-black py-16 px-4 animate-fadeIn flex justify-center text-center">
        <div className="max-w-[1180px] w-full">
           <a href="https://tradewithsuli.com/free-modul/" target="_blank" rel="noreferrer">
              <img src="https://tradewithsuli.com/wp-content/uploads/2025/10/belajar-gratis-webs-tradewithsuli.webp" alt="Web" className="hidden md:block w-full h-auto rounded-2xl shadow-2xl transition-transform hover:scale-[1.01]" />
              <img src="https://tradewithsuli.com/wp-content/uploads/2025/10/belajar-gratis-mobiles-tradewithsuli.webp" alt="Mobile" className="block md:hidden w-full h-auto rounded-2xl shadow-xl mt-5" />
           </a>
        </div>
      </div>

      {/* ALPHA CAPTURED RECAP */}
      <section className="bg-black py-24 md:py-32 flex justify-center text-white">
        <div className="max-w-[1185px] w-full px-6 flex flex-col md:flex-row items-start gap-12 md:gap-0">
          <div className="w-full md:w-[41%] flex flex-col items-start gap-4 md:pl-20 animate-fadeInUp">
            <h2 className="text-[32px] md:text-[54px] font-normal leading-[1.1] text-white text-left">
              <b><span className="gradient-text">100% Alpha</span></b> Captured
            </h2>
            <p className="text-[#D8D8D8] text-[16px] md:text-[20px] font-normal text-left max-w-[400px]">Check rekap ulang outlook trade internal kami</p>
            <div className="mt-4">
              <a href="https://docs.google.com/spreadsheets/d/1rErx-_Vcs8CGmfYW-l-ySZAeveIEnlYi_BFBj9Oj00c/edit?gid=584600580#gid=584600580" target="_blank" className="history-button !py-4 !px-9">
                <IconGabungArrow /> Trading Recap
              </a>
            </div>
          </div>
          <div className="w-full md:w-[59%] md:pl-10 animate-fadeIn">
            <div className="flex flex-col gap-6">
               <img src="https://tradewithsuli.com/wp-content/uploads/2025/10/aster-alpha-tradewithsuli.webp" className="w-full rounded-xl shadow-xl" alt="Recap" />
               <img src="https://tradewithsuli.com/wp-content/uploads/2025/10/hype-alpha-tradewithsuli.webp" className="w-full rounded-xl shadow-xl" alt="Recap" />
               <img src="https://tradewithsuli.com/wp-content/uploads/2025/10/trump-alpha-tradewithsuli.webp" className="w-full rounded-xl shadow-xl" alt="Recap" />
            </div>
          </div>
        </div>
      </section>

      {/* RISET INTERNAL CAROUSEL */}
      <section className="py-24 bg-black text-center text-white relative overflow-hidden flex flex-col items-center">
        <div className="container mx-auto px-6 max-w-[1140px] z-10 relative mb-10">
          <h2 className="text-[32px] md:text-[48px] font-bold leading-tight">Riset Internal yang Terbukti <br/><span className="gradient-text">Berhasil dipakai Ribuan Orang</span></h2>
        </div>
        <div className="w-[100vw] mt-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4} 
            centeredSlides={false}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            watchSlidesProgress={true}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 4 } 
            }}
            className="elementor-image-carousel pb-12"
          >
            <SwiperSlide><img src="https://tradewithsuli.com/wp-content/uploads/2025/09/feature-05-tradewithsuli.png" className="w-full h-auto rounded-xl shadow-lg" alt="Riset 1" /></SwiperSlide>
            <SwiperSlide><img src="https://tradewithsuli.com/wp-content/uploads/2025/09/feature-01-tradewithsuli.png" className="w-full h-auto rounded-xl shadow-lg" alt="Riset 2" /></SwiperSlide>
            <SwiperSlide><img src="https://tradewithsuli.com/wp-content/uploads/2025/10/dail-updates-tradewithsuli-1.webp" className="w-full h-auto rounded-xl shadow-lg" alt="Riset 3" /></SwiperSlide>
            <SwiperSlide><img src="https://tradewithsuli.com/wp-content/uploads/2025/09/feature-02-tradewithsuli.png" className="w-full h-auto rounded-xl shadow-lg" alt="Riset 4" /></SwiperSlide>
            <SwiperSlide><img src="https://tradewithsuli.com/wp-content/uploads/2025/09/feature-06-tradewithsuli.png" className="w-full h-auto rounded-xl shadow-lg" alt="Riset 5" /></SwiperSlide>
            <SwiperSlide><img src="https://tradewithsuli.com/wp-content/uploads/2025/09/feature-04-tradewithsuli.png" className="w-full h-auto rounded-xl shadow-lg" alt="Riset 6" /></SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="checkout" className="py-24 md:py-32 relative overflow-hidden bg-black flex flex-col items-center">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-100"
          style={{ 
            backgroundImage: "url('https://tradewithsuli.com/wp-content/uploads/2025/07/Group-654036774-e1751304886614.png')",
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>
        </div>
        
        <div className="container mx-auto max-w-[1140px] text-center z-10 relative px-4">
          <h2 className="text-[32px] md:text-[64px] font-normal leading-[1] text-white mb-4">
            Daftar Menjadi <b><br/><span className="gradient-text">Member Sekarang</span></b>
          </h2>
          <p className="text-[#A3A3A3] text-[16px] md:text-[20px] mb-8">
            Jadi member kita sekarang untuk <span className="text-white font-['Roboto'] font-light">menjadi 7% yang berhasil trading crypto.</span>
          </p>
          <div className="flex justify-center items-center gap-3 mb-16">
            <img src="https://tradewithsuli.com/wp-content/uploads/2025/10/join-1000.webp" className="h-10 md:h-12 w-auto" alt="Join 1000" />
            <span className="text-[#A3A3A3] text-sm md:text-base">Join 10.000+ Traders lain</span>
          </div>

          <div className="flex flex-col gap-10 max-w-5xl mx-auto">
            {/* CARD PREMIUM */}
            <div className="w-full bg-[#0a0a0a]/80 rounded-[20px] border-none shadow-[0px_16px_61px_-9px_#2A62FF_inset] backdrop-blur-md overflow-hidden flex flex-col md:flex-row transition-transform hover:scale-[1.005]"
                 style={{ backgroundImage: 'linear-gradient(-203deg, #3B6DF7 0%, #00000000 19%)' }}>
               
               <div className="w-full md:w-[45%] p-8 md:p-12 text-left flex flex-col justify-center gap-6">
                  <div>
                    <h1 className="text-[40px] md:text-[54px] font-bold text-white leading-none">Premium</h1>
                    <h2 className="text-[14px] md:text-[16px] font-light text-[#E7E7E7] opacity-80 mt-2">Akses Membership Selama 12 Bulan</h2>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[20px] text-[#EA1515] line-through font-normal block opacity-80">Rp13.000.000</span>
                    <span className="text-[40px] md:text-[54px] font-bold text-white leading-none">Rp11.700.000</span>
                    <span className="text-[14px] text-[#CDCFD3] mt-2 font-medium">Hanya Rp32.000/hari</span>
                  </div>
                  <div className="w-full mt-4">
                    <label className="text-[12px] text-[#A3A3A3] block mb-2">Masukkan Kode Kupon (Opsional):</label>
                    <input type="text" placeholder="Masukkan kode kupon Anda" className="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-white focus:border-brand-blue outline-none" />
                    <button className="brand-button !w-full !text-[16px] !py-3 mt-4">Gabung Sekarang!</button>
                  </div>
               </div>

               <div className="w-full md:w-[55%] p-8 md:p-12 text-left flex flex-col justify-center">
                  <ul className="space-y-5 text-white text-[14px] md:text-[15px]">
                    <li className="flex gap-4 items-start"><img src="https://tradewithsuli.com/wp-content/uploads/2025/06/Group-1686553106.png" className="w-6 h-6 mt-0.5 shrink-0" alt="check" /> <span><b>Premium Discord Access:</b> Trading calls, PDF outlooks, monthly outlook, & in-depth research</span></li>
                    <li className="flex gap-4 items-start"><img src="https://tradewithsuli.com/wp-content/uploads/2025/06/Group-1686553106.png" className="w-6 h-6 mt-0.5 shrink-0" alt="check" /> <span><b>Exclusive Alpha Calls:</b> Sinyal awal seperti HYPE $3.8, TRUMP $0.4</span></li>
                    <li className="flex gap-4 items-start"><img src="https://tradewithsuli.com/wp-content/uploads/2025/06/Group-1686553106.png" className="w-6 h-6 mt-0.5 shrink-0" alt="check" /> <span><b>Daily Portfolio Guidance:</b> Internal crypto portfolio updates harian</span></li>
                    <li className="flex gap-4 items-start"><img src="https://tradewithsuli.com/wp-content/uploads/2025/06/Group-1686553106.png" className="w-6 h-6 mt-0.5 shrink-0" alt="check" /> <span><b>Daily Livestreams:</b> Analyst aktif setiap hari membahas market</span></li>
                    <li className="flex gap-4 items-start"><img src="https://tradewithsuli.com/wp-content/uploads/2025/06/Group-1686553106.png" className="w-6 h-6 mt-0.5 shrink-0" alt="check" /> <span><b>100+ Education Modules:</b> Blockchain, investasi, & Web3 lengkap</span></li>
                    <li className="flex gap-4 items-start"><img src="https://tradewithsuli.com/wp-content/uploads/2025/06/Group-1686553106.png" className="w-6 h-6 mt-0.5 shrink-0" alt="check" /> <span><b>Monthly Offline Meetups:</b> Bangun koneksi eksklusif dengan member lain</span></li>
                    <li className="flex gap-4 items-start"><img src="https://tradewithsuli.com/wp-content/uploads/2025/06/Group-1686553106.png" className="w-6 h-6 mt-0.5 shrink-0" alt="check" /> <span><b>Beginner Guide:</b> Tanya langsung ke admin seputar pemula crypto</span></li>
                    <li className="flex gap-4 items-start opacity-50"><img src="https://tradewithsuli.com/wp-content/uploads/2025/08/x-price.png" className="w-6 h-6 mt-0.5 shrink-0" alt="x" /> <span><b>Premium Community:</b> Ruang diskusi & networking tertutup</span></li>
                  </ul>
               </div>
            </div>

            {/* CARD THE PREMIUM+ */}
            <div className="w-full bg-[#0a0a0a]/80 rounded-[20px] border-none shadow-[0px_16px_61px_-9px_#FFFFFF33_inset] backdrop-blur-md overflow-hidden flex flex-col md:flex-row transition-transform hover:scale-[1.005]"
                 style={{ backgroundImage: 'linear-gradient(-203deg, #FFFFFF22 0%, #00000000 19%)' }}>
               <div className="w-full md:w-[55%] p-8 md:p-12 text-left flex flex-col justify-center gap-6">
                  <div>
                    <h1 className="text-[32px] md:text-[44px] font-thin text-white leading-none">The Premium+</h1>
                    <h2 className="text-[14px] md:text-[16px] font-light text-[#E7E7E7] opacity-80 mt-2">Membership 12 Bulan dan semua yang di premium, plus:</h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="https://tradewithsuli.com/wp-content/uploads/2025/06/Group-1686553106.png" className="w-7 h-7 shrink-0" alt="v" />
                    <span className="text-[18px] md:text-[20px] font-medium text-white leading-tight">Akses Komunitas Dua Arah Terbesar di Market Crypto</span>
                  </div>
               </div>
               <div className="w-full md:w-[45%] p-8 md:p-12 text-right flex flex-col justify-center gap-6">
                  <span className="text-[36px] md:text-[48px] font-bold text-white leading-none">Rp15.000.000</span>
                  <div className="w-full text-left">
                    <label className="text-[12px] text-[#A3A3A3] block mb-2">Masukkan Kode Kupon (Opsional):</label>
                    <input type="text" placeholder="Masukkan kode kupon Anda" className="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-white focus:border-brand-blue outline-none" />
                    <button className="brand-button !w-full !text-[16px] !py-3 mt-4">Gabung Sekarang!</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 md:py-32 bg-black flex justify-center overflow-hidden">
        <div className="container mx-auto max-w-[1180px] px-6 flex flex-col md:flex-row gap-12 md:gap-0">
          
          <div className="w-full md:w-[50%] flex flex-col items-start gap-4 animate-fadeIn">
            <h2 className="text-[32px] md:text-[54px] font-normal leading-[1.2] text-white text-left m-0">Frequently <br /><b><span className="gradient-text">Asked Question</span></b></h2>
            <div className="text-[#A3A3A3] text-[16px] md:text-[20px] font-normal text-left mt-3">Pertanyaan yang sering diajukan.<br />Punya pertanyaan lain?</div>
            <div className="mt-8">
              <a href="https://wa.link/kx65m7" className="flex items-center text-[14px] md:text-[16px] px-5 py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-[0px_0px_9px_3px_rgba(255,255,255,0.2)_inset] text-white"
                 style={{ backgroundImage: 'linear-gradient(316deg, #FFFFFF 0%, #25D366 24%)' }}>
                <IconWhatsapp /> Langsung aja tanya!
              </a>
            </div>
          </div>

          <div className="w-full md:w-[50%] flex flex-col gap-2">
            {faqData.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQIndex === index}
                onClick={() => setOpenFAQIndex(openFAQIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WARREN BUFFET IMAGE SECTION */}
      <section className="bg-black py-12 flex justify-center overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="hidden md:block">
            <img src="https://tradewithsuli.com/wp-content/uploads/2025/05/warren-buffet-tradewithsuli-1.png" className="w-full h-auto rounded-2xl shadow-2xl" alt="Warren Buffet Desktop" />
          </div>
          <div className="block md:hidden">
            <img src="https://tradewithsuli.com/wp-content/uploads/2025/05/warren-buffet-mobile-tradewithsuli-1.png" className="w-full h-auto rounded-xl shadow-xl" alt="Warren Buffet Mobile" />
          </div>
        </div>
      </section>

      {/* FOOTER COMPONENT */}
      <Footer />

      {/* FLOATING POPUP */}
      <div className="fixed bottom-10 right-10 z-[60] pointer-events-none">
        <a href="#checkout" className="block w-[240px] md:w-[300px] pointer-events-auto hover:-translate-y-2 transition-transform duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.9)] rounded-2xl overflow-hidden bg-black border border-white/10">
          <img src="https://tradewithsuli.com/wp-content/uploads/2025/10/gabung-komunitas-gratis.webp" alt="Popup" className="w-full shadow-2xl rounded-2xl border border-white/10" />
        </a>
      </div>
    </div>
  );
}