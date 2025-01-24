import { LayoutContext } from "@/contexts/LayoutContext";
import { useContext } from "react";

export function useLayout() {
  const context = useContext(LayoutContext);
  
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  
  return context;
}