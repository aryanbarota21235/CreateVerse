"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";

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
  const isPoppedByBackButton = useRef(false);

  const openEnquiry = useCallback((defaultService = "") => {
    setSelectedService(defaultService);
    setIsOpen(true);
    if (typeof window !== "undefined") {
      try {
        window.history.pushState({ cv_enquiry: true }, "");
      } catch (err) {
        console.error("Failed to push history state", err);
      }
    }
  }, []);

  const closeEnquiry = useCallback(() => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      if (!isPoppedByBackButton.current && window.history.state?.cv_enquiry) {
        try {
          window.history.back();
        } catch (err) {
          console.error("Failed to pop history state", err);
        }
      }
      isPoppedByBackButton.current = false;
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) {
        isPoppedByBackButton.current = true;
        setIsOpen(false);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [isOpen]);

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
