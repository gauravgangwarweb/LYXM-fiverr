import Link from "next/link";
import CustomersCarousel from "./CustomersCarousel";

const customersData = [
  {
    img: "/customers/gastro-market.png",
    challenge:
      "Their in-house mixology needed a way to experiment with innovative cocktail recipes tailored to a dynamic menu, all without sacrificing quality or consistency when the mixologist wasn't on-site.",
    solution:
      "By combining our advanced dispensing technology with a robust recipe library, Gastro Market can effortlessly introduce new, on-trend cocktails at scale—ensuring every drink meets the same high standard, even in the mixologist’s absence.",
  },
  {
    img: "/customers/santo-pecado.png",
    challenge:
      "Delivering a high-end, tailored bar experience during in-house concerts, with beverages crafted for each artist and audience.",
    solution:
      "We collaborate on event-specific menus, leveraging Elyxm’s precision to serve customized drinks that reflect the concert’s vibe, ensuring every guest feels part of the show.",
  },
  {
    img: "/customers/monica-varela.png",
    challenge:
      "Creating a distinct, on-brand beverage experience that complements unique jewelry collections.",
    solution:
      "Elyxm’s customizable recipes allow Monica Varela to pair exclusive cocktails with her designs—enhancing store events through taste and visual synergy.",
  },
  {
    img: "/customers/dominican-music-week.png",
    challenge:
      "Offering quality cocktails in a loud, club-like atmosphere that previously limited drink options.",
    solution:
      "Our streamlined system operates quickly and efficiently, enabling El Cielo to expand its menu from basic offerings to a full cocktail range—without increasing complexity or wait times.",
  },
];

const MeetOurCus = () => {
  return (
    <section className="-mt-80 md:-mt-72 lg:-mt-96 mb-16">
      <div className="flex flex-col md:flex-row justify-center md:justify-between px-4 md:px-8">
        <h2 className="text-[#f5f5f7] text-[32px] md:text-[56px] font-medium leading-none">
          Meet Our <br className="hidden md:block" /> Pioneer Clients
        </h2>
        <Link className="text-white hover:text-[#a0a7ac] border border-white self-center px-3 py-1.5 rounded-md mt-4 md:mt-0" href="#">Learn More</Link>
      </div>
      <div className="w-full mt-10 md:pl-10 px-8 md:px-0">
        <CustomersCarousel customers={customersData} />
      </div>
    </section>
  );
};

export default MeetOurCus;
