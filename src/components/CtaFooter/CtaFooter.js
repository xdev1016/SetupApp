import React from 'react';
import logo from '../../assets/images/cta/setapp-logo.svg';

const CtaFooter = () => {
  return (
    <section className="px-[20px] md:px-[40px] py-[60px] md:py-[80px] max-w-[1200px] mx-auto -mt-[180px] md:-mt-[300px] w-full">
      <div className="bg-[#f3f3f3] border border-[#e5e5e5] rounded-[24px] px-[24px] md:px-[60px] py-[40px] md:py-[80px] relative overflow-hidden flex flex-col justify-center min-h-[340px] md:min-h-[420px] shadow-[0_24px_48px_rgba(0,0,0,0.35)]">
        <div className="mb-[20px]">
          <img src={logo} alt="Setapp Logo" className="h-auto" />
        </div>

        <div className="relative z-[2]">
          <h2 className="text-[30px] md:text-[46px] text-[#222222] mb-[24px] md:mb-[40px] font-bold leading-[1.1]">
            Superpowers starting $9.99/month.
            <br />
            Free for 7 days.
          </h2>

          <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[16px]">
            <button className="bg-[#222222] text-white px-[24px] sm:px-[32px] py-[14px] sm:py-[16px] rounded-[5px] text-[15px] sm:text-[16px] font-semibold border-none cursor-pointer transition-colors duration-200 hover:bg-black">
              Get started now
            </button>
            <button className="bg-white text-[#222222] px-[24px] sm:px-[32px] py-[14px] sm:py-[16px] rounded-[5px] text-[15px] sm:text-[16px] font-semibold border border-[#cccccc] cursor-pointer transition-colors duration-200 hover:border-[#bbbbbb]">
              More about Setapp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFooter;
