import { useLayout } from "@/hooks/useLayout";
import { motion } from "framer-motion";
import { Pen } from "lucide-react";

const EditButton = ({ message, i }) => {
  const { editMode, toggleEditMode } = useLayout();
  return (
    <motion.button
      whileTap={{ x: 1, y: 1 }}
      onClick={() => toggleEditMode(message)}
      className=" z-20  p-1 rounded-md bg-[#FF6B6B] text-white border-[#2C363F] border-[2px] "
    >
      <Pen size={20} className=" text-black" />
    </motion.button>
  );
};

export default EditButton;
