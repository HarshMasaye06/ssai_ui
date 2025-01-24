import { motion } from "framer-motion";
import { useState } from "react";
import { IoCheckmarkOutline, IoCopyOutline } from "react-icons/io5";

const CopyButton = ({ message, i }) => {
  const [isCopied, setIsCopied] = useState(null);

  const changeCopyBtn = (id) => {
    setIsCopied(id);
    setTimeout(() => {
      setIsCopied(null);
    }, 2000);
  };

  return (
    <motion.button
      whileTap={{ x: 1, y: 1 }}
      onClick={() => {
        navigator.clipboard.writeText(message.content);
        changeCopyBtn(i);
      }}
      type="submit"
      className=" z-20 p-1 rounded-md bg-[#FF6B6B] text-white border-[#2C363F] border-[2px]  "
    >
      {isCopied === i ? (
        <IoCheckmarkOutline className="text-xl text-[#f5f5f5]" />
      ) : (
        <IoCopyOutline className="text-xl text-black" />
      )}
    </motion.button>
  );
};

export default CopyButton;
