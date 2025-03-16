"use client";
import { useEffect, useRef } from "react";

const Video = () => {
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
        className="w-full h-full object-cover md:rounded-xl absolute top-12"
      >
        <source src="/elyxm-flow/elyxm_flow.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
