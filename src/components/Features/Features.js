import React from 'react';
import cmmIcon from '../../assets/images/features/icon-cmm.png';
import cmmVisual from '../../assets/images/features/cmm-big@2x.png';
import coderunnerIcon from '../../assets/images/features/icon-coderunner.png';
import coderunnerVisual from '../../assets/images/features/coderunner@2x.png';
import meeterIcon from '../../assets/images/features/icon-meeter.png';
import meeterVisual from '../../assets/images/features/meeter@2x.png';

const cardBase =
  'relative rounded-[10px] overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-[5px]';

const Features = () => {
  return (
    <section className="px-[20px] md:px-[40px] py-[60px] md:py-[80px] max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-[24px] md:gap-0 mb-[40px] md:mb-[60px] border-t border-[rgba(255,255,255,0.1)] pt-[40px] md:pt-[60px]">
        <h2 className="text-[28px] md:text-[36px] font-bold text-white w-full md:w-[45%] leading-[1.2] md:leading-[51.84px]">
          What you get on Setapp.
        </h2>
        <p className="text-[#999999] w-full md:w-[40%] text-[16px] md:text-[18px] leading-[1.5] md:leading-[32.04px] mt-[4px] md:mt-[10px] font-normal">
          With a single monthly subscription at $9.99 you get 240+ apps for your Mac.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] gap-[24px] mb-[40px]">
        <div
          className={`${cardBase} md:col-span-2 bg-[#e39ba9] text-[#333333] h-[605px] items-start p-0`}
        >
          <div className="w-full px-[60px] py-[60px] z-[2] absolute top-[20px] left-0 flex flex-row items-center gap-[24px]">
            <img src={cmmIcon} alt="CleanMyMac Icon" className="w-[80px] h-[80px] mb-0 block" />
            <div>
              <h3 className="text-[32px] mb-[8px] font-semibold">Keep your Mac clean</h3>
              <p className="m-0 opacity-70 text-[18px] text-[#333333]">
                Remove junk, scan for malware, wipe email attachments.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex items-end justify-center relative mt-auto">
            <img
              src={cmmVisual}
              alt="CleanMyMac Interface"
              className="w-[90%] h-auto ml-0 rounded-t-[12px]"
            />
          </div>
        </div>

        <div className={`${cardBase} bg-[#fcf6ef] text-[#333333] h-[633px] justify-between p-0`}>
          <div className="w-full h-full flex justify-center items-baseline">
            <img
              src={coderunnerVisual}
              alt="CodeRunner Interface"
              className="w-full h-auto block object-contain"
            />
          </div>
          <div className="px-[60px] py-[60px] bg-transparent absolute bottom-0 w-full">
            <img
              src={coderunnerIcon}
              alt="CodeRunner Icon"
              className="w-[64px] h-[64px] mb-[24px] block"
            />
            <h3 className="text-[28px] mb-[12px] font-semibold">Write code</h3>
            <p className="text-[16px] opacity-90 leading-[1.5]">
              Create applications in more than 25 languages
            </p>
          </div>
        </div>

        <div className={`${cardBase} bg-[#405575] text-white h-[633px] p-0 relative`}>
          <div className="px-[65px] pt-[65px] pb-0 relative z-[2]">
            <img
              src={meeterIcon}
              alt="Meeter Icon"
              className="w-[64px] h-[64px] mb-[24px] block"
            />
            <h3 className="text-[28px] mb-[12px] font-semibold">Join meetings in a click</h3>
            <p className="text-[16px] opacity-90 leading-[1.5]">
              Quickly access links to your meetings from menu bar
            </p>
          </div>
          <div className="absolute bottom-0 right-0 w-full flex justify-end items-end">
            <img
              src={meeterVisual}
              alt="Meeter Interface"
              className="w-full h-auto block object-contain rounded-tl-[12px]"
            />
          </div>
        </div>
      </div>

      <div className="mt-[40px] text-center">
        <a
          href="#all-superpowers"
          className="text-[#e0e0e0] text-[20px] no-underline pb-[4px] transition-colors duration-200 font-medium hover:text-white"
        >
          → View all superpowers
        </a>
      </div>
    </section>
  );
};

export default Features;
