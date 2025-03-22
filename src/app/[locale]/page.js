import ElyxmFlow from "../ui/elyxm-flow/ElyxmFlow";
import Features from "../ui/features/Features";
import Footer from "../ui/footer/Footer";
import Hero from "../ui/hero/Hero";
import MeetOurCus from "../ui/meet-our-cus/MeetOurCus";
import Newsroom from "../ui/newsroom/Newsroom";
import SeenIn from "../ui/seen/SeenIn";
import SignUpCtaProvider from "../ui/signup-cta/SignUpCtaProvider";
import SmartSips from "../ui/smart-sips/SmartSips";
import StackedCards from "../ui/stacked-cards/StackedCards";


export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <SeenIn />
        <SmartSips />
        <ElyxmFlow />
        <Features />
        <SignUpCtaProvider />
        <StackedCards />
        <MeetOurCus />
        <Newsroom />
      </main>
      <Footer />  
    </div>
  );
}
