import React from 'react';

const Journey = () => {
  return (
    <section className="px-[20px] md:px-[40px] py-[40px] md:py-[60px] max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row items-start pb-[60px] md:pb-[80px] border-b border-[rgba(255,255,255,0.7)] justify-between gap-[20px] md:gap-0">
        <h2 className="text-[28px] md:text-[36px] text-white font-semibold leading-[1.1]">
          Your Setapp journey.
        </h2>
        <p className="text-[#999999] text-[16px] md:text-[18px] leading-[1.5] w-full md:w-[60%] md:pl-[100px]">
          Type in your task into Setapp search and get instant app recommendations.
        </p>
      </div>
    </section>
  );
};

export default Journey;
