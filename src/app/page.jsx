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
import { useMessages } from "@/hooks/useMessages";

export default function Home() {
  const { messages, isLoading, addMessage, setLoading } = useMessages();

  // const [isLoading, setIsLoading] = useState(false);
  // const [messages, setMessages] = useState([
  //   {
  //     type: "answer",
  //     content: "Hello! How can I help you today?",
  //     links: ["Getting started", "Features", "Documentation"],
  //   },
  // ]);

  const { displayedText, isTyping } = useTypewriter(
    messages[messages.length - 1]?.content || "",
    150
  );

  const [query, setQuery] = useState("");

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
        <InputBar
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
