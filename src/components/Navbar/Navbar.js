import React, { useState } from 'react';
import logo from '../../assets/images/head/logo.svg';
import flagEn from '../../assets/images/head/en.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent text-[15px] text-[#e0e0e0]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-[16px] px-[16px] md:py-[24px] md:px-[40px]">
        <div className="flex items-center">
          <img src={logo} alt="Setapp Logo" className="h-[28px] w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-[30px]">
          <div className="flex items-center">
            <a
              href="#how-it-works"
              className="ml-[24px] text-[#e0e0e0] no-underline font-medium transition-colors duration-200 hover:text-white"
            >
              How it works
            </a>
            <a
              href="#all-apps"
              className="ml-[24px] text-[#e0e0e0] no-underline font-medium transition-colors duration-200 hover:text-white"
            >
              All apps
            </a>
            <a
              href="#pricing"
              className="ml-[24px] text-[#e0e0e0] no-underline font-medium transition-colors duration-200 hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#for-teams"
              className="ml-[24px] text-[#e0e0e0] no-underline font-medium transition-colors duration-200 hover:text-white"
            >
              For Teams
            </a>
            <a
              href="#blog"
              className="ml-[24px] text-[#e0e0e0] no-underline font-medium transition-colors duration-200 hover:text-white"
            >
              Blog
            </a>
            <a
              href="#podcast"
              className="ml-[24px] text-[#e0e0e0] no-underline font-medium transition-colors duration-200 hover:text-white"
            >
              Podcast
            </a>
          </div>

          <div className="flex items-center gap-[20px]">
            <span className="text-[#555555] font-light">|</span>
            <img
              src={flagEn}
              alt="US Flag"
              className="w-[20px] h-auto cursor-pointer rounded-[2px]"
            />
            <a
              href="#signin"
              className="text-[#e0e0e0] no-underline font-medium transition-colors duration-200 hover:text-white"
            >
              Sign in
            </a>
            <button className="bg-transparent border border-[#666666] text-white px-[18px] py-[8px] rounded-[8px] font-medium text-[14px] cursor-pointer transition-colors duration-200 hover:border-white hover:bg-[rgba(255,255,255,0.1)]">
              Try free
            </button>
          </div>
        </div>

        <button
          type="button"
          className="md:hidden flex items-center justify-center w-[32px] h-[32px] rounded-[6px] border border-[rgba(255,255,255,0.2)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-[16px] h-[2px] bg-white relative">
            <span className="block w-[16px] h-[2px] bg-white absolute top-[-5px] left-0" />
            <span className="block w-[16px] h-[2px] bg-white absolute top-[5px] left-0" />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-[rgba(255,255,255,0.15)]">
          <div className="max-w-[1440px] mx-auto px-[16px] pb-[16px] flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[8px] mt-[12px]">
              <a
                href="#how-it-works"
                className="text-[#e0e0e0] no-underline font-medium"
                onClick={() => setIsOpen(false)}
              >
                How it works
              </a>
              <a
                href="#all-apps"
                className="text-[#e0e0e0] no-underline font-medium"
                onClick={() => setIsOpen(false)}
              >
                All apps
              </a>
              <a
                href="#pricing"
                className="text-[#e0e0e0] no-underline font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#for-teams"
                className="text-[#e0e0e0] no-underline font-medium"
                onClick={() => setIsOpen(false)}
              >
                For Teams
              </a>
              <a
                href="#blog"
                className="text-[#e0e0e0] no-underline font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
              <a
                href="#podcast"
                className="text-[#e0e0e0] no-underline font-medium"
                onClick={() => setIsOpen(false)}
              >
                Podcast
              </a>
            </div>
            <div className="flex items-center justify-between mt-[8px]">
              <div className="flex items-center gap-[10px]">
                <img
                  src={flagEn}
                  alt="US Flag"
                  className="w-[20px] h-auto cursor-pointer rounded-[2px]"
                />
                <span className="text-[#e0e0e0]">English</span>
              </div>
              <div className="flex items-center gap-[12px]">
                <a
                  href="#signin"
                  className="text-[#e0e0e0] no-underline font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Sign in
                </a>
                <button className="bg-transparent border border-[#666666] text-white px-[14px] py-[6px] rounded-[8px] font-medium text-[14px]">
                  Try free
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
