import { useOverlay } from "@/hooks/useVideoOverlay";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { getYoutubeVideoSummary } from "@/utils/youtubeSummaryAPI";
import ReactMarkdown from "react-markdown";
import { formatSummary } from "@/utils/summaryFormatter";

const VideoOverlay = () => {
  const { videoOverlayData, closeMiniPlayer } = useOverlay();
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    const { summary } = await getYoutubeVideoSummary(videoOverlayData.url);
    setSummary(formatSummary(summary));
    setLoading(false);
  };

  return (
    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            damping: 10,
            mass: 0.5,
            stiffness: 140,
            duration: 0.1,
          },
        }}
        className="bg-white rounded-lg p-1 border-[3px] border-[#2C363F] neubrutalism-shadow w-[95%] h-[90%] flex flex-col"
      >
        {/* Header */}
        <header className="h-[5%] flex items-center gap-2">
          <div className="bg-yellow-100 flex-1 outline outline-[3px] outline-[#2C363F] px-2 py-1 flex items-center rounded-sm overflow-x-auto">
            <span className="text-sm whitespace-nowrap">{videoOverlayData.url}</span>
          </div>
          <button
            className="rounded-md bg-black mt-1 ml-1"
            onClick={closeMiniPlayer}
          >
            <span className="block -translate-x-1 -translate-y-1 rounded-md border-2 border-black bg-[#FF6B6B] p-[0.3rem] text-md font-semibold hover:-translate-x-[0.32rem] hover:-translate-y-[0.32rem] active:translate-x-0 active:translate-y-0 transition-all">
              <CgClose className="text-xl text-white" />
            </span>
          </button>
        </header>

        {/* Main Section */}
        <section className="h-[93%] flex gap-2 mt-2 min-h-0">
          {/* Left: Video Section */}
          <div className="flex flex-col gap-2 flex-[2] min-h-0">
            {/* Video */}
            <div className="bg-yellow-100 rounded-md outline outline-[3px] outline-[#2C363F] flex-1 flex justify-center items-center min-h-0">
              <div className="relative w-full h-full">
                <iframe
                  src={`https://www.youtube.com/embed/${videoOverlayData.id}`}
                  allowFullScreen
                  className="w-full h-full rounded-[0.3rem]"
                />
              </div>
            </div>

            {/* Title */}
            <div className="bg-[#4ECDC4] p-3 rounded-md outline outline-[3px] outline-[#2C363F] max-h-[20%] overflow-y-auto">
              <h1 className="font-bold text-xl">{videoOverlayData.title}</h1>
            </div>
          </div>

          {/* Right: Summary Section */}
          <div className="flex flex-col justify-between bg-yellow-100 px-3 py-2 rounded-md outline outline-[3px] outline-[#2C363F] flex-1 min-h-0 max-h-full">
            <div className="flex-1 w-full overflow-y-auto">
              <h2 className="font-bold text-lg mb-2">Summary</h2>
              {loading ? (
                <motion.div
                  className="text-sm leading-relaxed text-gray-600"
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Summarizing video, please wait...
                </motion.div>
              ) : summary ? (
                <div className="prose prose-sm prose-neutral max-w-none text-sm">
                  <ReactMarkdown>{summary}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-sm leading-relaxed">
                  Click summarize to get a summary of the video.
                </p>
              )}
            </div>

            {/* Button */}
            <div className="flex w-full justify-end mt-3">
              <button
                className="rounded-md bg-black"
                onClick={handleSummarize}
              >
                <span className="block -translate-x-1 -translate-y-1 rounded-md border-2 border-black bg-[#FF6B6B] px-3 py-1 text-sm font-semibold hover:-translate-x-[0.32rem] hover:-translate-y-[0.32rem] active:translate-x-0 active:translate-y-0 transition-all">
                  Summarize
                </span>
              </button>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default VideoOverlay;
