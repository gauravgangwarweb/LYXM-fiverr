import Link from "next/link";
import Video from "./Video";
import { useTranslations } from "next-intl";

const ElyxmFlow = () => {
  const t = useTranslations("elyxmFlow");
  
  const formattedTitle = t("title").replace(
    /_([^_]+)_/g, 
    '<i>$1</i>'
  );

  return (
    <section className="bg-[#f5f5f7] md:pt-16 md:pr-8">
      <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col">
        <div className="w-full md:w-1/2">
          <Video />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-4 md:px-0 md:pl-8 lg:pl-20 lg:pr-4 xl:pr-52 mt-20 md:mt-0 lg:pb-4">
          <h2 
            className="text-3xl font-normal leading-tight tracking-tight text-primaryDark lg:text-[56px]"
            dangerouslySetInnerHTML={{ __html: formattedTitle }}
          />
          <h4 className="text-xl font-normal leading-tight tracking-tight text-primaryDark lg:text-[26px]">{t("subtitle")}</h4>
          <p className="mb-2 text-lg leading-relaxed font-normal text-[#a0a7ac] mt-4">
            {t("discription")}
          </p>
          {/* <Link
            class="group inline-flex items-center gap-3 hover:opacity-8 text-primaryDark"
            href="#"
          >
            <span class="pb-1 border-b border-background">Shop Now</span>
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
      </div>
    </section>
  );
};

export default ElyxmFlow;
