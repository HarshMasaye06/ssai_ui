import { useLayout } from "@/hooks/useLayout";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";

const EditCanvas = () => {
  const { editMode, editMessage, closeEditMode } = useLayout();
  console.log(editMessage);
  return (
    <motion.div
      className={`${
        editMode ? "w-[70vw] absolute bottom-0 right-0 " : " hidden"
      } px-4 py-2`}
      style={{ height: "calc(100vh - 9vh)" }}
    >
      <button
        className=" bg-[#FF6B6B] p-1 rounded-sm outline outline-[2px] outline-[#2C363F] absolute top-2 right-2 "
        onClick={() => {
          closeEditMode();
        }}
      >
        <CgClose className=" text-xl" />
      </button>
      <div className="flex  justify-between items-center">
        {editMessage?.content}
      </div>
    </motion.div>
  );
};

export default EditCanvas;
