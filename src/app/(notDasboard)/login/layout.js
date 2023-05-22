import LoginHeader from "@/components/LoginHeader";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="text-black w-full h-full bg-gradient-to-b from-neutral-800 via-neutral-900 to-black">
        <LoginHeader />
        {children}
      </div>
    </>
  );
};

export default layout;
