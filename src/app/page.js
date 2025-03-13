import ElyxmFlow from "./ui/elyxm-flow/ElyxmFlow";
import Features from "./ui/features/Features";
import Hero from "./ui/hero/Hero";
import SeenIn from "./ui/seen/SeenIn";
import SmartSips from "./ui/smart-sips/SmartSips";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <SeenIn />
        <SmartSips />
        <ElyxmFlow />
        <Features />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
