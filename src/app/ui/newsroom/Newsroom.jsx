import Link from "next/link";
import NewsCarousel from "./NewsCarousel";
import { useTranslations } from "next-intl";

const Newsroom = () => {
  const t = useTranslations("newsRoom");
  const newsData = [
    {
      image: "/newsroom/roberto-cavada.png",
      title: `${t("title1")}`,
      author: {
          name: "RC Noticias",
          image: "/newsroom/demo-img.webp",
      },
      link: "https://robertocavada.com/tecnologia/2025/01/24/elyxm-la-primera-barra-inteligente-disenada-y-fabricada-en-republica-dominicana/"
    },
    {
      image: "/newsroom/notiultimas.png",
      title: `${t("title2")}`,
      author: {
          name: "NotiUltimas",
          image: "/newsroom/demo-img.webp",
      },
      link: "https://notiultimas.com/elyxm-la-primera-barra-inteligente-disenada-y-fabricada-en-republica-dominicana/"
    },
    {
      image: "/newsroom/machine-at-monica-varela.png",
      title: `${t("title3")}`,
      author: {
          name: "Aldrys Sánchez",
          image: "/newsroom/demo-img.webp",
      },
      link: "https://3chismesy1cafe.com/2025/01/22/para-los-amantes-de-los-cocteles-llega-mixologia-a-rd-la-barra-inteligente/"
    },
    // Add more news items as needed
  ];
  return (
    <section className="bg-[#171918] px-4 md:px-8 py-20">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8">
        <h2 className="text-[#f5f5f7] text-[32px] md:text-[56px] leading-none">
          {t("heading")}
        </h2>
        {/* <Link className="group flex gap-2" href="#">
          <span className="text-base font-medium underline underline-offset-8">
            View all news
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
        </Link> */}
      </div>
      <div className="w-full mt-10 px-0 md:px-10">
        <NewsCarousel news={newsData} />
      </div>
    </section>
  );
};

export default Newsroom;
