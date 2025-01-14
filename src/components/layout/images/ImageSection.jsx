import { useOverlay } from "@/hooks/useVideoOverlay";
import { motion } from "framer-motion";

const ImageSection = () => {
  const { openImageViewer } = useOverlay();

  return (
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
            onClick={() => {
              openImageViewer(i);
            }}
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
  );
};

export default ImageSection;
