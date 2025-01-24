"use client";

import { createContext, useState } from "react";

export const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [isSideBarOpen, setSideBarOpen] = useState(true);
  const [editMode, setEditMode] = useState(false);

  const closeSideBar = () => {
    setSideBarOpen(false);
  };
  const openSideBar = () => {
    setSideBarOpen(true);
  };

  const toggleEditMode = () => {
    setSideBarOpen(!isSideBarOpen);
    setEditMode(!editMode);
  };

  return (
    <LayoutContext.Provider
      value={{
        editMode,
        isSideBarOpen,
        closeSideBar,
        openSideBar,
        toggleEditMode,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
