"use client";
import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const HeroVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (err) {
        console.log("Video autoplay failed:", err);
      }
    };

    playVideo();
  }, []);

  return (
    <div className="h-[250px] md:h-[500px] w-full top-0 right-0 border-transparent relative">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        loop
        webkit-playsinline="true"
        x5-playsinline="true"
        preload="metadata"
        className="w-full h-full object-cover md:rounded-l-2xl absolute top-12"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Dialog>
        <DialogTrigger asChild>
          <button className="absolute flex gap-2 items-center top-64 md:top-20 left-72 md:left-10">
            <span className="">Watch</span>
            <span className="border rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play size-5"
              >
                <polygon points="6 3 20 12 6 21 6 3"></polygon>
              </svg>
            </span>
          </button>
        </DialogTrigger>
        <DialogContent className="w-full border-0 bg-black">
          <video
            autoPlay
            playsInline
            muted
            loop
            webkit-playsinline="true"
            x5-playsinline="true"
            preload="metadata"
            controls
            className="h-full w-full object-contain aspect-square"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeroVideo;
