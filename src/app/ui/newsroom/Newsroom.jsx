import Link from "next/link";
import NewsCarousel from "./NewsCarousel";

const newsData = [
  {
    image: "/newsroom/roberto-cavada.png",
    title: "Inspired by the resilience of our Los Angeles community",
    author: {
        name: "Maddie Frame",
        image: "/newsroom/demo-img.webp",
    }
  },
  {
    image: "/newsroom/notiultimas.png",
    title: "Vestaboard Partners with NBPA to inspire players, teams and community",
    author: {
        name: "Maddie Frame",
        image: "/newsroom/demo-img.webp",
    }
  },
  {
    image: "/newsroom/machine-at-monica-varela.png",
    title: "Vestaboard White features in Cool Material's Holiday Gift Guide",
    author: {
        name: "Maddie Frame",
        image: "/newsroom/demo-img.webp",
    }
  },
  // Add more news items as needed
];

const Newsroom = () => {
  return (
    <section className="bg-[#171918] px-4 md:px-8 py-20">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8">
        <h2 className="text-[#f5f5f7] text-[32px] md:text-[56px] font-medium leading-none">
          Newsroom
        </h2>
        <Link className="group flex gap-2" href="#">
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
        </Link>
      </div>
      <div className="w-full mt-10 md:pl-10 px-0">
        <NewsCarousel news={newsData} />
      </div>
    </section>
  );
};

export default Newsroom;
