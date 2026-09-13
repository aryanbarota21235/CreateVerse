"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface EnquiryContextType {
  isOpen: boolean;
  openEnquiry: (defaultService?: string) => void;
  closeEnquiry: () => void;
  selectedService: string;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  // Universal tactile press listener matching e:\capsnpills
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest(
        'button, [role="button"], .pressable, a.rounded-full, a.rounded-2xl, a.rounded-xl'
      ) as HTMLElement | null;

      if (!target) return;
      if (target.hasAttribute("disabled") || target.getAttribute("aria-disabled") === "true") return;

      target.classList.add("pressed");

      const handlePointerUp = () => {
        setTimeout(() => {
          target.classList.remove("pressed");
        }, 160);
        window.removeEventListener("pointerup", handlePointerUp);
        window.removeEventListener("pointercancel", handlePointerUp);
      };

      window.addEventListener("pointerup", handlePointerUp, { once: true });
      window.addEventListener("pointercancel", handlePointerUp, { once: true });
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const openEnquiry = (defaultService = "") => {
    setSelectedService(defaultService);
    // 140ms delay allows the tactile button press animation to visibly complete
    setTimeout(() => {
      setIsOpen(true);
    }, 140);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
  };

  return (
    <EnquiryContext.Provider value={{ isOpen, openEnquiry, closeEnquiry, selectedService }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return context;
}
