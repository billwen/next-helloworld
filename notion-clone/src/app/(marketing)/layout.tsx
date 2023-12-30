import React from 'react';
import NavBar from "./_components/navbar";

const MarketingLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <NavBar />
      <main>
        {children}
      </main>

    </div>
  );
};

export default MarketingLayout;