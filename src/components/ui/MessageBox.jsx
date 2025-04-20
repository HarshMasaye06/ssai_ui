import { useLayout } from "@/hooks/useLayout";
import { motion } from "framer-motion";
import { CircleArrowOutUpRight } from "lucide-react";
import { IoCheckmarkOutline, IoCopyOutline } from "react-icons/io5";
import CopyButton from "./CopyButton";
import EditButton from "./EditButton";
import ReactMarkdown from "react-markdown";

const MessageBox = ({ message, i, m_len }) => {
  const { editMode, toggleEditMode } = useLayout();

  const isLatestMessage = i === m_len - 1;

  // ✅ Truncate only if type is 'answer'
  const truncateContent = (text) => {
    if (!text) return "";
    const visibleLength = Math.floor(text.length * 0.3);
    return (
      text.slice(0, visibleLength) + (text.length > visibleLength ? "..." : "")
    );
  };

  const displayContent =
    message.type === "answer"
      ? truncateContent(message.content)
      : message.content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className={`outline outline-3 outline-[#2C363F] rounded-lg neubrutalism-shadow px-2 pt-2 pb-1 ${
        message.type === "question"
          ? "bg-green-200 text-[#252525]"
          : "bg-yellow-100"
      }`}
    >
      <div className="text-lg h-[90%] overflow-auto">
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown>{displayContent}</ReactMarkdown>
        </div>
      </div>

      <div className="h-[10%]">
        {message.links && (
          <div className="w-full flex justify-evenly">
            <div className="w-[90%] overflow-hidden flex gap-1">
              {message.links.map(
                (link, j) =>
                  link && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      key={j}
                      href={link}
                      target="_blank"
                      className="inline-flex items-center z-20 gap-1 text-sm bg-[#4ECDC4] text-[#2C363F] px-2 py-1 rounded-full border-[3px] border-[#2C363F] font-bold"
                    >
                      {link}
                      <CircleArrowOutUpRight size={20} />
                    </motion.a>
                  )
              )}
            </div>
            <div className="flex gap-1">
              <EditButton message={message} i={i} />
              <CopyButton message={message} i={i} />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MessageBox;
