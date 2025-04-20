import Image from 'next/image';
import React from 'react'

export const Join = () => {
  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center justify-center text-center" id="ride">
      {/* Headline */}
      <h2 className="bg-gradient-to-r from-[#B30202] to-[#FF6B6B] bg-clip-text text-transparent text-3xl md:text-5xl font-extrabold mb-6 md:mb-6 max-w-3xl mx-auto">
        Chaapa Ride is transforming <br className="hidden md:block" /> Africa&apos;s mobility industry.
      </h2>
      {/* Subheadline */}
      <div className="text-gray-500 text-base md:text-lg font-medium mb-10">One Ride at a time.</div>
      {/* Phone mockups */}
      <div className="flex flex-row justify-center items-end gap-2 md:gap-6 mb-10 flex-wrap">
        <div className="transform -rotate-12 transition-transform duration-300 hover:scale-105">
          <Image src="/app.png" alt="Chaapa phone 1" width={170} height={340} className="w-[110px] md:w-[170px] h-auto rounded-2xl shadow-lg" />
        </div>
        <div className="transform -rotate-3 transition-transform duration-300 hover:scale-105">
          <Image src="/app-2.png" alt="Chaapa phone 2" width={170} height={340} className="w-[110px] md:w-[170px] h-auto rounded-2xl shadow-lg" />
        </div>
        <div className="transform rotate-3 transition-transform duration-300 hover:scale-105">
          <Image src="/app-3.png" alt="Chaapa phone 3" width={170} height={340} className="w-[110px] md:w-[170px] h-auto rounded-2xl shadow-lg" />
        </div>
        <div className="transform rotate-12 transition-transform duration-300 hover:scale-105">
          <Image src="/app-4.png" alt="Chaapa phone 4" width={170} height={340} className="w-[110px] md:w-[170px] h-auto rounded-2xl shadow-lg" />
        </div>
      </div>
      {/* QR Code */}
      <div className="flex flex-col items-center justify-center mt-2">
        <Image src="/qr-code.png" alt="Join waitlist QR" width={140} height={140} className="w-[180px] md:w-[203px] h-auto" />
        <div className="text-gray-800 text-base mt-2 font-medium">Scan to join waitlist</div>
      </div>
    </section>
  );
}

