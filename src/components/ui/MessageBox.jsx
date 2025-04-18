import { useLayout } from "@/hooks/useLayout";
import { motion } from "framer-motion";
import { CircleArrowOutUpRight, Pen } from "lucide-react";
import { useState } from "react";
import { IoCheckmarkOutline, IoCopyOutline } from "react-icons/io5";
import CopyButton from "./CopyButton";
import EditButton from "./EditButton";

const MessageBox = ({ message, i, m_len, isTyping, displayedText }) => {
  const { editMode, toggleEditMode } = useLayout();

  const isLatestMessage = i === m_len - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className={`${"outline outline-3 outline-[#2C363F] rounded-lg neubrutalism-shadow"}  px-2 pt-2 pb-1 ${
        message.type === "question"
          ? "bg-green-200 text-[#252525]"
          : "bg-yellow-100  "
      }`}
    >
      <p className="text-lg h-[90%]">
        {isLatestMessage && message.type === "answer"
          ? displayedText
          : message.content}
        {i === m_len - 1 && message.type === "answer" && isTyping && (
          <span className="inline-block w-[2px] h-4 ml-1 bg-[#2C363F] animate-pulse" />
        )}
      </p>
      <div className=" h-[10%]">
        {message.links && (!isTyping || !isLatestMessage) && (
          <div className="w-full flex justify-evenly">
            {/* Message Links */}
            <div className=" w-[90%] flex gap-1">
              {message.links.map((link, j) => (
                link && <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  key={j}
                  href={link}
                  target="_blank"
                  className="inline-flex items-center z-20 gap-1 text-sm bg-[#4ECDC4] text-[#2C363F] px-2 py-1 rounded-full border-[3px] border-[#2C363F] font-bold "
                >
                  {link}
                  <CircleArrowOutUpRight size={20} />
                </motion.a>
              ))}
            </div>
            <div className="flex gap-1">
              {/* Edit Button */}
              <EditButton message={message} i={i} />
              {/* Copy Button */}
              <CopyButton message={message} i={i} />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MessageBox;
