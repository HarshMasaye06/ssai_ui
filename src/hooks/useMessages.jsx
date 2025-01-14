import { useContext } from "react";
import { MessageContext } from "@/contexts/MessageContext";

export function useMessages() {
  const context = useContext(MessageContext);
  
  if (context === undefined) {
    throw new Error("useMessages must be used within a MessageProvider");
  }
  
  return context;
}