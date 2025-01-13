import { motion } from "framer-motion";
import { useState } from "react";
import { VscSend } from "react-icons/vsc";

const InputBar = ({ setMessages }) => {


  return (
    <div className=" border-t-[3px] border-[#2C363F] p-6 bg-white w-full ">
      {/* <form className="max-w-3xl mx-auto"> */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your prompt or query"
          className="w-full pl-4 pr-16 py-3 rounded-lg border-[3px] border-[#2C363F] focus:outline-none focus:ring-0 focus:border-[#2C363F] "
        />
        <div className=" flex flex-col ">
          <motion.button
            // whileHover={{ scale: 1.03 }}
            whileTap={{ x: 0.5, y: 0.5 }}
            onClick={(e) => {
              handleSubmit(e);
            }}
            type="submit"
            className="absolute z-20  right-[0.4rem] top-[0.5rem] p-2 rounded-md bg-[#FF6B6B] text-white border-[#2C363F] border-[2px] "
          >
            <VscSend className="w-4 h-4 -rotate-45 relative left-[0.05rem] " />
          </motion.button>
          <div className=" w-[2.2rem] h-[2.2rem] z-10 absolute right-[0.3rem] top-[0.65rem] bg-[#2C363F] rounded-md"></div>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default InputBar;
