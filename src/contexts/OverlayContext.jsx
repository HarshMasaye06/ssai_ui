"use client";

import { createContext, useState } from "react";

export const OverlayContext = createContext();

export function OverlayProvider({ children }) {
  const [isVideoOverlayOpen, setVideoOverlayOpen] = useState(false);
  const [isImageOverlayOpen, setImageOverlayOpen] = useState(false);
  const [videoOverlayData, setVideoOverlayData] = useState(null);
  const [imageOverlayData, setImageOverlayData] = useState(null);

  const openMiniPlayer = (videoData) => {
    setVideoOverlayOpen(true);
    setVideoOverlayData(videoData);
  };

  const closeMiniPlayer = () => {
    setVideoOverlayOpen(false);
    setVideoOverlayData(null);
  };

  const openImageViewer = (imageData) => {
    setImageOverlayOpen(true);
    setImageOverlayData(imageData);
  };

  const closeImageViewer = () => {
    setImageOverlayOpen(false);
    setImageOverlayData(null);
  };

  return (
    <OverlayContext.Provider
      value={{
        isVideoOverlayOpen,
        isImageOverlayOpen,
        videoOverlayData,
        imageOverlayData,
        openMiniPlayer,
        closeMiniPlayer,
        openImageViewer,
        closeImageViewer,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
}
