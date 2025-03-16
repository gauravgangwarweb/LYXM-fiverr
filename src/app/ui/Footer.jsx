import { countries } from "@/lib/countries";
import Link from "next/link";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0b]">
      <div className="flex flex-col-reverse md:flex-row justify-between py-20 px-4 md:px-24">
        <div className="flex flex-col md:flex-row md:gap-24">
          <div className="flex flex-col mt-10 md:mt-0">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border py-2.5 group border-foreground bg-transparent hover:bg-foreground hover:border-foreground/40 font-semibold text-foreground hover:text-primaryDark sm:text-lg text-sm px-4 sm:py-5 h-9 max-w-36 transition-colors duration-800 ease-in-out">
              <span className="flex gap-1">Shop Now</span>
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
            <hr className="border-gray-500 mt-5" />
            <div className="mt-5 flex flex-col">
              <Link className="text-[#f5f5f7] hover:text-[#a0a7ac]" href="/">
                Vestaboard
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                Vestaboard White
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                Product Detail
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                Software
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                Meet Our Customers
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                At Home
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                At Work
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                A&D / Trade
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                Dealers / Resellers
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                Refurbished
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                Inspire Community
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                FAQs
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                Developers
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                Invest
              </Link>
            </div>
          </div>
          <div className="flex flex-col mt-10 md:mt-0">
            <Link
              className="flex items-center text-[#f5f5f7] hover:text-[#a0a7ac] py-2.5  sm:py-5 h-9 max-w-36"
              href="#"
            >
              For Customers
            </Link>
            <hr className="border-gray-500 mt-5" />
            <div className="mt-5 flex flex-col">
              <Link className="text-[#f5f5f7] hover:text-[#a0a7ac]" href="/">
                Help Center
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                Newsroom
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                About Us
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                Contact
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                Press Resources
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                Affiliates
              </Link>
              <Link
                className="text-[#f5f5f7] hover:text-[#a0a7ac] mt-1"
                href="/"
              >
                Legal
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <h5 className="text-[24px]">Sign up to get the latest</h5>
          <form className="flex flex-col mt-4">
            <div>
              <label htmlFor="first-name">First Name*</label>
              <input
                type="text"
                name="first-name"
                className="w-full mt-[6px] px-2 py-2 border border-white outline-none bg-inherit text-inherit rounded-md"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="last-name">Last Name*</label>
              <input
                type="text"
                name="last-name"
                className="w-full mt-[6px] px-2 py-2 border border-white outline-none bg-inherit text-inherit rounded-md"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="email"
                placeholder="What's your email?*"
                className="w-full mt-[6px] px-2 py-2 border border-white outline-none bg-inherit text-inherit rounded-md"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label htmlFor="country">Country (dropdown)*</label>
              <select
                className="w-fit mt-[6px] px-2 py-2 border border-white outline-none bg-inherit text-inherit rounded-md"
                name="country"
              >
                <option value="">Please Select</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="interested">
                I am interested in Vestaboard:*
              </label>
              <div className="flex items-center gap-1.5 mt-2">
                <input type="checkbox" name="check" />
                <span>At home</span>
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <input type="checkbox" name="check" />
                <span>At work</span>
              </div>
            </div>
            <button className="bg-[#f5f5f7] text-[#171818] font-light text-lg py-2 rounded-md mt-4">
              Sign up
            </button>
          </form>
        </div>
      </div>
      <hr className="w-full border-gray-600" />
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-24 py-10">
        <Link href="#">
          <img loading="lazy" src="/reddot-logo.webp" alt="reddot" />
        </Link>
        <div className="flex flex-col items-start md:items-end mt-10 md:mt-0">
          <div className="flex gap-4">
            <Link href="#">
              <FaTwitter className="text-white text-2xl" />
            </Link>
            <Link href="#">
              <FaFacebookF className="text-white text-2xl" />
            </Link>
            <Link href="#">
              <FaInstagram className="text-white text-2xl" />
            </Link>
            <Link href="#">
              <FiYoutube className="text-white text-2xl" />
            </Link>
          </div>
          <Link className="mt-4" href="#">
                <img className="w-32" loading="lazy" src="/logo-footer.png" alt="footer-logo" />
          </Link>
          <p className="text-xs text-[#f5f5f7] mt-2">Copyright @ 2025, LYXM, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
