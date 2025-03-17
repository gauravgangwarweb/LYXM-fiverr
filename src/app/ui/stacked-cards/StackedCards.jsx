import { LuApple } from "react-icons/lu";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { FiGlobe } from "react-icons/fi";
import Link from "next/link";
import { useTranslations } from "next-intl";

const StackedCards = () => {
  const t = useTranslations("stackedCards")
  return (
    <section className=" bg-[#171818] text-[#f5f5f7] pt-8 md:pt-44 pb-[580px] px-0 md:px-4 lg:px-0">
      <div className="mx-auto max-w-[870px]">
        <div className="px-4">
          <h2 className="text-[32px] md:text-[56px] text-center font-medium md:font-normal">
            {t("title")}
          </h2>
          <p className="pt-4 md:pt-7 text-lg text-[#a0a7ac] text-center">
            {t("subtitle")}
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-20">
          <div className="bg-[#e6e6ea] rounded-none md:rounded-lg text-black px-4 md:px-0 py-6 lg:py-16 md:pl-16 md:pr-40 w-full max-w-[500px]">
            <h2 className="text-[20px] md:text-[34px] font-medium">
              {t("cardtitle1")}
            </h2>
            <p className="my-6 text-lg">
              {t("carddiscription1")}
            </p>
            <div className="flex gap-5">
              <LuApple className="text-2xl" />
              <HiOutlineDeviceMobile className="text-2xl" />
              <FiGlobe className="text-2xl" />
            </div>
            <Link className="group flex gap-2 mt-6" href="#">
              <span className="text-base font-medium underline underline-offset-8">
                Learn More
              </span>
              <svg
                class="align-middle transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M133.12 611.84h803.84v51.2H133.12zM806.144 712.3968l32.9472 39.168-237.0048 199.4752-32.9728-39.168z"></path>
                <path d="M658.0992 276.4544l283.5968 336.7936-39.168 32.9728-283.5968-336.7936z"></path>
              </svg>
            </Link>
          </div>
          <div className="md:py-6 rounded-md">
            <img
              className="rounded-xl md:-ml-24"
              loading="lazy"
              src="/stacked-cards/dashboard.png"
              alt="dashboard"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-end mt-20 relative">
          <div className="md:py-6 rounded-md">
            <img
              className="w-72 md:w-96 lg:w-[550px] absolute top-72 md:top-0 lg:-top-8 left-12 md:-left-8 lg:-left-10"
              loading="lazy"
              src="/stacked-cards/router.png"
              alt="dashboard"
            />
          </div>
          <div className="bg-[#e6e6ea] rounded-none md:rounded-lg text-black px-4 md:px-0 py-16 lg:py-24 md:pr-8 lg:pr-16 md:pl-16 lg::pl-32 w-full max-w-[500px]">
            <h2 className="text-[20px] md:text-[34px] font-medium">
            {t("cardtitle2")}
            </h2>
            <p className="my-6 text-lg">
            {t("carddiscription2")}
            </p>
            <div className="flex gap-5">
              <LuApple className="text-2xl" />
              <HiOutlineDeviceMobile className="text-2xl" />
              <FiGlobe className="text-2xl" />
            </div>
            <Link className="group flex gap-2 mt-6" href="#">
              <span className="text-base font-medium underline underline-offset-8">
                Learn More
              </span>
              <svg
                class="align-middle transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M133.12 611.84h803.84v51.2H133.12zM806.144 712.3968l32.9472 39.168-237.0048 199.4752-32.9728-39.168z"></path>
                <path d="M658.0992 276.4544l283.5968 336.7936-39.168 32.9728-283.5968-336.7936z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackedCards;
