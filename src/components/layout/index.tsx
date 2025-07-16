import React from "react";
import FooterHero from "../footer";
import Navbar from "../navbar";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-plus-jakarta-sans)]">
      <div className="px-2 sm:px-4 md:8px lg:max-w-3/4 lg:mx-auto pb-20">
        <Navbar />
        {children}
      </div>
      <FooterHero />
    </div>
  );
};

export default AppLayout;
