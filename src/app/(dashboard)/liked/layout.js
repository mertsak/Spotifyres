import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="w-full h-full p-6 flex flex-col gap-8 overflow-y-auto">
        {children}
      </div>
    </>
  );
};

export default layout;
