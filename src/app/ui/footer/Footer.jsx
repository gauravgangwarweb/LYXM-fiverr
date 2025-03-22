import { countries } from "@/lib/countries";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import FooterForm from "./FooterForm";
import ContactUsButton from "@/components/ui/contactusButton";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("signUpForm")
  const buttonT = useTranslations("buttons") //for the contact us button
  const linksText = useTranslations("sidebarContents")
  
  // translation text for form
  const translations = {
    firstName: t("field1"),
    lastName: t("field2"),
    email: t("field3"),
    country: t("field4"),
    interests: {
      interest1: t("field5.option1"),
      interest2: t("field5.option2"),
      interest3: t("field5.option3"),
      interest4: t("field5.option4"),
    },
    button: t("buttonText"),
  }
  
  //translation text for contact us button
  const buttonText = {
    contactUs: buttonT("contactButton")
  }

  return (
    <footer className="bg-[#0a0a0b]">
      <div className="flex flex-col-reverse md:flex-row justify-between py-20 px-6 lg:px-24">
        <div className="flex flex-col md:flex-row gap-24 md:gap-12 lg:gap-24">
          <div className="flex flex-col mt-10 md:mt-0">
            <ContactUsButton text={buttonText} />
            <hr className="border-gray-500 mt-5" />
            <div className="mt-5 flex flex-col">
              <Link className="text-[#f5f5f7] hover:text-[#a0a7ac]" href="/">
                {linksText("meet")}
              </Link>
              <Link className="text-[#f5f5f7] hover:text-[#a0a7ac]" href="/">
                {linksText("faq")}
              </Link>
              <Link className="text-[#f5f5f7] hover:text-[#a0a7ac]" href="/">
                {linksText("invest")}
              </Link>
              <Link className="text-[#f5f5f7] hover:text-[#a0a7ac]" href="/">
                {linksText("legal")}
              </Link>
            </div>
          </div>
          {/* <div className="flex flex-col mt-10 md:mt-0">
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
          </div> */}
        </div>
        <div className="md:w-[400px]">
          <h5 className="text-[24px]">{buttonText.contactUs}</h5>
          <FooterForm trans={translations} />
          {/* <form className="flex flex-col mt-4">
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
                className="w-full md:w-fit mt-[6px] px-2 py-2 border border-white outline-none bg-inherit text-inherit rounded-md"
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
          </form> */}
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
              <FaXTwitter className="text-white text-2xl" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61570435444029" target="_blank">
              <FaFacebookF className="text-white text-2xl" />
            </Link>
            <Link href="https://www.instagram.com/elyxm.bar" target="_blank">
              <FaInstagram className="text-white text-2xl" />
            </Link>
            <Link href="#">
              <FiYoutube className="text-white text-2xl" />
            </Link>
          </div>
          <Link className="mt-4" href="#">
            <img
              className="w-32"
              loading="lazy"
              src="/logo-footer.png"
              alt="footer-logo"
            />
          </Link>
          <p className="text-xs text-[#f5f5f7] mt-2">
            Copyright © 2025, ELYXM, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
