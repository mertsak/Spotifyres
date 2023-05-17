import Footer from "@/components/Footer";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="w-full h-full p-6 flex flex-col gap-8 overflow-y-auto">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default layout;
