import ElyxmFlow from "./ui/elyxm-flow/ElyxmFlow";
import Features from "./ui/features/Features";
import Hero from "./ui/hero/Hero";
import MeetOurCus from "./ui/meet-our-cus/MeetOurCus";
import Newsroom from "./ui/newsroom/Newsroom";
import SeenIn from "./ui/seen/SeenIn";
import SignupCta from "./ui/signup-cta/SignupCta";
import SmartSips from "./ui/smart-sips/SmartSips";
import StackedCards from "./ui/stacked-cards/StackedCards";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <SeenIn />
        <SmartSips />
        <ElyxmFlow />
        <Features />
        <SignupCta/>
        <StackedCards/>
        <MeetOurCus />
        <Newsroom />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
