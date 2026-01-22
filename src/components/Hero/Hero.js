import React from 'react';
import centerLogo from '../../assets/images/head/center-logo.svg';
import iconApple from '../../assets/images/head/apple.svg';
import iconGoogle from '../../assets/images/head/google.svg';

import stickerPics from '../../assets/images/head/pics.svg';
import macPawLogo from '../../assets/images/head/macpaw.svg';
import stickerTeamwork from '../../assets/images/head/teamwork.svg';
import stickerSecure from '../../assets/images/head/secure.svg';
import stickerWifi from '../../assets/images/head/wifi.svg';
import stickerPlan from '../../assets/images/head/plan.svg';
import stickerManage from '../../assets/images/head/manage.svg';
import stickerCode from '../../assets/images/head/code.svg';
import stickerConverter from '../../assets/images/head/converter.svg';
import stickerPdf from '../../assets/images/head/pdf.svg';

const stickerBase =
  'absolute transform transition-transform duration-300 z-10 [filter:drop-shadow(0_10px_20px_rgba(0,0,0,0.3))] hover:scale-[1.05] hover:z-30';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center text-center px-[20px] py-[48px] md:px-[40px] md:py-[80px] overflow-hidden max-w-[1800px] min-h-[600px] md:min-h-[800px] mx-auto w-full">
      <div className="relative z-20">
        <div className="mb-[30px] text-align-center text-center">
          <img src={centerLogo} alt="Setapp" className="w-[140px] h-auto rounded-[24px] m-auto" />
        </div>

        <h1 className="font-bold text-[36px] md:text-[64px] leading-[1.1] mb-[32px] md:mb-[50px] text-white">
          Dozens of apps.
          <br />
          One subscription.
          <br />
          $9.99
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-[12px] mb-[32px] md:mb-[40px] justify-center">
          <button className="bg-white text-[#333333] font-semibold text-[16px] px-[28px] md:px-[32px] py-[14px] md:py-[16px] cursor-pointer rounded-[12px] transform transition-transform duration-200 hover:-translate-y-[2px] border border-transparent w-full sm:w-auto">
            Try free for 7 days
          </button>
          <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-[12px] cursor-pointer transform transition-transform duration-200 hover:-translate-y-[2px]">
            <img src={iconApple} alt="Apple" className="w-[24px] h-[24px]" />
          </div>
          <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-[12px] cursor-pointer transform transition-transform duration-200 hover:-translate-y-[2px]">
            <img src={iconGoogle} alt="Google" className="w-[24px] h-[24px]" />
          </div>
        </div>

        <p className="text-[#999999] text-[16px] md:text-[18px] leading-[1.6] font-normal">
          Power up your workflow with Setapp,
          <br />
          a smart way to get apps.
        </p>
      </div>

      <img
        src={stickerPics}
        alt="Work with pics"
        className={`${stickerBase} hidden md:block top-[15%] left-[15%] w-[165px] rotate-[4deg]`}
      />
      <img
        src={stickerPdf}
        alt="PDF Converter"
        className={`${stickerBase} hidden md:block top-[29%] left-[20.5%] w-[129px] rotate-[2deg]`}
      />
      <img
        src={macPawLogo}
        alt="MacPaw"
        className={`${stickerBase} hidden md:block top-[30%] left-[15%] w-[60px]`}
      />
      <img
        src={stickerTeamwork}
        alt="Boost Teamwork"
        className={`${stickerBase} hidden md:block top-[52%] left-[14%] w-[230px] -rotate-[2deg]`}
      />
      <img
        src={stickerSecure}
        alt="Stay Secure"
        className={`${stickerBase} hidden md:block top-[62.5%] left-[15%] w-[160px] rotate-[1deg]`}
      />

      <img
        src={stickerWifi}
        alt="Fix Wi-Fi"
        className={`${stickerBase} hidden md:block top-[18%] right-[16%] w-[170px] rotate-[8deg]`}
      />
      <img
        src={stickerPlan}
        alt="Plan Your Day"
        className={`${stickerBase} hidden md:block top-[23%] right-[22%] w-[140px] -rotate-[6deg]`}
      />
      <img
        src={stickerManage}
        alt="Manage Your Mac"
        className={`${stickerBase} hidden md:block top-[50%] right-[18%] w-[200px] rotate-[6deg]`}
      />
      <img
        src={stickerConverter}
        alt="Convert to JPG"
        className={`${stickerBase} hidden md:block top-[40%] right-[15%] w-[140px] rotate-[3deg]`}
      />
      <img
        src={stickerCode}
        alt="Code Easier"
        className={`${stickerBase} hidden md:block top-[63%] right-[19%] w-[128px] -rotate-[2deg]`}
      />
    </section>
  );
};

export default Hero;
