import Link from "next/link";
import HeroVideo from "./HeroVideo";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <section className="relative bg-[#141416] pt-12 md:pt-14">
      <div className="flex justify-center items-center lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center pl-6 lg:pl-16 py-14 md:py-32 mt-14 md:mt-0">
          <HeroText />
          <div className="flex gap-6 mt-4 self-start">
            <Link className="group flex gap-2" href="#">
              <span className="text-base font-medium underline underline-offset-8">
                Shop Elyxm
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
            <Link className="group flex gap-2" href="#">
              <span className="text-base font-medium underline underline-offset-8">
                Elyxm At Work
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
          <Link href="#">
            <img className="w-28 block md:hidden mt-10" loading="lazy" src="/fast-company.webp" alt="fast-company" />
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
