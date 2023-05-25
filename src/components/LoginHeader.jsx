import React from "react";
import Link from "next/link";
import Image from "next/image";

const LoginHeader = () => {
  return (
    <header className="bg-black w-full py-8 pl-12">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width="130" height="40" />
      </Link>
    </header>
  );
};

export default LoginHeader;
