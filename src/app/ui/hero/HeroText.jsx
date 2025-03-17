import { useTranslations } from "next-intl";

const HeroText = () => {
  const t = useTranslations("hero")
  return (
    <div>
      <h1 className="text-[32px] lg:text-[64px] text-foreground leading-none">
        {t("title")}
      </h1>
      <p className="text-[#4D4D4D] text-2xl font-medium mt-4">
        {t("discription")}
      </p>
    </div>
  );
};

export default HeroText;
