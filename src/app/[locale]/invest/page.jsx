import Footer from "@/app/ui/footer/Footer";
import GrayNavbarProvider from "@/app/ui/gray-navbar/GrayNavbarProvider";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Invest = () => {
  const t = useTranslations("invest");

  return (
    <>
      <GrayNavbarProvider />
      <section className="bg-[#171818] w-full py-16 pb-20 md:pb-36 px-4 md:px-24">
        <p className="text-[#f5f5f7] text-[26px] md:text-[56px]">
          {t("heading")}
        </p>
        <div className="w-full aspect-video relative mt-4">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/x32FcQsUUH8?si=79S_8vGze4-Tg-6L"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* text-area */}
        <div className="mt-20 text-lg text-[#f5f5f7]">
          <h5 className="">{t("paragraph_1")}</h5>
          <h5 className="mt-6">{t("paragraph_2")}</h5>
          <p className="mt-6">{t("heading_list_1")}</p>
          <ul className="list-disc pl-8">
            <li className="mt-6">
              <span className="font-bold">
                {t("list_1_items.item_1.title")}
              </span>
              <span>{t("list_1_items.item_1.description")}</span>
            </li>
            <li className="mt-2">
              <span className="font-bold">
                {t("list_1_items.item_2.title")}
              </span>
              <span>{t("list_1_items.item_2.description")}</span>
            </li>
            <li className="mt-2">
              <span className="font-bold">
                {t("list_1_items.item_3.title")}
              </span>
              <span>{t("list_1_items.item_3.description")}</span>
            </li>
          </ul>
          <p className="mt-6">{t("paragraph_3")}</p>
          <p className="text-sm pl-10 mt-6">{t("note")}</p>
          <p className="mt-6">{t("paragraph_4")}</p>
        </div>
        {/* inquire button */}
        <div className="flex flex-col items-center justify-center mt-6">
          <Link
            href="invest/inquiry"
            className="self-center inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border py-2.5 group border-foreground bg-transparent hover:bg-foreground hover:border-foreground/40 font-normal text-foreground hover:text-primaryDark sm:text-lg text-base px-10 sm:py-5 h-9 transition-colors duration-800 ease-in-out"
            target="_blank"
          >
            <span className="flex gap-1">{t("button")}</span>
          </Link>
        </div>
        <div className="text-lg mt-6">
          <p className="font-bold">{t("heading_list_2")}</p>
          <ul className="text-lg list-disc pl-8 mt-4">
            <li>{t("list_2_items.item_1.title")}</li>
          </ul>
          <p className="font-bold mt-6">{t("heading_list_3")}</p>
          <ul className="text-lg list-disc pl-8 mt-4">
            <li>
              <Link
                href="https://docs.google.com/document/d/1eDzNoZ8FhhHKlRTdhyQyPsO8b6RzlhsyjCwb8ZURZHE/edit?usp=drive_link"
                target="_blank"
              >
                {t("list_3_items.item_1.title")}
              </Link>
            </li>
          </ul>
          <p className="font-bold mt-6">{t("heading_list_4")}</p>
          <ul className="text-lg list-disc pl-8 mt-4">
            <li className="">
              <Link
                href="https://docs.google.com/document/d/1zB-ICQ9ceUY0hkiwDfrSJB46q4BWgnOvuZ5wIiaTH0o/edit?usp=drive_link"
                target="_blank"
              >
                <span className="font-bold">
                  {t("list_4_items.item_1.title")}
                </span>
                <span>{t("list_4_items.item_1.description")}</span>
              </Link>
            </li>
            <li className="">
              <span className="font-bold">
                {t("list_4_items.item_2.title")}
              </span>
              <span>{t("list_4_items.item_2.description")}</span>
            </li>
          </ul>
          <p className="text-lg mt-6">{t("request_text")}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Invest;
