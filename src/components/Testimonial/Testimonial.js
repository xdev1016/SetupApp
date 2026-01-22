import React from 'react';
import jasonImage from '../../assets/images/testimonial/image 67.png';

const Testimonial = () => {
  return (
    <section className="pt-[60px] md:pt-[80px] px-[20px] md:px-[40px] pb-0 max-w-[1200px] mx-auto relative z-[2]">
      <div className="bg-[#755071] rounded-[10px] w-full min-h-[420px] md:min-h-[500px] flex flex-col md:flex-row relative overflow-hidden text-white shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
        <div className="absolute top-[40px] right-[40px] flex gap-[12px] z-10">
          <button className="w-[32px] h-[32px] rounded-full bg-transparent border border-[rgba(255,255,255,0.3)] text-white text-[18px] flex items-center justify-center cursor-pointer transition-all duration-200 pb-[2px] hover:bg-[rgba(255,255,255,0.1)] hover:border-white">
            ‹
          </button>
          <button className="w-[32px] h-[32px] rounded-full bg-transparent border border-[rgba(255,255,255,0.3)] text-white text-[18px] flex items-center justify-center cursor-pointer transition-all duration-200 pb-[2px] hover:bg-[rgba(255,255,255,0.1)] hover:border-white">
            ›
          </button>
        </div>

        <div className="flex-1 px-[24px] md:px-[60px] py-[40px] md:py-[80px] flex flex-col justify-center z-[2] max-w-full md:max-w-[60%]">
          <h2 className="text-[22px] md:text-[26px] font-medium leading-[1.4] mb-[16px] md:mb-[20px]">
            Musicians like Jason use Setapp to push the limits of their creativity, dancing through
            tasks for more time to play.
          </h2>
          <span className="text-[14px] md:text-[16px] opacity-80 mb-[24px] md:mb-[40px] block">
            Jason Teutsch
          </span>

          <div className="mt-[20px]">
            <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-[1.1]">
              <svg
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L18 12L2 22V2Z"
                  fill="#7a5483"
                  stroke="#7a5483"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex-[0_0_auto] md:flex-[0_0_45%] relative flex items-end justify-end pr-[10px] md:pr-[30px] pt-[10px] md:pt-[25px]">
          <img src={jasonImage} alt="Jason Teutsch" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex gap-[12px] mt-[30px] items-center justify-center">
        <span className="w-[8px] h-[8px] bg-black rounded-full opacity-80 cursor-pointer" />
        <span className="w-[8px] h-[8px] bg-white rounded-full opacity-30 cursor-pointer" />
        <span className="w-[8px] h-[8px] bg-white rounded-full opacity-30 cursor-pointer" />
        <span className="w-[8px] h-[8px] bg-white rounded-full opacity-30 cursor-pointer" />
      </div>
    </section>
  );
};

export default Testimonial;
