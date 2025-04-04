import Footer from "@/app/ui/footer/Footer";
import GrayNavbarProvider from "@/app/ui/gray-navbar/GrayNavbarProvider";
import { useTranslations } from "next-intl";


const FAQ = () => {
    const t = useTranslations("faq");
  return (
    <>
      <GrayNavbarProvider />
      <section className="bg-[#171818] w-full py-16 md:py-20 px-4 md:px-24">
        <p className="text-[#f5f5f7] text-[26px] md:text-[56px]">
          {t("title")}
        </p>
        {/* faq 1 */}
        <div className="w-full flex flex-col md:flex-row border-t text-[#f5f5f7] border-white py-10 mt-4">
            <div className="w-full md:w-1/2 pr-0 md:pr-16">
                <p className="text-[20px] md:text-[34px]">{t("faq_1.question")}</p>
            </div>
            <div className="w-full md:w-1/2 text-base md:text-lg mt-6 md:mt-0">
                <p className="">{t("faq_1.answer.paragraph_1")}</p>
            </div>
        </div>
        {/* faq 2 */}
        <div className="w-full flex flex-col md:flex-row border-t text-[#f5f5f7] border-white py-10 mt-4">
            <div  className="w-full md:w-1/2 pr-0 md:pr-16">
                <p className="text-[20px] md:text-[34px]">{t("faq_2.question")}</p>
            </div>
            <div className="w-full md:w-1/2 text-base md:text-lg mt-6 md:mt-0">
                <p className="">{t("faq_2.answer.paragraph_1")}</p>
            </div>
        </div>
        {/* faq 3 */}
        <div className="w-full flex flex-col md:flex-row border-t text-[#f5f5f7] border-white py-10 mt-4">
            <div className="w-full md:w-1/2 pr-0 md:pr-16">
                <p className="text-[20px] md:text-[34px]">{t("faq_3.question")}</p>
            </div>
            <div className="w-full md:w-1/2 text-base md:text-lg mt-6 md:mt-0">
                <p className="">{t("faq_3.answer.paragraph_1")}</p>
            </div>
        </div>
        {/* faq 4 */}
        <div className="w-full flex flex-col md:flex-row border-t text-[#f5f5f7] border-white py-10 mt-4">
            <div className="w-full md:w-1/2 pr-0 md:pr-16">
                <p className="text-[20px] md:text-[34px]">{t("faq_4.question")}</p>
            </div>
            <div className="w-full md:w-1/2 text-base md:text-lg mt-6 md:mt-0">
                <p className="">{t("faq_4.answer.paragraph_1")}</p>
            </div>
        </div>
        {/* faq 5 */}
        <div className="w-full flex flex-col md:flex-row border-t text-[#f5f5f7] border-white py-10 mt-4">
            <div className="w-full md:w-1/2 pr-0 md:pr-16">
                <p className="text-[20px] md:text-[34px]">{t("faq_5.question")}</p>
            </div>
            <div className="w-full md:w-1/2 text-base md:text-lg mt-6 md:mt-0">
                <p className="">{t("faq_5.answer.paragraph_1")}</p>
            </div>
        </div>
        {/* faq 6 */}
        <div className="w-full flex flex-col md:flex-row border-t text-[#f5f5f7] border-white py-10 mt-4">
            <div className="w-full md:w-1/2 pr-0 md:pr-16">
                <p className="text-[20px] md:text-[34px]">{t("faq_6.question")}</p>
            </div>
            <div className="w-full md:w-1/2 text-base md:text-lg mt-6 md:mt-0">
                <p className="">{t("faq_6.answer.paragraph_1")}</p>
            </div>
        </div>
        {/* faq 7 */}
        <div className="w-full flex flex-col md:flex-row border-t text-[#f5f5f7] border-white py-10 mt-4">
            <div className="w-full md:w-1/2 pr-0 md:pr-16">
                <p className="text-[20px] md:text-[34px]">{t("faq_7.question")}</p>
            </div>
            <div className="w-full md:w-1/2 text-base md:text-lg mt-6 md:mt-0">
                <p className="">{t("faq_7.answer.paragraph_1")}</p>
            </div>
        </div>
        {/* faq 8 */}
        <div className="w-full flex flex-col md:flex-row border-t text-[#f5f5f7] border-white py-10 mt-4">
            <div className="w-full md:w-1/2 pr-0 md:pr-16">
                <p className="text-[20px] md:text-[34px]">{t("faq_8.question")}</p>
            </div>
            <div className="w-full md:w-1/2 text-base md:text-lg mt-6 md:mt-0">
                <p className="">{t("faq_8.answer.paragraph_1")}</p>
            </div>
        </div>
        {/* faq 9 */}
        <div className="w-full flex flex-col md:flex-row border-t text-[#f5f5f7] border-white py-10 mt-4">
            <div className="w-full md:w-1/2 pr-0 md:pr-16">
                <p className="text-[20px] md:text-[34px]">{t("faq_9.question")}</p>
            </div>
            <div className="w-full md:w-1/2 text-base md:text-lg mt-6 md:mt-0">
                <p className="">{t("faq_9.answer.paragraph_1")}</p>
            </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;