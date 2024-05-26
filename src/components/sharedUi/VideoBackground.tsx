import { ReactNode, useEffect, useRef } from "react";
export default function VideoBackground({ children }: { children: ReactNode }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (video && isMobile) {
      video.pause();
    }

    const handleClick = () => {
      if (video?.paused) {
        video.play();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        playsInline
        autoPlay
        loop
        muted
        preload="auto"
        poster="/hero-bg.jpg"
        className="w-full h-full object-cover absolute top-0 xl:top-0 left-0 z-0"
      >
        <source src="/video2.mp4" type="video/mp4" />
      </video>
      <div className="z-10 relative">{children}</div>
    </div>
  );
}
