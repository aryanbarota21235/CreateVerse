"use client";

import React, { createContext, useContext, useState } from "react";

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

  const openEnquiry = (defaultService = "") => {
    setSelectedService(defaultService);
    setIsOpen(true);
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
