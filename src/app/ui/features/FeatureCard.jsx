import Link from "next/link";

const FeatureCard = ({img, title, desc, link}) => {
  return (
    <div className="rounded-2xl bg-[#e6e6ea]">
      <img
        className="w-full rounded-t-2xl"
        loading="lazy"
        src={img}
        alt="festivals"
      />
      <div className="p-8">
        <h4 className="text-[30px] md:text-[34px] text-[#1e2022] md:font-bold lg:font-normal">
            {title}
        </h4>
        <div className="flex flex-col md:flex-row justify-between mt-2">
          <p className="w-full md:w-[70%] text-lg text-[#1e2022]">
            {desc}
          </p>
          <div className="flex justify-start md:justify-end items-end mt-4 md:mt-0">
            {/* <Link
              className="bg-white hover:bg-[#343a40] text-[#343a40] hover:text-[#a0a7ac] text-center font-bold md:font-normal border-[1.5px] border-[#343a40] p-1 lg:px-3 lg:py-2 rounded-md"
              href={link}
            >
              Learn More
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;