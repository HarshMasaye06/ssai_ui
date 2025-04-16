import { useLayout } from "@/hooks/useLayout";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { Teko } from "next/font/google";
import { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";

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
      <header className=" flex justify-start items-center gap-2">
        <button
          className=" bg-[#FF6B6B] p-[0.15rem] rounded-sm outline outline-[2px] outline-[#2C363F] "
          onClick={() => {
            closeEditMode();
          }}
        >
          <CgClose className=" text-xl" />
        </button>
        <h1 className={`${teko.className} text-xl`}>Canvas mode</h1>
      </header>

      <div className="mt-4 flex h-[calc(100%-3rem)]">
        <CodeMirror value={editableContent} height="calc(100vh - 8rem)" width="69vw" />
        {/* Number Row */}
        {/* <div className="w-8 flex flex-col items-center text-gray-400 text-sm">
          {editableContent.split("\n").map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div> */}

        {/* Text Area */}
        {/* <textarea
          value={editableContent}
          onChange={(e) => setEditableContent(e.target.value)}
          className="w-full h-full resize-none border-l pl-4 focus:outline-none text-gray-800"
          style={{ fontFamily: "monospace", lineHeight: "1.5" }}
        /> */}
      </div>
    </motion.div>
  );
};

export default EditCanvas;
