import React, { useRef } from "react";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [hasClicked, setHasClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadedVideo, setLoadedVideo] = React.useState(0);
  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const handleMinidClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  const getVideoSource = (index) => `videos/hero-${index}.mp4`;
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
            <div onClick={handleMinidClick} className="origin-center">
              <video
                ref={nextVideoRef}
                src={getVideoSource(currentIndex + 1)}
                              loop
                              muted
                              id="current-video"
                              className="size-64 origin-center scale-150 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
