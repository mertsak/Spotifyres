"use client";
import LoginForm from "@/components/LoginForm";
import React from "react";
import { signIn } from "next-auth/react";

const page = () => {
  const handleGoogle = () => {
    signIn("google");
  };

  return (
    <div className="flex flex-col bg-black py-20 justify-center m-8 items-center w-[750px] mx-auto text-center">
      {/*  Header */}
      <div className="mb-8 w-full flex flex-col justify-center items-center">
        {/* login info text */}
        <h2 className="text-white text-5xl font-black tracking-tighter mb-5">
          LYRIKS'da oturum aç
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center w-full gap-4 mb-2">
        <button
          onClick={() => handleGoogle()}
          className="w-[40%] border-white border-opacity-50 hover:border-opacity-100 border-solid border rounded-full py-3 px-6 flex justify-center items-center gap-5 hover:scale-105 duration-300"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.6 12.2272C21.6 11.5181 21.5364 10.8363 21.4182 10.1818H12V14.0499H17.3818C17.15 15.2999 16.4455 16.359 15.3864 17.0681V19.5772H18.6182C20.5091 17.8363 21.6 15.2727 21.6 12.2272Z"
              fill="#4285F4"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 21.9999C14.7 21.9999 16.9636 21.1044 18.6181 19.5772L15.3863 17.0681C14.4909 17.6681 13.3454 18.0226 12 18.0226C9.39542 18.0226 7.19087 16.2635 6.40451 13.8999H3.0636V16.4908C4.70905 19.759 8.09087 21.9999 12 21.9999Z"
              fill="#34A853"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.40455 13.9001C6.20455 13.3001 6.09091 12.6592 6.09091 12.0001C6.09091 11.341 6.20455 10.7001 6.40455 10.1001V7.50916H3.06364C2.38636 8.85916 2 10.3864 2 12.0001C2 13.6137 2.38636 15.141 3.06364 16.491L6.40455 13.9001Z"
              fill="#FBBC05"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 5.97727C13.4681 5.97727 14.7863 6.48182 15.8227 7.47273L18.6909 4.60455C16.9591 2.99091 14.6954 2 12 2C8.09087 2 4.70905 4.24091 3.0636 7.50909L6.40451 10.1C7.19087 7.73636 9.39542 5.97727 12 5.97727Z"
              fill="#EA4335"
            ></path>
          </svg>
          <span className="text-white">Google ile kaydol</span>
        </button>
      </div>

      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-[65%] h-px my-4 bg-white border-0 opacity-30" />
      </div>

      <LoginForm />
    </div>
  );
};

export default page;
