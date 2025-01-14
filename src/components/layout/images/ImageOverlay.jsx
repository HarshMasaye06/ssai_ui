import { useOverlay } from "@/hooks/useVideoOverlay";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageOverlay = () => {
  const { closeImageViewer } = useOverlay();

  return (
    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-[4rem] overflow-hidden">
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
        className="bg-white rounded-lg p-2 border-[3px] border-[#2C363F] neubrutalism-shadow w-full h-full flex flex-col justify-evenly"
      >
        <header className=" h-[5%] flex justify-evenly">
          <div className=" bg-yellow-100 w-full outline outline-[3px] outline-[#2C363F] px-2 flex items-center rounded-sm ">
            links
          </div>
          <div className=" w-[4rem] relative">
            <motion.button
              whileTap={{ x: 1.2, y: 1.2 }}
              onClick={() => {
                closeImageViewer();
              }}
              className="absolute z-20 -top-[0.2rem] right-[0.5rem] p-2 rounded-md bg-[#FF6B6B] border-[#2C363F] border-[2px] "
            >
              <CgClose className="relative text-xl text-white" />
            </motion.button>
            <div className=" w-[2.6rem] h-[2.5rem] z-10 absolute right-[0.3rem] top-[0.05rem] bg-[#2C363F] rounded-md"></div>
          </div>
        </header>
        <section className=" h-[95%] w-full flex justify-evenly items-center gap-2 mt-4">
          {/* summary section */}
          <div className="bg-yellow-100 p-2 rounded-md outline outline-[3px] outline-[#2C363F] neubrutalism-shadow w-full h-full flex justify-between items-center">
            <motion.button
              whileTap={{ x: 1, y: 1 }}
              className=" bg-[#FF6B6B] h-10 w-10 rounded-md outline outline-[3px] outline-[#2C363F] neubrutalism-shadow "
            >
              <IoIosArrowBack className="  text-4xl" />
            </motion.button>
            <motion.button
              whileTap={{ x: 1, y: 1 }}
              className=" bg-[#FF6B6B] h-10 w-10 rounded-md outline outline-[3px] outline-[#2C363F] neubrutalism-shadow "
            >
              <IoIosArrowForward className="  text-4xl" />
            </motion.button>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default ImageOverlay;
