import React from 'react';
import iconFb from '../../assets/images/footer/Facebook.svg';
import iconTw from '../../assets/images/footer/Twitter.svg';
import iconIn from '../../assets/images/footer/Instagram.svg';
import iconYt from '../../assets/images/footer/YouTube.svg';
import flagEn from '../../assets/images/footer/en.svg';
import brandLogo from '../../assets/images/head/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#26262B] text-[#999999] px-[20px] md:px-[40px] pb-[32px] md:pb-[40px] text-[14px]">
      <div className="flex flex-col md:flex-row justify-between max-w-[1200px] mx-auto mb-[24px] md:mb-[30px] border-b border-[rgba(255,255,255,0.15)] pb-[32px] md:pb-[40px] relative gap-[32px] md:gap-0">
        <div className="max-w-full md:max-w-[450px]">
          <div className="flex items-center gap-[10px] mb-[20px] text-white font-bold text-[18px]">
            <img src={brandLogo} alt="Setapp" className="w-[24px] h-auto" />
            <span>SETAPP</span>
          </div>
          <p className="mb-[15px] leading-[1.5]">Updates from our team, writers and more 🧡</p>
          <div className="flex bg-[#111111] rounded-[8px] p-[4px] mb-[30px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-none text-white px-[15px] py-[10px] w-full outline-none placeholder:text-[#777777]"
            />
            <button className="bg-[#f5f5f5] border-none rounded-[6px] w-[36px] flex items-center justify-center cursor-pointer text-[16px]">
              →
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[32px] md:gap-[80px]">
          <div className="flex flex-col gap-[12px]">
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Home
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              How it Works
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              All Apps
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Pricing
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Group for Teams
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Blog
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Podcast
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Questions?
            </a>
          </div>

          <div className="flex flex-col gap-[12px]">
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              About
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Support
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Education Discount
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Family Plan
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              For Developers
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Gift Cards
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Redeem Gift Card Code
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Affiliate Program
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Mac Developer Survey 2023
            </a>
          </div>

          <div className="flex flex-col gap-[12px]">
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Getting started with Setapp
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Remote access to other Mac
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Fix macOS Ventura problems
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Best YouTube downloaders
            </a>
            <a href="#" className="text-[#999999] no-underline transition-colors duration-200 hover:text-white">
              Screen apps
            </a>
          </div>
        </div>
        <div className="flex items-center gap-[8px] text-[#cccccc] cursor-pointer absolute right-0 bottom-[30px]">
          <img src={flagEn} alt="US" className="w-[20px] h-auto" />
          <span>English</span>
          <span>▾</span>
        </div>
        <div className="absolute bottom-[30px] left-0 flex text-[10px] tracking-[1px] h-[24px]">
          <div className="px-[10px] flex items-center justify-center bg-[#8b8f97] text-white font-semibold rounded-l-[2px]">
            DMCA
          </div>
          <div className="px-[10px] flex items-center justify-center bg-[#373a3f] text-white font-semibold rounded-r-[2px]">
            PROTECTED
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-[20px] md:gap-0">
        <div className="flex flex-col gap-[12px]">
          <div className="text-[#666666] text-[12px]">
            © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg.
            584165. VAT ID: IE3425001BH
          </div>
          <div>
            <a href="#" className="text-[#666666] no-underline">
              Terms of Use
            </a>
            <span className="mx-[10px]" />
            <a href="#" className="text-[#666666] no-underline">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <img
            src={iconFb}
            alt="Facebook"
            className="w-[20px] h-[20px] opacity-50 cursor-pointer transition-opacity duration-200 hover:opacity-100"
          />
          <img
            src={iconIn}
            alt="Instagram"
            className="w-[20px] h-[20px] opacity-50 cursor-pointer transition-opacity duration-200 hover:opacity-100"
          />
          <img
            src={iconTw}
            alt="Twitter"
            className="w-[20px] h-[20px] opacity-50 cursor-pointer transition-opacity duration-200 hover:opacity-100"
          />
          <img
            src={iconYt}
            alt="YouTube"
            className="w-[20px] h-[20px] opacity-50 cursor-pointer transition-opacity duration-200 hover:opacity-100"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
