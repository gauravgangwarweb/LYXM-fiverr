import Link from "next/link";

const Features = () => {
  return (
    <section className="bg-[#ffffff] pt-8 md:pt-36 px-4 md:px-28">
      <div className="flex flex-col items-center md:grid grid-cols-1 md:grid-cols-2">
        <h2 className="text-[32px] md:text-[56px] text-[#1e2022] leading-[60px]">
          Elyxm Flow at Work
        </h2>
        <div className="flex items-end justify-end md:pl-40">
          <p className="text-lg text-[#1e2022] self-end">
            Elyxm Flow revolutionizes mixology for events at scale—whether
            you're energizing a festival or curating a tailored luxury
            celebration. With our blend of advanced technology and masterful
            craftsmanship, you serve consistently exceptional cocktails that
            captivate guests and streamline event operations.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-20">
        <div className="rounded-2xl bg-[#e6e6ea]">
          <img
            className="w-full rounded-t-2xl"
            loading="lazy"
            src="/features/festivals.png"
            alt="festivals"
          />
          <div className="p-8">
            <h4 className="text-[30px] md:text-[34px] text-[#1e2022]">Concerts & Festivals</h4>
            <div className="flex flex-col md:flex-row justify-between mt-2">
              <p className="w-full md:w-[70%] text-lg text-[#1e2022]">
                Serve massive crowds quickly without sacrificing quality. Our
                tech-driven approach ensures consistently perfect pours, even at
                the largest venues.
              </p>
              <div className="flex justify-start md:justify-end items-end mt-4 md:mt-0">
                <Link
                  className="bg-white hover:bg-[#343a40] text-[#343a40] hover:text-[#a0a7ac] border-[1.5px] border-[#343a40] px-3 py-2 rounded-md"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-[#e6e6ea]">
          <img
            className="w-full rounded-t-2xl"
            loading="lazy"
            src="/features/wedding-tablet.png"
            alt="festivals"
          />
          <div className="p-8">
            <h4 className="text-[30px] md:text-[34px] text-[#1e2022]">
              Weddings & Celebrations
            </h4>
            <div className="flex flex-col md:flex-row justify-between mt-2">
              <p className="w-full md:w-[70%] text-lg text-[#1e2022]">
                Curate an unforgettable beverage experience that matches the
                elegance and exclusivity of your event. Every detail, from
                flavor profiles to presentation, is meticulously crafted.
              </p>
              <div className="flex justify-start md:justify-end items-end mt-4 md:mt-0">
                <Link
                  className="bg-white hover:bg-[#343a40] text-[#343a40] hover:text-[#a0a7ac] border-[1.5px] border-[#343a40] px-3 py-2 rounded-md"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-[#e6e6ea]">
          <img
            className="w-full rounded-t-2xl"
            loading="lazy"
            src="/features/brands.png"
            alt="festivals"
          />
          <div className="p-8">
            <h4 className="text-[30px] md:text-[34px] text-[#1e2022]">
              Leading Spirit Brands
            </h4>
            <div className="flex flex-col md:flex-row justify-between mt-2">
              <p className="w-full md:w-[70%] text-lg text-[#1e2022]">
                Showcase your portfolio at premier events. With Elyxm Flow, each
                pour reflects your brand’s identity, guaranteeing a consistent,
                high-impact impression on attendees.
              </p>
              <div className="flex justify-start md:justify-end items-end mt-4 md:mt-0">
                <Link
                  className="bg-white hover:bg-[#343a40] text-[#343a40] hover:text-[#a0a7ac] border-[1.5px] border-[#343a40] px-3 py-2 rounded-md"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-[#e6e6ea]">
          <img
            className="w-full rounded-t-2xl"
            loading="lazy"
            src="/features/tradeshow.png"
            alt="festivals"
          />
          <div className="p-8">
            <h4 className="text-[30px] md:text-[34px] text-[#1e2022]">
              Corporate & Conferences
            </h4>
            <div className="flex flex-col md:flex-row justify-between mt-2">
              <p className="w-full md:w-[70%] text-lg text-[#1e2022]">
                Elevate networking sessions and after-hours mixers with
                precision-crafted cocktails that leave a lasting
                impression—perfect for boosting engagement and brand reputation.
              </p>
              <div className="flex justify-start md:justify-end items-end mt-4 md:mt-0">
                <Link
                  className="bg-white hover:bg-[#343a40] text-[#343a40] hover:text-[#a0a7ac] border-[1.5px] border-[#343a40] px-3 py-2 rounded-md"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
