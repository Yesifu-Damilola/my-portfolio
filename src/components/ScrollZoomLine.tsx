"use client";

import { useState, useEffect, useRef } from "react";

export const ScrollZoomLine = () => {
  const [zoom, setZoom] = useState(1);

  // Specify that the ref will point to an HTMLDivElement
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const zoomFactor = Math.max(1 - scrollPosition / 1000, 0.001); // Adjust zoom factor for better visibility
      setZoom(zoomFactor);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50" // Added z-index for visibility
      style={{
        transform: `scaleX(${zoom})`, // Horizontal scaling effect
        transformOrigin: "center", // Zoom from the center
        transition: "transform 0.2s ease-out", // Smooth transition for zoom effect
      }}
    />
  );
};
