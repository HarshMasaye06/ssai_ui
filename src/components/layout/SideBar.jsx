import { useOverlay } from "@/hooks/useVideoOverlay";
// video components
import VideoSection from "./videos/VideoSection";
import VideoOverlay from "./videos/VideoOverlay";
// image components
import ImageSection from "./images/ImageSection";
import ImageOverlay from "./images/ImageOverlay";

const SideBar = () => {
  const { isVideoOverlayOpen, isImageOverlayOpen } = useOverlay();

  return (
    <div className="h-screen border-r-[3px] border-[#2C363F] flex flex-col">
      {isVideoOverlayOpen && <VideoOverlay />}
      {isImageOverlayOpen && <ImageOverlay />}
      {/* Images Section */}
      <ImageSection />
      {/* Videos Section */}
      <VideoSection />
    </div>
  );
};

export default SideBar;
