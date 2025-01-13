import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

const SideBar = () => {
  const [videoFullScreen, setVideoFullScreen] = useState(null);

  const handleCardEnlarge = (videoData) => {
    setVideoFullScreen(videoData);
  };

  const videoData = [
    {
      title: "Video_1",
      link: "https://www.youtube.com/watch?v=fcMC53eaqA0",
    },
    {
      title: "Video_2",
      link: "",
    },
    {
      title: "Video_3",
      link: "",
    },
  ];

  return (
    <div className="h-screen border-r-[3px] border-[#2C363F] flex flex-col">
      {videoFullScreen && (
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
                stiffness: 150,
                duration: 0.1,
              },
            }}
            className="bg-white rounded-lg p-2 border-[3px] border-[#2C363F] neubrutalism-shadow w-[90%] h-[90%] mx-4"
          >
            <header className=" h-[5.2%] flex justify-between ">
              <div className=" bg-yellow-100 w-[96%] mt-[3px] outline outline-[3px] outline-[#2C363F] px-2 flex items-center rounded-sm ">
                <span className=" ">
                  http://localhost:3000/video/{videoFullScreen.title}
                </span>
              </div>
              <div className=" w-[4%] relative">
                <motion.button
                  whileTap={{ x: 1, y: 1 }}
                  onClick={() => {
                    handleCardEnlarge(null);
                  }}
                  className="absolute z-20 right-[0.5rem] p-2 rounded-md bg-[#FF6B6B]  border-[#2C363F] border-[2px] "
                >
                  <CgClose className="relative left-[0.05rem] text-xl text-white" />
                </motion.button>
                <div className=" w-[2.6rem] h-[2.5rem] z-10 absolute right-[0.3rem] top-[0.07rem] bg-[#2C363F] rounded-md"></div>
              </div>
            </header>
            <section className=" h-[94.5%] flex justify-center items-center">
              {videoFullScreen.link}
            </section>
          </motion.div>
        </div>
      )}
      {/* Images Section */}
      <div className="w-[20vw] h-[55%] border-b-[3px] border-[#2C363F] overflow-auto">
        <h2 className="text-lg font-bold text-[#2C363F] p-2 sticky top-0 bg-[#F5F5F5] z-20">
          Images
        </h2>
        <div className="grid grid-cols-2 gap-2 pr-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.98 }}
              key={i}
              className="w-[9rem] h-[9rem] hover:z-10 mx-auto bg-[#4ECDC4] border-[3px] border-[#2C363F] rounded-[0.5rem] flex items-center justify-center neubrutalism-shadow"
            >
              <img
                className="w-full h-full object-cover rounded-[0.3rem]"
                src={`https://placehold.co/${400}x${400}/pink/black`}
                alt={`Placeholder ${i}`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <div className="w-[20vw] h-[45%] overflow-auto">
        <h2 className="text-lg font-bold text-[#2C363F] p-2 sticky top-0 bg-[#F5F5F5] z-20">
          Videos
        </h2>
        <div className="flex flex-col gap-3 px-2">
          {videoData.map((item, index) => (
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                handleCardEnlarge(item);
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
    </div>
  );
};

export default SideBar;
