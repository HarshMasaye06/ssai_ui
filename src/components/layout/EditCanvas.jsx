import { useLayout } from "@/hooks/useLayout";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { Teko } from "next/font/google";

const teko = Teko({
  weight: "700",
  subsets: ["latin"],
});
const EditCanvas = () => {
  const { editMode, editMessage, closeEditMode } = useLayout();
  console.log(editMessage);
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

      <div className=" mt-4 flex justify-between items-center">
        {editMessage?.content}
      </div>
    </motion.div>
  );
};

export default EditCanvas;
