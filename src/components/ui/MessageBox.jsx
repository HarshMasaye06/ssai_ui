import { useLayout } from "@/hooks/useLayout";
import { motion } from "framer-motion";
import { CircleArrowOutUpRight, Pen } from "lucide-react";
import { useState } from "react";
import { IoCheckmarkOutline, IoCopyOutline } from "react-icons/io5";

const MessageBox = ({ message, i, m_len, isTyping, displayedText }) => {
  const { editMode, toggleEditMode } = useLayout();

  const isLatestMessage = i === m_len - 1;

  const [isCopied, setIsCopied] = useState(null);

  const changeCopyBtn = (id) => {
    setIsCopied(id);
    setTimeout(() => {
      setIsCopied(null);
    }, 2000);
  };

  return (
    <motion.div
      className={` ${
        editMode
          ? "h-screen w-[30vw] z-50 absolute top-0 left-0 flex flex-col justify-between"
          : ""
      } rounded-lg pl-3 pr-2 pt-2 pb-1 outline outline-3 outline-[#2C363F] neubrutalism-shadow ${
        message.type === "question"
          ? "bg-green-200 text-[#252525]"
          : "bg-yellow-100"
      }`}
    >
      <p className="text-lg">
        {i === m_len - 1 && message.type === "answer"
          ? displayedText
          : message.content}
        {i === m_len - 1 && message.type === "answer" && isTyping && (
          <span className="inline-block w-[2px] h-4 ml-1 bg-[#2C363F] animate-pulse" />
        )}
      </p>
      <div>
        {message.links && (!isTyping || !isLatestMessage) && (
          <div className="mt-4 w-full flex justify-between relative ">
            {/* Message Links */}
            <div className=" w-[90%] flex gap-2">
              {message.links.map((link, j) => (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  key={j}
                  className="inline-flex items-center z-20 gap-2 text-sm bg-[#4ECDC4] text-[#2C363F] px-4 py-1 rounded-full border-[3px] border-[#2C363F] font-bold "
                >
                  {link}
                  <CircleArrowOutUpRight size={20} />
                </motion.button>
              ))}
            </div>
            <div className=" w-[10%] flex gap-2">
              <div className="">
                <motion.button
                  whileTap={{ x: 1, y: 1 }}
                  onClick={() => toggleEditMode()}
                  className=" z-20  p-1 rounded-md bg-[#FF6B6B] text-white border-[#2C363F] border-[2px] "
                >
                  <Pen size={20} className=" text-black" />
                </motion.button>
                {/* <div className=" w-[2rem] h-[2rem] z-10 absolute -right-[0.3rem] top-[0.2rem] bg-[#2C363F] rounded-md"></div> */}
              </div>
              {/* Copy Button */}
              <div className=" ">
                <motion.button
                  whileTap={{ x: 1, y: 1 }}
                  onClick={() => {
                    navigator.clipboard.writeText(message.content);
                    changeCopyBtn(i);
                  }}
                  type="submit"
                  className=" z-20 p-1 rounded-md bg-[#FF6B6B] text-white border-[#2C363F] border-[2px] "
                >
                  {isCopied === i ? (
                    <IoCheckmarkOutline className="text-xl text-[#f5f5f5]" />
                  ) : (
                    <IoCopyOutline className="text-xl text-black" />
                  )}
                </motion.button>
                {/* <div className=" w-[2rem] h-[2rem] z-10 absolute -right-[0.3rem] top-[0.2rem] bg-[#2C363F] rounded-md"></div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MessageBox;
