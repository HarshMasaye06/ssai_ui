import { useOverlay } from "@/hooks/useVideoOverlay";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";

const VideoOverlay = () => {
  const { videoOverlayData, closeMiniPlayer } = useOverlay();

  return (
    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            damping: 10,
            mass: 0.5,
            stiffness: 140,
            duration: 0.1,
          },
        }}
        className="bg-white rounded-lg p-2 border-[3px] border-[#2C363F] neubrutalism-shadow w-[90%] h-[90%] mx-4"
      >
        <header className=" h-[5%] flex justify-evenly ">
          <div className=" bg-yellow-100 w-[95%] mt-[3px] outline outline-[3px] outline-[#2C363F] px-2 flex items-center rounded-sm ">
            <span className=" ">
              http://localhost:3000/video/{videoOverlayData.title}
            </span>
          </div>
          <div className=" w-[4%] relative">
            <motion.button
              whileTap={{ x: 1.2, y: 1.2 }}
              onClick={() => {
                closeMiniPlayer();
              }}
              className="absolute z-20 right-[0.5rem] p-2 rounded-md bg-[#FF6B6B]  border-[#2C363F] border-[2px] "
            >
              <CgClose className="relative left-[0.05rem] text-xl text-white" />
            </motion.button>
            <div className=" w-[2.6rem] h-[2.5rem] z-10 absolute right-[0.3rem] top-[0.07rem] bg-[#2C363F] rounded-md"></div>
          </div>
        </header>
        <section className=" h-[95%] flex justify-evenly items-start gap-2 mt-4">
          {/* video section */}
          <div className=" flex flex-col gap-3 h-full">
            <div className=" bg-yellow-100 p-1 rounded-md outline outline-[3px] outline-[#2C363F] neubrutalism-shadow h-[73%] flex justify-center items-center ">
              <iframe
                height={500}
                width={1000}
                src={videoOverlayData.link}
                allowFullScreen
                className=" rounded-[0.3rem] "
              />
            </div>
            <div className=" bg-[#4ECDC4] p-1 rounded-md outline outline-[3px] outline-[#2C363F] neubrutalism-shadow h-[22%]">
              <h1 className=" font-bold text-xl">{videoOverlayData.title}</h1>
            </div>
          </div>
          {/* summary section */}
          <div className="bg-yellow-100 p-1 rounded-md outline outline-[3px] outline-[#2C363F] neubrutalism-shadow w-[33%] h-[97%] "></div>
        </section>
      </motion.div>
    </div>
  );
};

export default VideoOverlay;
