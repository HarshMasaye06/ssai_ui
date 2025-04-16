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
import { CircleArrowOutUpRight, Edit, Pen } from "lucide-react";
import MessageBox from "@/components/ui/MessageBox";
import { useLayout } from "@/hooks/useLayout";
import EditCanvas from "@/components/layout/EditCanvas";
import { searchAPI } from "@/utils/searchAPI";
import { youtubeSearchAPI } from "@/utils/youtubeSearchAPI";

export default function Home() {
  const { messages, isLoading, addMessage, setLoading } = useMessages();
  const { editMode } = useLayout();

  const { displayedText, isTyping } = useTypewriter(
    messages[messages.length - 1]?.content || "",
    150
  );

  const [query, setQuery] = useState("");
  const [videoResults, setVideoResults] = useState([]);


  function generateRandomLorem() {
    const lorem =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const words = lorem.split(" ");
    const wordCount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    return words.slice(0, wordCount).join(" ");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    addMessage({ type: "question", content: query });
    setQuery("");
    setLoading(true);

    try {
      const [result, videoResult] = await Promise.all([
        searchAPI(query),
        youtubeSearchAPI(query),
      ]);

      // Text search handling
      if (result && Array.isArray(result)) {

        const responses = result.map((item) => ({
          type: "answer",
          content: item?.content || '',
          links: [item?.links],
        }));


        responses.forEach((response) => addMessage(response));
      }

      if (videoResult?.videos && Array.isArray(videoResult?.videos)) {
        setVideoResults(videoResult.videos); // ← store videos for sidebar
      }
    } catch (error) {
      addMessage({
        type: "answer",
        content: "There was an error processing your request.",
        links: [],
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#F5F5F5]">
      {isLoading && <LoadingScreen />}
      <SideBar videoResults={videoResults} />
      <div className="flex flex-col w-full">
        <Header />
        <section
          className={`${
            editMode ? "w-[30vw] border-r-[3px] border-[#2C363F]" : ""
          } h-[82vh] overflow-auto p-4 space-y-4`}
        >
          {messages.map((message, i) => {
            const m_len = messages.length;
            return (
              <motion.div
                key={i}
                className={`${
                  editMode ? "max-w-[30vw] z-50 " : " max-w-[45vw] "
                }  ${message.type === "question" && "ml-auto"}`}
              >
                <MessageBox
                  message={message}
                  i={i}
                  m_len={m_len}
                  isTyping={isTyping}
                  displayedText={displayedText}
                />
              </motion.div>
            );
          })}
          {/* </div> */}
        </section>
        <InputBar
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
        />
      </div>
      <EditCanvas />
    </div>
  );
}
