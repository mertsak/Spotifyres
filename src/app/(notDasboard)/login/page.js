"use client";
import LoginForm from "@/components/LoginForm";

const page = () => {
  return (
    <div className="flex flex-col bg-black py-20 justify-center m-8 items-center w-[750px] mx-auto text-center">
      {/*  Header */}
      <div className="mb-8 w-full flex flex-col justify-center items-center">
        {/* login info text */}
        <div className="text-white text-5xl font-black tracking-tighter mb-5">
          Sign in to LYRIKS
        </div>
      </div>

      <LoginForm />
    </div>
  );
};

export default page;
