import Link from "next/link";

const Features = () => {
  return (
    <section className="bg-[#ffffff] pt-36 px-28">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h2 className="text-[32px] md:text-[56px] text-[#1e2022] leading-[60px]">
          Elyxm Flow at Work
        </h2>
        <div className="flex items-end justify-end pl-40">
          <p className="text-lg text-[#1e2022] self-end">
            Elyxm Flow revolutionizes mixology for events at scale—whether
            you're energizing a festival or curating a tailored luxury
            celebration. With our blend of advanced technology and masterful
            craftsmanship, you serve consistently exceptional cocktails that
            captivate guests and streamline event operations.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-[#e6e6ea]">
            <img className="w-full rounded-t-2xl" loading="lazy" src="/features/festivals.png" alt="festivals" />
            <div className="px-8 py-12">
                <h4 className="text-[34px] text-[#1e2022]">Concerts & Festivals</h4>
                <div className="grid grid-cols-2 mt-2">
                    <p className="text-lg text-[#1e2022]">Serve massive crowds quickly without sacrificing quality. Our tech-driven approach ensures consistently perfect pours, even at the largest venues.</p>
                    <div className="flex justify-end items-end">

                    <Link className="text-[#343a40] border border-[#343a40] p-2 rounded-md" href="#">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
