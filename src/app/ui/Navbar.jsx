"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaFacebook,
  FaGripLines,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXmark, FaTwitter } from "react-icons/fa6";
import { useLocale } from "next-intl";
import { useTransition } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const localActive = useLocale();

  const languages = [
    { code: "en", flag: "/eng-flag.png", label: "English" },
    { code: "es", flag: "/spain.png", label: "Spanish" },
  ];

  const LanguageDropdown = () => (
    <div className="relative">
      <button
        onClick={() => setShowLangDropdown(!showLangDropdown)}
        className="flex items-center gap-2 p-2 hover:bg-gray-700/20 rounded-full"
      >
        <img
          src={languages.find((lang) => lang.code === localActive)?.flag}
          alt="selected language"
          className="w-6 h-6 object-cover rounded-full"
        />
      </button>

      {showLangDropdown && (
        <div className="absolute top-full right-0 mt-1 bg-black/90 rounded-md shadow-lg py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang.code);
                setShowLangDropdown(false);
                startTransition(() => {
                  router.replace(`/${lang.code}`);
                });
              }}
              className="flex items-center gap-2 p-2 w-full hover:bg-gray-700/20"
            >
              <img
                src={lang.flag}
                alt={`${lang.label} flag`}
                className="w-6 h-6 object-cover rounded-full"
              />
              {/* <span className="text-white text-sm">{lang.label}</span> */}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="bg-black/80 fixed top-0 z-[200] w-full border-b border-transparent transition-colors duration-200 px-4 md:px-8 py-4">
      <div className="flex justify-between items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          {
            isOpen ? <SheetTrigger>
            <FaXmark className="text-inherit text-2xl md:text-4xl font-black" />
          </SheetTrigger> : <SheetTrigger className={`relative z-50 ${isOpen ? 'hidden' : 'block'}`}>
            <FaGripLines className="text-white text-2xl md:text-4xl font-black" />
          </SheetTrigger>
          }
          
          <SheetContent 
            side="left" 
            className="w-[322px] z-50 bg-black/80 backdrop-blur-md border-r-0 p-0 overflow-y-auto max-h-screen"
            closeable={false}
          >
            <div className="fixed top-4 left-4 md:left-8 z-50">
              <SheetTrigger>
                <FaXmark className="text-black/80 text-4xl font-black" />
              </SheetTrigger>
            </div>
            <div className="z-50 pl-[74px] py-8 mt-14 h-full overflow-y-auto">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border py-3 group border-foreground bg-transparent hover:bg-foreground hover:border-foreground/40 font-semibold text-foreground hover:text-primaryDark sm:text-lg text-sm px-4 sm:py-5 h-12 max-w-36 transition-colors duration-800 ease-in-out">
                <span className="flex gap-1">
                  Shop <span className="hidden md:block">Now</span>
                </span>
                <svg
                  class="hidden md:block align-middle transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M133.12 611.84h803.84v51.2H133.12zM806.144 712.3968l32.9472 39.168-237.0048 199.4752-32.9728-39.168z"></path>
                  <path d="M658.0992 276.4544l283.5968 336.7936-39.168 32.9728-283.5968-336.7936z"></path>
                </svg>
              </button>
              <div className="mt-8 flex flex-col gap-3 text-[#f5f5f7] font-bold text-xl">
                <button className="text-left hover:opacity-80">Home</button>
                <button className="text-left hover:opacity-80">Vestaboard</button>
                <button className="text-left hover:opacity-80">
                  Vestaboard White
                </button>
                <button className="text-left hover:opacity-80">
                  Product Detail
                </button>
                <button className="text-left hover:opacity-80">Software</button>
                <button className="text-left hover:opacity-80">
                  Meet Our Customers
                </button>
                <button className="text-left hover:opacity-80">At Home</button>
                <button className="text-left hover:opacity-80">At Work</button>
                <button className="text-left hover:opacity-80">A&D / Trade</button>
                <button className="text-left hover:opacity-80">
                  Dealer Program
                </button>
                <hr className="my-3 w-[180px] h-[1px] opacity-50" />
                <button className="text-left hover:opacity-80">Invest</button>
                <button className="text-left hover:opacity-80">
                  For Customers
                </button>
                <button className="text-left hover:opacity-80">
                  Accessories & Install
                </button>
                <button className="text-left hover:opacity-80">Newsroom</button>
                <button className="text-left hover:opacity-80">About Us</button>
                <button className="text-left hover:opacity-80">Community</button>
                <hr className="my-3 w-[180px] h-[1px] opacity-50" />
                <button className="text-left hover:opacity-80">Contact</button>
                <div className="my-4 flex items-center gap-3">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-white text-2xl" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-white text-2xl" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white text-2xl" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-white text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <img className="w-28 md:w-32" src="/logo.svg" alt="logo" />
        
        <div className="flex gap-0 md:gap-4 items-center">
          <LanguageDropdown />
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border py-2 group border-foreground bg-transparent hover:bg-foreground hover:border-foreground/40 font-semibold text-foreground hover:text-primaryDark sm:text-lg text-sm px-4 sm:py-5 h-9 max-w-36 transition-colors duration-800 ease-in-out">
            <span className="flex gap-1">
              Shop <span className="hidden md:block">Now</span>
            </span>
            <svg
              class="hidden md:block align-middle transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M133.12 611.84h803.84v51.2H133.12zM806.144 712.3968l32.9472 39.168-237.0048 199.4752-32.9728-39.168z"></path>
              <path d="M658.0992 276.4544l283.5968 336.7936-39.168 32.9728-283.5968-336.7936z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
