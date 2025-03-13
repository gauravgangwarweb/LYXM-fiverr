import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
const Hero = () => {
  return (
    <section className="relative bg-[#141416] pt-20">
      <div className="flex justify-center items-center lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center pl-6 lg:pl-16 py-14 md:py-32">
          <h1 className="text-[32px] lg:text-[64px] text-foreground leading-none">
            Meet the future of mixology
          </h1>
          <p className="text-[#4D4D4D] text-2xl font-medium mt-4">
            From the first sip to the final drop, Elyxm sets the standard for
            what a cocktail experience should be—Expertly Crafted and Flawlessly
            Poured.
          </p>
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
          <div className="h-[250px] md:h-[500px] w-full top-0 right-0 border-transparent relative">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover md:rounded-l-2xl absolute top-12"
              src="/hero-video.mp4"
            ></video>
            <Dialog>
              <DialogTrigger asChild>
                <button className="absolute flex gap-2 items-center top-64 md:top-20 left-52 md:left-10">
                  <span className="">Watch</span>
                  <span className="border rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-play size-5"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="w-full border-0 bg-black">
                <video autoPlay controls loop className="h-full w-full object-contain aspect-square" src="/hero-video.mp4"></video>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
