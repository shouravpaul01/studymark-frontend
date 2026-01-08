import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">


      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>


    </div>
  );
}
