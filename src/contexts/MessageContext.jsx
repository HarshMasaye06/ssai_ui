"use client";

import { createContext, useState } from "react";

// Define the Message interface
export const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [messages, setMessages] = useState([
    {
      type: "answer",
      content: "Hello! How can I help you today?",
      links: ["Getting started", "Features", "Documentation"],
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const setLoading = (loading) => {
    setIsLoading(loading);
  };

  

  return (
    <MessageContext.Provider
      value={{ messages, isLoading, addMessage, setLoading }}
    >
      {children}
    </MessageContext.Provider>
  );
}
