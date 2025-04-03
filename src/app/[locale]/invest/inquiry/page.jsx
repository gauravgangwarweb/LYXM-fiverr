import Footer from "@/app/ui/footer/Footer";
import InquiryForm from "./InquiryForm";
import GrayNavbarProvider from "@/app/ui/gray-navbar/GrayNavbarProvider";
import { useTranslations } from "next-intl";

const Inquiry = () => {
  const t = useTranslations("investInquiry")
  const translationText = {
      firstName: t("formFields.field1"),
      lastName: t("formFields.field2"),
      email: t("formFields.field3"),
      investorType: {
        title: t("formFields.field4.title"),
        options: {
          option1: t("formFields.field4.options.option1"),
          option2: t("formFields.field4.options.option2"),
          option3: t("formFields.field4.options.option3"),
          option4: t("formFields.field4.options.option4"),
          option5: t("formFields.field4.options.option5"),
        },
        note: {
          title: t("formFields.field4.note.title"),
          description_1: t("formFields.field4.note.description_1"),
          description_2: t("formFields.field4.note.description_2"),
        }
      },
      investmentRange: {
        title: t("formFields.field5.title"),
        options: {
          option1: t("formFields.field5.options.option1"),
          option2: t("formFields.field5.options.option2"),
          option3: t("formFields.field5.options.option3"),
          option4: t("formFields.field5.options.option4"),
        },
      }
  };
  return (
    <>
      <GrayNavbarProvider />
      <section className="bg-[#171818] w-full py-16 md:py-16 px-6 md:px-16">
        <p className="text-[#f5f5f7] text-[26px] md:text-[56px]">
          {t("title")}
          {/* Invester Inquiry */}
        </p>
        <p className="text-lg mt-4">
          {t("description")}
        </p>
        <InquiryForm formTranslations={translationText} />
        <p className="text-lg text-[#f5f5f7] italic mt-6">{t("paragraph_1")}</p>
        <p className="text-lg text-[#f5f5f7] italic mt-6">{t("paragraph_2")}</p>
      </section>
      <Footer />
    </>
  );
};

export default Inquiry;
