import React from 'react';
import iconFb from '../../assets/images/reviews/Facebook.svg';
import iconTw from '../../assets/images/reviews/Twitter.svg';
import iconIn from '../../assets/images/reviews/Instagram.svg';
import iconYt from '../../assets/images/reviews/YouTube.svg';
import smallFb from '../../assets/images/reviews/small-facebook.svg';
import smallIn from '../../assets/images/reviews/small-instagram.svg';
import smallTw from '../../assets/images/reviews/small-x.svg';

const cardBase =
  'rounded-[7px] px-[5px] pt-[5px] pb-[20px] bg-[#F5F5F5] flex flex-col justify-between min-h-[300px] relative shadow-[0_10px_25px_rgba(0,0,0,0.08)]';

const Reviews = () => {
  return (
    <section className="pt-[160px] md:pt-[380px] pb-[260px] md:pb-[400px] -mt-[160px] md:-mt-[315px] bg-[#f7f7f7] relative">
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[40px] relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[16px] md:gap-0 mb-[40px] md:mb-[60px] mx-[30px]">
          <div>
            <h2 className="text-[36px] text-[#222222] font-bold">Setapp in your words.</h2>
          </div>
          <p className="text-[#666666] text-[13px] md:text-[14px]">
            What you say about how Setapp powers you up.
          </p>
          <div className="flex flex-col items-start md:items-end gap-[15px]">
            <div className="flex gap-[12px]">
              <img
                src={iconFb}
                alt="Facebook"
                className="w-[40px] h-[40px] cursor-pointer transition-transform duration-200 hover:-translate-y-[2px]"
              />
              <img
                src={iconTw}
                alt="Twitter"
                className="w-[40px] h-[40px] cursor-pointer transition-transform duration-200 hover:-translate-y-[2px]"
              />
              <img
                src={iconIn}
                alt="Instagram"
                className="w-[40px] h-[40px] cursor-pointer transition-transform duration-200 hover:-translate-y-[2px]"
              />
              <img
                src={iconYt}
                alt="YouTube"
                className="w-[40px] h-[40px] cursor-pointer transition-transform duration-200 hover:-translate-y-[2px]"
              />
            </div>
          </div>
        </div>

        <div className="absolute top-[70px] right-[75px] flex gap-[8px]">
          <button className="w-[32px] h-[32px] rounded-full bg-white border border-[rgba(0,0,0,0.15)] text-[#555555] text-[18px] flex items-center justify-center cursor-pointer">
            ‹
          </button>
          <button className="w-[32px] h-[32px] rounded-full bg-white border border-[rgba(0,0,0,0.15)] text-[#555555] text-[18px] flex items-center justify-center cursor-pointer">
            ›
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-[40px] mx-0 md:mx-[40px]">
          <div className={cardBase}>
            <div className="rounded-[7px] px-[24px] py-[28px] mb-[24px] bg-[#6c6ea9] text-white h-full">
              <p className="text-[18px] leading-[1.5] m-0 font-medium">
                Have been using Setapp for almost two years, and I have to say it's the best and the
                most cost-effective way of having apps on Mac.
              </p>
            </div>
            <div className="flex justify-between items-end text-black mx-[20px]">
              <div className="flex flex-col">
                <span className="font-bold text-[16px] mb-[4px]">Niall Prentable</span>
                <span className="text-[14px] opacity-70">@NiallPrentable</span>
              </div>
              <img src={smallTw} alt="Twitter" className="w-[20px] h-[20px] opacity-80" />
            </div>
          </div>

          <div className={cardBase}>
            <div className="rounded-[7px] px-[24px] py-[28px] mb-[24px] bg-[#f0c8a2] text-white h-full">
              <p className="text-[18px] leading-[1.5] m-0 font-medium">
                My favorites ❤️ from @Setapp: Ulysses, CleanMyMac X, Paste, MindNode, Swift
                Publisher.
              </p>
            </div>
            <div className="flex justify-between items-end text-black mx-[20px]">
              <div className="flex flex-col">
                <span className="font-bold text-[16px] mb-[4px]">Maurus Clandus</span>
                <span className="text-[14px] opacity-70">@mrclds</span>
              </div>
              <img src={smallIn} alt="Instagram" className="w-[20px] h-[20px] opacity-80" />
            </div>
          </div>

          <div className={cardBase}>
            <div className="rounded-[7px] px-[24px] py-[28px] mb-[24px] bg-[#8b6390] text-white h-full">
              <p className="text-[18px] leading-[1.5] m-0 font-medium">
                For those of you that wonder where I disconnect all the awesome apps for my Mac that
                I use, a lot of them are from Setapp!
              </p>
            </div>
            <div className="flex justify-between items-end text-black mx-[20px]">
              <div className="flex flex-col">
                <span className="font-bold text-[16px] mb-[4px]">Hendrik Januzzi</span>
                <span className="text-[14px] opacity-70">@hendrikjanuzzi</span>
              </div>
              <img src={smallFb} alt="Facebook" className="w-[20px] h-[20px] opacity-80" />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-[12px] mt-[20px]">
          <span className="w-[8px] h-[8px] bg-[#222222] rounded-full cursor-pointer" />
          <span className="w-[8px] h-[8px] bg-[#e0e0e0] rounded-full cursor-pointer" />
          <span className="w-[8px] h-[8px] bg-[#e0e0e0] rounded-full cursor-pointer" />
          <span className="w-[8px] h-[8px] bg-[#e0e0e0] rounded-full cursor-pointer" />
          <span className="w-[8px] h-[8px] bg-[#e0e0e0] rounded-full cursor-pointer" />
        </div>
      </div>
      <div className="w-full h-[65px] bg-[#26262b] absolute bottom-[200px] md:bottom-[220px]" />
    </section>
  );
};

export default Reviews;
