"use client";

import { useState, useEffect } from "react";

export const Header = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<string>("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleButtonClick = (sectionId: string) => {
    setActiveButton(sectionId);
    setCurrentSection(sectionId);
    scrollToSection(sectionId);
    // Reset active state after animation
    setTimeout(() => setActiveButton(null), 300);
  };

  // Function to detect which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    // Set initial section on load
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getButtonStyle = (buttonId: string) => {
    const isHovered = hoveredButton === buttonId;
    const isActive = activeButton === buttonId;
    const isCurrent = currentSection === buttonId;
    
    // Show special styling if hovered, active, or current section
    if (isHovered || isActive || isCurrent) {
      return {
        background: "linear-gradient(135deg, #f9e8ce 0%, #bda28d 100%)",
        border: "1px solid #f9e8ce",
        color: "#44624a",
      };
    }

    return {};
  };

  const getTextColor = (buttonId: string) => {
    const isHovered = hoveredButton === buttonId;
    const isActive = activeButton === buttonId;
    const isCurrent = currentSection === buttonId;
    
    if (isHovered || isActive || isCurrent) {
      return "#44624a";
    }
    
    return "#f9e8ce";
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav
        className="flex gap-1 p-1 rounded-full backdrop-blur-md"
        style={{
          background:
            "linear-gradient(135deg, rgba(68, 98, 74, 0.3) 0%, rgba(189, 162, 141, 0.2) 100%)",
          border: "1px solid rgba(249, 232, 206, 0.2)",
        }}
      >
        <button
          onClick={() => handleButtonClick("home")}
          onMouseEnter={() => setHoveredButton("home")}
          onMouseLeave={() => setHoveredButton(null)}
          className="nav-item font-semibold transition-all duration-300"
          style={{
            ...getButtonStyle("home"),
            color: getTextColor("home"),
          }}
        >
          Home
        </button>
        <button
          onClick={() => handleButtonClick("projects")}
          onMouseEnter={() => setHoveredButton("projects")}
          onMouseLeave={() => setHoveredButton(null)}
          className="nav-item font-semibold transition-all duration-300"
          style={{
            ...getButtonStyle("projects"),
            color: getTextColor("projects"),
          }}
        >
          Projects
        </button>
        <button
          onClick={() => handleButtonClick("about")}
          onMouseEnter={() => setHoveredButton("about")}
          onMouseLeave={() => setHoveredButton(null)}
          className="nav-item font-semibold transition-all duration-300"
          style={{
            ...getButtonStyle("about"),
            color: getTextColor("about"),
          }}
        >
          About
        </button>
        <button
          onClick={() => handleButtonClick("contact")}
          onMouseEnter={() => setHoveredButton("contact")}
          onMouseLeave={() => setHoveredButton(null)}
          className="nav-item font-semibold transition-all duration-300"
          style={{
            ...getButtonStyle("contact"),
            color: getTextColor("contact"),
          }}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};
