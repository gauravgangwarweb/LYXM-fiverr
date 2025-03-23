"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaFacebook,
  FaGripLines,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaXmark, FaTwitter } from "react-icons/fa6";
import { useLocale } from "next-intl";
import { useTransition } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import ContactUsButton from "@/components/ui/contactusButton";

const Navbar = ({buttonText, sidebar}) => {
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
    <header className="bg-black/80 fixed top-0 z-40 w-full border-b border-transparent transition-colors duration-200 px-4 md:px-8 py-4">
      <div className="flex justify-between items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          {
            isOpen ? <SheetTrigger>
            <FaXmark className="relative z-50 text-inherit text-2xl md:text-4xl font-black" />
          </SheetTrigger> : <SheetTrigger className={`relative z-50 ${isOpen ? 'hidden' : 'block'}`}>
            <FaGripLines className="relative z-50 text-white text-2xl md:text-4xl font-black" />
          </SheetTrigger>
          }
          
          <SheetContent 
            side="left" 
            className="w-[322px] z-50 bg-black/80 backdrop-blur-md border-r-0 p-0 overflow-y-auto max-h-screen"
            closeable={false}
          >
            <div className="fixed top-4 left-4 md:left-8 z-50">
              <SheetTrigger>
                <FaXmark className="text-white text-4xl font-black" />
              </SheetTrigger>
            </div>
            <div className="z-50 pl-[74px] py-8 mt-14 h-full overflow-y-auto">
            <ContactUsButton text={buttonText} />
              <div className="mt-8 flex flex-col gap-3 text-[#f5f5f7] font-bold text-xl">
                <button className="text-left hover:opacity-80">{sidebar.link1}</button>
                <button className="text-left hover:opacity-80">{sidebar.link2}</button>
                <button className="text-left hover:opacity-80">
                  {sidebar.link3}
                </button>
                <button className="text-left hover:opacity-80">
                  {sidebar.link4}
                </button>
                
                <div className="my-4 flex items-center gap-3">
                  {/* <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="text-white text-2xl" />
                  </a> */}
                  <a href="https://www.facebook.com/profile.php?id=61570435444029" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-white text-2xl" />
                  </a>
                  <a href="https://www.instagram.com/elyxm.bar" target="_blank" rel="noopener noreferrer">
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
          <ContactUsButton text={buttonText} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
