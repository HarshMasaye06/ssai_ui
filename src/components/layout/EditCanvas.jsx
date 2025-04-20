import { useLayout } from "@/hooks/useLayout";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { Teko } from "next/font/google";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown"; // ✅ ADDED

const teko = Teko({
  weight: "700",
  subsets: ["latin"],
});

const EditCanvas = () => {
  const { editMode, editMessage, closeEditMode } = useLayout();
  const [editableContent, setEditableContent] = useState("");

  useEffect(() => {
    setEditableContent(editMessage?.content || "");
  }, [editMessage]);

  return (
    <motion.div
      className={`${
        editMode ? "w-[70vw] absolute bottom-0 right-0 " : " hidden"
      } px-4`}
      style={{ height: "calc(100vh - 9vh)" }}
    >
      <header className="flex justify-start items-center gap-2">
        <button
          className="bg-[#FF6B6B] p-[0.15rem] rounded-sm outline outline-[2px] outline-[#2C363F]"
          onClick={() => {
            closeEditMode();
          }}
        >
          <CgClose className="text-xl" />
        </button>
        <h1 className={`${teko.className} text-xl`}>Canvas mode</h1>
      </header>

      {/* ✅ Markdown Display Block */}
      <div className="mt-4 flex h-[calc(100%-3rem)] overflow-y-auto p-4 bg-white rounded-md shadow-inner">
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown>{editableContent}</ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
};

export default EditCanvas;
