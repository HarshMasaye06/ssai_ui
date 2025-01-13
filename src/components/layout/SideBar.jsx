import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

const SideBar = () => {
  return (
    <div className="h-screen border-r-[3px] border-[#2C363F] flex flex-col">
      {/* Images Section */}
      <div className="w-[20vw] h-1/2 border-b-[3px] border-[#2C363F] overflow-auto">
        <h2 className="text-lg font-bold text-[#2C363F] p-2 sticky top-0 bg-[#F5F5F5]">
          Images
        </h2>
        <div className="grid grid-cols-2 gap-2 pr-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { type: "springy" },
              }}
              key={i}
              className="w-[9rem] h-[9rem] mx-auto bg-[#4ECDC4] border-[3px] border-[#2C363F] rounded-[0.5rem] flex items-center justify-center neubrutalism-shadow"
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
      <div className="w-[20vw] h-1/2 overflow-auto">
        <h2 className="text-lg font-bold text-[#2C363F] p-2 sticky top-0 bg-[#F5F5F5]">
          Videos
        </h2>
        <div className="flex flex-col gap-3 px-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              whileHover={{
                scale: 1.03,
                transition: { type: "springy" },
              }}
              key={i}
              className="bg-[#FFE66D] border-[3px] h-[8rem] border-[#2C363F] rounded-lg flex items-center justify-center neubrutalism-shadow"
            >
              <span className="text-[#2C363F] text-lg font-semibold">
                Video {i}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
