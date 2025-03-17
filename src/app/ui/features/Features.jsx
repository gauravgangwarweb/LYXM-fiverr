import { useTranslations } from "next-intl";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const t = useTranslations("features")

  const featuresData = [
    {
      img: "/features/festivals.png",
      title: `${t("cardtitle1")}`,
      desc:
        `${t("carddiscription1")}`,
      link: "#",
    },
    {
      img: "/features/wedding-tablet.png",
      title: `${t("cardtitle2")}`,
      desc:
        `${t("carddiscription2")}`,
      link: "#",
    },
    {
      img: "/features/brands.png",
      title: `${t("cardtitle3")}`,
      desc:
        `${t("carddiscription3")}`,
      link: "#",
    },
    {
      img: "/features/tradeshow.png",
      title: `${t("cardtitle4")}`,
      desc:
        `${t("carddiscription4")}`,
      link: "#",
    }
  ]

  return (
    <section className="bg-[#ffffff] pt-8 md:pt-36 px-4 lg:px-28">
      <div className="flex flex-col items-center md:grid grid-cols-1 md:grid-cols-2">
        <h2 className="text-[32px] md:text-[56px] text-[#1e2022] leading-[60px] md:self-start">
          {t("title")}
        </h2>
        <div className="flex items-end justify-end md:pl-20 lg:pl-40">
          <p className="text-lg text-[#1e2022] self-end">
            {t("subtitle")}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6 lg:gap-14 mt-20">
        {
          featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))
        }
      </div>
    </section>
  );
};

export default Features;
