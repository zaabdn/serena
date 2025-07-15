import React from "react";
import FooterHero from "../footer";
import Navbar from "../navbar";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-plus-jakarta-sans)]">
      <div className="lg:px-60 min-[300px]:px-4 pb-32">
        <Navbar />
        {children}
      </div>

      <FooterHero />
    </div>
  );
};

export default AppLayout;
