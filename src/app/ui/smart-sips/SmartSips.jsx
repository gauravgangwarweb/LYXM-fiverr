import { useTranslations } from "next-intl";
import Link from "next/link";

const SmartSips = () => {
    const t = useTranslations("smartSips")
    return (
        <section className="bg-[#ffffff] px-2 md:px-0 py-8 md:py-20 md:pr-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <img className="md:h-full object-cover rounded-xl" loading="lazy" src="/smart-sips/machine-on-bar.webp" alt="machine-on-bar" />
                <div className="flex flex-col items-start px-4 md:px-0 md:pl-8 lg:pl-20 xl:pr-52 lg:pr-4 mt-6 md:mt-0">
                    <h2 className="text-3xl font-normal leading-tight tracking-tight text-primaryDark lg:text-[56px]">{t("title")}</h2>
                    <p class="text-lg leading-relaxed font-normal text-[#a0a7ac] mt-4">{t("discription")}</p>
                    <div className="text-lg leading-relaxed font-normal text-[#a0a7ac] mt-3 mb-10">
                        <p>{t("point1")}</p>
                        <p>{t("point2")}</p>
                        <p>{t("point3")}</p>
                        <p>{t("point4")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SmartSips;