"use client";
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col justify-center pt-10 pb-20 items-center w-[450px] mx-auto text-center">
      {/*  Header */}
      <div className="mb-8 w-full flex flex-col justify-center items-center">
        {/*  LOGO */}

        <Link href="/">
          <Image src="/logo.svg" alt="logo" width="150" height="40" />
        </Link>

        {/* register info text */}
        <h2 className="text-black text-3xl font-black tracking-tighter mt-10">
          Sign up for free to start listening.
        </h2>
      </div>

      <RegisterForm />
    </div>
  );
};

export default page;
