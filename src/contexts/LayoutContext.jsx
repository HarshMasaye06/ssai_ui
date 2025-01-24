"use client";

import { createContext, useState } from "react";

export const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [isSideBarOpen, setSideBarOpen] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editMessage, setEditMessage] = useState(null);

  const closeSideBar = () => {
    setSideBarOpen(false);
  };
  const openSideBar = () => {
    setSideBarOpen(true);
  };

  const toggleEditMode = (msg) => {
    if (editMode === true) {
      setEditMessage(msg);
    } else if (editMode === false) {
      setSideBarOpen(!isSideBarOpen);
      setEditMode(!editMode);
      setEditMessage(msg);
    }
  };

  const closeEditMode = () => {
    setSideBarOpen(!isSideBarOpen);
    setEditMode(!editMode);
    setEditMessage(null);
  };

  return (
    <LayoutContext.Provider
      value={{
        editMode,
        editMessage,
        isSideBarOpen,
        closeSideBar,
        openSideBar,
        toggleEditMode,
        closeEditMode,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
