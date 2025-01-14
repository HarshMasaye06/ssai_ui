"use client";

import Image from "next/image";
import InputBar from "@/components/layout/InputBar";
import { useEffect, useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import Header from "@/components/layout/Header";
import SideBar from "@/components/layout/SideBar";
import { motion } from "framer-motion";
import { VscSend } from "react-icons/vsc";
import LoadingScreen from "@/components/ui/loadingScreen";
import { useMessages } from "@/hooks/useMessages";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";

export default function Home() {
  const { messages, isLoading, addMessage, setLoading } = useMessages();

  const { displayedText, isTyping } = useTypewriter(
    messages[messages.length - 1]?.content || "",
    150
  );

  const [query, setQuery] = useState("");

  const [isCopied, setIsCopied] = useState(false);

  const changeCopyBtn = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Add user's question
    addMessage({ type: "question", content: query });
    setQuery("");
    setLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Add AI's response
    addMessage({
      type: "answer",
      content:
        "This is a sample response. The AI would process your query here.",
      links: ["Related topic 1", "Related topic 2"],
    });
    setLoading(false);
  };

  return (
    <div className="flex h-screen w-screen bg-[#F5F5F5]">
      {isLoading && <LoadingScreen />}
      <div className=" h-screen">
        <SideBar />
      </div>
      <div className=" flex flex-col w-[80%] ">
        {/* Header */}
        <Header />
        {/* ChatArea */}
        <div className="flex-1 overflow-auto p-6 space-y-4 ">
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
                className={`rounded-lg pl-3 pr-2 pt-2 pb-2 outline outline-3 outline-[#2C363F] neubrutalism-shadow ${
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
                  <div className="mt-4 flex justify-between ">
                    <div className=" flex gap-2">
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
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={changeCopyBtn}
                      className="inline-flex items-center p-2 text-sm bg-[#FF6B6B] text-[#2C363F] rounded-lg border-[3px] border-[#2C363F] font-bold neubrutalism-shadow neubrutalism-button"
                    >
                      {isCopied ? (
                        <IoCheckmarkOutline className="text-xl text-[#f5f5f5]" />
                      ) : (
                        <IoCopyOutline className="text-xl  " />
                      )}
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
        {/* Input Area */}
        <InputBar
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
