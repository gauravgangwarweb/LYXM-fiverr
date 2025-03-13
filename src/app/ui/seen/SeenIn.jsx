import Link from "next/link";
import AutoPlayCarousel from "./AutoPlayCarousel";

const sliderData = [
    {
        img: "https://www.vestaboard.com/hubfs/wsj-wordmark.svg"
    },
    {
        img: "https://www.vestaboard.com/hubfs/Shape%202.svg"
    },
    {
        img: "https://www.vestaboard.com/hubfs/logo-theweek%20black-01.svg"
    },
    {
        img: "https://www.vestaboard.com/hubfs/Group%203.svg"
    },
    {
        img: "https://www.vestaboard.com/hubfs/Group%202.svg"
    },
    {
        img: "https://www.vestaboard.com/hubfs/Group.svg"
    },
    {
        img: "https://www.vestaboard.com/hubfs/Group%2016%20Copy%202.svg"
    }
]

const SeenIn = () => {
    return (
        <div className="w-full bg-[#F5F5F7] px-4 md:px-16 py-6 md:py-20">
            <div className="md:h-[120px]">
                <div className="w-full md:w-1/2 flex gap-2 items-center">
                    <p className="text-[#7E838A]">As seen in</p>
                    <AutoPlayCarousel carouselData={sliderData} />
                </div>
                <div className="hidden w-full md:flex justify-between">
                    <div></div>
                    <Link className="" href="#">
                        <img loading="lazy" src="/seen/fast-company.webp" alt="fast-company" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SeenIn;