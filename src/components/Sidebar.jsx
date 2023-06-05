"use client";
import Image from "next/image";

// react icons
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { useSelector } from "react-redux";
import SidebarCover from "./SidebarCover";

const Sidebar = () => {
  const sidebar = useSelector((state) => state.spotify.sidebar);
  const library = useSelector((state) => state.spotify.library);

  return (
    <>
      {/* sidebar container */}
      <div className="w-60 min-w-[15rem] bg-sidebar_bg text-sidebar_text">
        {/* sidebar inner  container */}
        <div className=" flex  flex-col h-full  items-start justify-center pt-6">
          {/* logo container */}
          <div className="px-6 mb-4 w-full">
            <Link className="flex justify-center items-center" href="/">
              <Image src="/logo.svg" alt="logo" width="130" height="40" />
            </Link>
          </div>

          {/* sidebar menu container */}

          <ul className="w-full px-2">
            <li>
              <Link
                className="flex justify-start gap-4 items-center px-4 h-10 hover:text-sidebar_text_active duration-300"
                href="/"
              >
                <AiFillHome className="text-2xl" />
                <span>Home</span>
              </Link>
            </li>

            <li>
              <Link
                className="flex justify-start gap-4 items-center px-4 h-10 hover:text-sidebar_text_active duration-300"
                href="search"
              >
                <AiOutlineSearch className="text-2xl" />
                <span>Search</span>
              </Link>
            </li>

            <li>
              <Link
                className="flex justify-start gap-4 items-center px-4 h-10 hover:text-sidebar_text_active duration-300"
                href="library"
              >
                <BiLibrary className="text-2xl" />
                <span>Your Library</span>
              </Link>
            </li>
          </ul>

          {/* sidebar footer container */}

          <div className="mt-6 w-full h-full">
            <div className="px-2">
              <button className="flex justify-start items-center gap-4 px-4 h-10 hover:text-sidebar_text_active duration-300">
                <BsPlusSquareFill className="text-2xl" />
                <span>Create Playlist</span>
              </button>
            </div>

            <Link href="liked">
              <button className="flex justify-start items-center gap-4 px-6 h-10 hover:text-sidebar_text_active group duration-300">
                <div className=" h-[24px] w-[24px] flex items-center justify-center opacity-70 group-hover:opacity-100  bg-gradient-to-br from-purple-700 rounded-sm to-blue-300">
                  <svg
                    role="img"
                    height="12"
                    width="12"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    className="fill-white"
                  >
                    <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
                  </svg>
                </div>
                <span className="whitespace-nowrap">Liked Songs</span>
              </button>
            </Link>

            {/* border bottom */}

            <div className="border-b text-sidebar_text opacity-40 w-48 mx-auto my-2"></div>

            <div className="wrapper flex justify-between flex-col">
              <ul className="w-full overflow-y-auto  px-2 max-h-[483px]">
                {library?.map((item) => (
                  <li key={item.id} className="px-4 h-8 flex items-center">
                    <Link
                      className="text-sm hover:text-sidebar_text_active duration-300"
                      href={`playlist/${item.id}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="w-full">
                <a
                  className="flex justify-start px-4 mb-2 items-center h-10 gap-4 hover:text-sidebar_text_active duration-300"
                  href="#"
                >
                  <FiDownload className="text-xl" />
                  <span className="text-sm">Install App</span>
                </a>
                {sidebar && <SidebarCover />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
