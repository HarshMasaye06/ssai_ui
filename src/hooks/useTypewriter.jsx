"use client";

import { useState, useEffect } from "react";

export function useTypewriter(text, speed = 150) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const words = text.split(/\s+/);
    let currentIndex = 0;
    setIsTyping(true);
    setDisplayedText("");

    const typingInterval = setInterval(() => {
      if (currentIndex < words.length) {
        setDisplayedText(
          (current) =>
            current + (currentIndex === 0 ? "" : " ") + words[currentIndex]
        );
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return { displayedText, isTyping };
}
