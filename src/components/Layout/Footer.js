 
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
 
import { Link } from "@chakra-ui/react";
import Wrapper from "../Wrapper";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-8 pb-3 relative">

        <svg 
          className="absolute top-0 w-full h-5 -mt-4  lg:-mt-8 lg:h-8   sm:-mt-6 sm:h-6 text-black  "
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path  
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>

            <Wrapper className="flex justify-between flex-col items-center md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row  ">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Find a store
                        </div>
                         
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            sign up for email
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            send us feedback
                        </div> 
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                get help
                            </div>
                             
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Contact Us
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                About Evrima
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                News
                            </div>
                             
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Latest
                            </div> 
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div
                        onClick={() =>
                            window.open("https://facebook.com", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center
                         text-black hover:bg-[#1877F2]/[0.8] cursor-pointer"
                    >
                        <FaFacebookF size={20} />
                    </div>
                    <Link
                        href="https://twitter.com"
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center
                         text-black hover:bg-[#1DA1F2]/[0.8] cursor-pointer"
                    >
                        <FaTwitter size={20} />
                    </Link>
                    <div 
                      onClick={() =>
                        window.open("https://youtube.com", "_blank")
                      }
                      className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center
                       text-black hover:bg-[#FF0000]/[0.8] cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div 
                      onClick={() =>
                        window.open("https://instagram.com", "_blank")
                      }
                      className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center
                       text-black hover:bg-[#d62976]/[0.8] cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Evrima Team. All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Sale
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Use
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Privacy Policy
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;



 

