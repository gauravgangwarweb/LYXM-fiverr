import { useTranslations } from "next-intl";
import Link from "next/link";

const SmartSips = () => {
    const t = useTranslations("smartSips")
    return (
        <section className="bg-[#ffffff] px-2 md:px-0 py-8 md:py-20 md:pr-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <img className="md:h-full object-cover rounded-xl" loading="lazy" src="/smart-sips/machine-on-bar.webp" alt="machine-on-bar" />
                <div className="flex flex-col items-start px-4 md:px-0 md:pl-8 lg:pl-20 lg:pr-56 mt-6 md:mt-0">
                    <h2 className="text-3xl font-medium leading-tight tracking-tight text-primaryDark lg:text-[56px]">{t("title")}</h2>
                    <p class="mb-8 text-lg leading-relaxed font-normal text-[#a0a7ac] mt-4">{t("discription")}</p>
                    {/* <Link class="group inline-flex items-center gap-3 hover:opacity-8 text-primaryDark" href="#"><span class="pb-1 border-b border-background">Shop Now</span><svg class="align-middle transition-transform duration-300 ease-in-out group-hover:translate-x-1" width="24" height="24" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M133.12 611.84h803.84v51.2H133.12zM806.144 712.3968l32.9472 39.168-237.0048 199.4752-32.9728-39.168z"></path><path d="M658.0992 276.4544l283.5968 336.7936-39.168 32.9728-283.5968-336.7936z"></path></svg></Link> */}
                </div>
            </div>
        </section>
    )
}

export default SmartSips;