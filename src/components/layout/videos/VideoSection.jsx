import { useOverlay } from "@/hooks/useVideoOverlay";
import { motion } from "framer-motion";

const VideoSection = () => {
  const { openMiniPlayer } = useOverlay();

  const videosInfo = [
    {
      title: "Returning to PokéRogue in 2025",
      link: "https://www.youtube.com/embed/S4-IMhlXfO0",
    },
    {
      title: "Video_2",
      link: null,
    },
    {
      title: "Video_3",
      link: null,
    },
  ];

  return (
    <div className="w-[20vw] h-[45%] overflow-auto">
      <h2 className="text-lg font-bold text-[#2C363F] p-2 sticky top-0 bg-[#F5F5F5] z-20">
        Videos
      </h2>
      <div className="flex flex-col gap-3 px-2">
        {videosInfo.map((item, index) => (
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              openMiniPlayer(item);
            }}
            key={index}
            className="bg-[#FFE66D] border-[3px] h-[10rem] hover:z-10 border-[#2C363F] rounded-lg flex items-center justify-center neubrutalism-shadow"
          >
            <span className="text-[#2C363F] text-lg font-semibold">
              Video {index}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
