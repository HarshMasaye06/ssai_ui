import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

import { Teko } from "next/font/google";

const teko = Teko({
  weight: "700",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <div className="h-16 w-full border-b-[3px] border-[#2C363F] flex items-center px-8">
      <div className="">
        <h1 className={`text-3xl ${teko.className} mt-2 mx-auto`}>SmartSource.AI</h1>
      </div>
      <div className=" h-full flex items-center  ">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ x: 1.5, y: 1.5 }}
          type="submit"
          className="absolute z-20 right-[0.5rem] top-[0.5rem] p-2 rounded-md bg-[#FF6B6B]  border-[#2C363F] border-[2px] "
        >
          <RxHamburgerMenu className="relative left-[0.05rem] text-xl text-white" />
        </motion.button>
        <div className=" w-[2.6rem] h-[2.5rem] z-10 absolute right-[0.3rem] top-[0.65rem] bg-[#2C363F] rounded-md"></div>
      </div>
    </div>
  );
};

export default Header;
