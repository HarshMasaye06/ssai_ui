import { useOverlay } from "@/hooks/useVideoOverlay";
import { motion } from "framer-motion";
import { useEffect } from "react";

const VideoSection = ({ videosInfo = [] }) => {
  const { openMiniPlayer } = useOverlay();

  const thumbNailGenerator = (video_link) => {
    try {
      const regex =
        /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|.*[?&]v=))([\w-]{11})/;
      const match = video_link.match(regex);
      return match ? match[1] : null;
    } catch (error) {
      console.error("Invalid URL:", error);
      return null;
    }
  };

  useEffect(() => {
    try {
    } catch (error) {
      console.log(error);
    }
  }, [videosInfo]);

  return (
    <div className=" h-screen overflow-auto">
      <h2 className="text-lg font-bold text-[#2C363F] p-2 sticky top-0 bg-[#F5F5F5] z-20">
        Videos
      </h2>
      <div className="flex flex-col gap-3 px-2">
        {videosInfo.map((item, index) => {
          const videoId = thumbNailGenerator(item.url);
          return (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openMiniPlayer(item)}
              key={index}
              className="bg-[#FFE66D] border-[3px] h-[10rem] hover:z-10 border-[#2C363F] rounded-lg flex items-center justify-center neubrutalism-shadow overflow-hidden"
            >
              {videoId ? (
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-[#2C363F] text-lg font-semibold">
                  {item.title || `Video ${index}`}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoSection;
