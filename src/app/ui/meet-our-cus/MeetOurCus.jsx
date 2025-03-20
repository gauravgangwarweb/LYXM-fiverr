import Link from "next/link";
import CustomersCarousel from "./CustomersCarousel";
import { useTranslations } from "next-intl";

const MeetOurCus = () => {
  const t = useTranslations("meetOurCus");

  const customersData = [
    {
      img: "/customers/gastro-market.png",
      challenge:
        `${t("challenge1")}`,
      solution:
        `${t("solution1")}`,
    },
    {
      img: "/customers/santo-pecado.png",
      challenge:
        `${t("challenge2")}`,
      solution:
        `${t("solution2")}`,
    },
    {
      img: "/customers/monica-varela.png",
      challenge:
        `${t("challenge3")}`,
      solution:
        `${t("solution3")}`,
    },
    {
      img: "/customers/dominican-music-week.png",
      challenge:
        `${t("challenge4")}`,
      solution:
        `${t("solution4")}`,
    },
  ];

  return (
    <section className="-mt-72 md:-mt-72 lg:-mt-96 mb-16">
      <div className="flex flex-col md:flex-row justify-center md:justify-between px-4 md:px-8">
        <h2 className="w-full text-[#f5f5f7] text-[32px] md:text-[56px] font-medium leading-none">
          {t("title")}
        </h2>
        {/* <Link className="text-white hover:text-[#a0a7ac] border border-white self-center px-3 py-1.5 rounded-md mt-4 md:mt-0" href="#">Learn More</Link> */}
      </div>
      <div className="w-full mt-10 px-8 md:px-8">
        <CustomersCarousel customers={customersData} />
      </div>
    </section>
  );
};

export default MeetOurCus;
