import { useOverlay } from "@/hooks/useVideoOverlay";
// video components
import VideoSection from "./videos/VideoSection";
import VideoOverlay from "./videos/VideoOverlay";
// image components
import ImageSection from "./images/ImageSection";
import ImageOverlay from "./images/ImageOverlay";
import { useLayout } from "@/hooks/useLayout";

import { motion } from "framer-motion";

const SideBar = () => {
  const { isVideoOverlayOpen, isImageOverlayOpen } = useOverlay();
  const { isSideBarOpen } = useLayout();

  return (
    <motion.div
      initial={{ width: "22vw", scaleX: 1 }}
      animate={{
        width: isSideBarOpen ? "22vw" : "3px",
        scaleX: isSideBarOpen ? 1 : 0,
        transformOrigin: "left",
      }}
      transition={{ duration: 0.3 }}
      exit={{ width: "22vw", scaleX: 1 }}
      className={` ${
        isSideBarOpen ? "w-[22vw]" : "w-[3px]"
      } h-screen border-r-[3px] border-[#2C363F] flex flex-col`}
    >
      {isVideoOverlayOpen && <VideoOverlay />}
      {/* {isImageOverlayOpen && <ImageOverlay />} */}
      {/* Images Section */}
      {/* <ImageSection /> */}
      {/* Videos Section */}
      <VideoSection />
    </motion.div>
  );
};

export default SideBar;
