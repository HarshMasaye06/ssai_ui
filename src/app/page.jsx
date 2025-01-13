"use client";

import Image from "next/image";
import InputBar from "@/components/layout/InputBar";
import { useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import Header from "@/components/layout/Header";
import SideBar from "@/components/layout/SideBar";
import { motion } from "framer-motion";
import { VscSend } from "react-icons/vsc";
import LoadingScreen from "@/components/ui/loadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "answer",
      content: "Hello! How can I help you today?",
      links: ["Getting started", "Features", "Documentation"],
    },
  ]);

  const { displayedText, isTyping } = useTypewriter(
    messages[messages.length - 1]?.content || "",
    150
  );

  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Add user's question
    setMessages((prev) => [...prev, { type: "question", content: query }]);
    setQuery("");
    setIsLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Add AI's response
    setMessages((prev) => [
      ...prev,
      {
        type: "answer",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet blanditiis repellat cupiditate maiores assumenda facilis porro praesentium. Neque praesentium perspiciatis ipsa maiores, ad fugit, exercitationem vitae possimus voluptatum id enim saepe nemo.",
        links: ["Related topic 1", "Related topic 2"],
      },
    ]);
    setIsLoading(false);
  };

  return (
    <div className="flex h-screen w-screen bg-[#F5F5F5]">
      {isLoading && <LoadingScreen />}
      <div className=" h-screen">
        <SideBar />
      </div>
      <div className=" flex flex-col w-[80%] ">
        <Header />

        <div className="flex-1 overflow-auto p-6 space-y-6 ">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`
              max-w-3xl
              ${message.type === "question" && "ml-auto"}
            `}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className={`rounded-lg p-4 outline outline-3 outline-[#2C363F] neubrutalism-shadow ${
                  message.type === "question"
                    ? "bg-green-200 text-[#252525]"
                    : "bg-yellow-100"
                }`}
              >
                <p className="text-lg">
                  {i === messages.length - 1 && message.type === "answer"
                    ? displayedText
                    : message.content}
                  {i === messages.length - 1 &&
                    message.type === "answer" &&
                    isTyping && (
                      <span className="inline-block w-[2px] h-4 ml-1 bg-[#2C363F] animate-pulse" />
                    )}
                </p>
                {message.links && !isTyping && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {message.links.map((link, j) => (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        key={j}
                        className="inline-flex items-center gap-1 text-sm bg-[#4ECDC4] text-[#2C363F] px-4 py-2 rounded-full border-[3px] border-[#2C363F] font-bold neubrutalism-shadow neubrutalism-button"
                      >
                        {link}
                        {/* <ArrowUpRight className="w-4 h-4" /> */}
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
        <div className=" border-t-[3px] border-[#2C363F] p-6 bg-white w-full ">
          <form
            className="max-w-3xl mx-auto"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
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
                  whileTap={{ x: 1, y: 1 }}
                  type="submit"
                  className="absolute z-20  right-[0.4rem] top-[0.5rem] p-2 rounded-md bg-[#FF6B6B] text-white border-[#2C363F] border-[2px] "
                >
                  <VscSend className="w-4 h-4 -rotate-45 relative left-[0.05rem] " />
                </motion.button>
                <div className=" w-[2.2rem] h-[2.2rem] z-10 absolute right-[0.3rem] top-[0.65rem] bg-[#2C363F] rounded-md"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
