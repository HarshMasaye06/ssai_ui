"use client";

import { useState, useEffect, useContext } from "react";
import { OverlayContext } from "@/contexts/OverlayContext";

export function useOverlay() {
  const context = useContext(OverlayContext);

  if (context === undefined) {
    throw new Error("useMessages must be used within a MessageProvider");
  }

  return context;
}
