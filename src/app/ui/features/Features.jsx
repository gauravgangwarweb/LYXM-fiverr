import FeatureCard from "./FeatureCard";

const featuresData = [
  {
    img: "/features/festivals.png",
    title: "Concerts & Festivals",
    desc:
      "Serve massive crowds quickly without sacrificing quality. Our tech-driven approach ensures consistently perfect pours, even at the largest venues.",
    link: "#",
  },
  {
    img: "/features/wedding-tablet.png",
    title: "Weddings & Celebrations",
    desc:
      "Curate an unforgettable beverage experience that matches the elegance and exclusivity of your event. Every detail, from flavor profiles to presentation, is meticulously crafted.",
    link: "#",
  },
  {
    img: "/features/brands.png",
    title: "Leading Spirit Brands",
    desc:
      "Showcase your portfolio at premier events. With Elyxm Flow, each pour reflects your brand’s identity, guaranteeing a consistent, high-impact impression on attendees.",
    link: "#",
  },
  {
    img: "/features/tradeshow.png",
    title: "Corporate & Conferences",
    desc:
      "Elevate networking sessions and after-hours mixers with precision-crafted cocktails that leave a lasting impression—perfect for boosting engagement and brand reputation.",
    link: "#",
  }
]

const Features = () => {
  return (
    <section className="bg-[#ffffff] pt-8 md:pt-36 px-4 lg:px-28">
      <div className="flex flex-col items-center md:grid grid-cols-1 md:grid-cols-2">
        <h2 className="text-[32px] md:text-[56px] text-[#1e2022] leading-[60px] md:self-start">
          Elyxm Flow at Work
        </h2>
        <div className="flex items-end justify-end md:pl-20 lg:pl-40">
          <p className="text-lg text-[#1e2022] self-end">
            Elyxm Flow revolutionizes mixology for events at scale—whether
            you're energizing a festival or curating a tailored luxury
            celebration. With our blend of advanced technology and masterful
            craftsmanship, you serve consistently exceptional cocktails that
            captivate guests and streamline event operations.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6 lg:gap-14 mt-20">
        {
          featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))
        }
      </div>
    </section>
  );
};

export default Features;
