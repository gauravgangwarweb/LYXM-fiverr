'use client'
import { useState } from "react";
import { FaFacebook, FaGripLines, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXmark, FaTwitter } from "react-icons/fa6";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
    <header class="bg-black/80 fixed top-0 z-[200] w-full border-b border-transparent transition-colors duration-200 px-4 md:px-8 py-4">
      <div className="flex justify-between items-center">
        <button onClick={() => setShowMenu(!showMenu)} >
          {
            showMenu ?
            <FaXmark className="text-white text-3xl" />
            :
            <FaGripLines className="text-white text-3xl" />
          }
        </button>
        <img className="w-32" src="/logo.png" alt="logo" />
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border py-2 group border-foreground bg-transparent hover:bg-foreground hover:border-foreground/40 font-semibold text-foreground hover:text-primaryDark sm:text-lg text-sm px-4 sm:py-5 h-9 max-w-36 transition-colors duration-800 ease-in-out">
            <span className="flex gap-1">Shop <span className="hidden md:block">Now</span></span>
        <svg class="hidden md:block align-middle transition-transform duration-300 ease-in-out group-hover:translate-x-1" width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M133.12 611.84h803.84v51.2H133.12zM806.144 712.3968l32.9472 39.168-237.0048 199.4752-32.9728-39.168z"></path><path d="M658.0992 276.4544l283.5968 336.7936-39.168 32.9728-283.5968-336.7936z"></path></svg>
        </button>
      </div>
    </header>
    {
      showMenu &&
      <div className="fixed top-[75px] left-0 h-[calc(100vh-75px)] w-[322px] bg-black/80 backdrop-blur-md z-50 pl-[74px] overflow-y-auto scrollbar-hidden"> 
         <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border py-3 group border-foreground bg-transparent hover:bg-foreground hover:border-foreground/40 font-semibold text-foreground hover:text-primaryDark sm:text-lg text-sm px-4 sm:py-5 h-12 max-w-36 transition-colors duration-800 ease-in-out">
            <span className="flex gap-1">Shop <span className="hidden md:block">Now</span></span>
            <svg class="hidden md:block align-middle transition-transform duration-300 ease-in-out group-hover:translate-x-1" width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M133.12 611.84h803.84v51.2H133.12zM806.144 712.3968l32.9472 39.168-237.0048 199.4752-32.9728-39.168z"></path><path d="M658.0992 276.4544l283.5968 336.7936-39.168 32.9728-283.5968-336.7936z"></path></svg>
        </button>
        <div className="mt-8 flex flex-col gap-3 text-[#f5f5f7] font-bold text-xl ">
          <button className="text-left hover:opacity-80">Home</button>
          <button className="text-left hover:opacity-80">Vestaboard</button>
          <button className="text-left hover:opacity-80">Vestaboard White</button>
          <button className="text-left hover:opacity-80">Product Detail</button>
          <button className="text-left hover:opacity-80">Software</button>
          <button className="text-left hover:opacity-80">Meet Our Customers</button>
          <button className="text-left hover:opacity-80">At Home</button>
          <button className="text-left hover:opacity-80">At Work</button>
          <button className="text-left hover:opacity-80">A&D / Trade</button>
          <button className="text-left hover:opacity-80">Dealer Program</button>
          <hr className="my-3 w-[180px] h-[1px] opacity-50"/>
          <button className="text-left hover:opacity-80">Invest</button>
          <button className="text-left hover:opacity-80">For Customers</button>
          <button className="text-left hover:opacity-80">Accessories & Install</button>
          <button className="text-left hover:opacity-80">Newsroom</button>
          <button className="text-left hover:opacity-80">About Us</button>
          <button className="text-left hover:opacity-80">Community</button>
          <hr className="my-3 w-[180px] h-[1px] opacity-50"/>
          <button className="text-left hover:opacity-80">Contact</button>
          <div className="my-4 flex items-center gap-3" >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl"/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl"/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl"/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white text-2xl"/>
            </a>
          </div>
        </div>
    </div>
    }
    </>
  );
};

export default Navbar;
