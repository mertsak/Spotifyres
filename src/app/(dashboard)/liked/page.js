"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrent } from "@/redux/spotifySlice";
import LikedSingleItem from "@/components/LikedSingleItem";
import Footer from "@/components/Footer";

const page = () => {
  const dispatch = useDispatch();
  const { current, playing, controls, favorites } = useSelector(
    (state) => state.spotify
  );

  const id = favorites.filter((item) => item.id === current.id)[0]?.id;

  const handlebutton = () => {
    if (current.id === id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(id));
    }
  };

  const isCurrentItem = current?.id === id && playing;

  return (
    <>
      <div className="h-[30vh] px-8 flex items-center">
        <div className="flex justify-start items-center gap-6 w-full h-full">
          <Image
            src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
            alt="liked songs"
            width={225}
            height={225}
          />
          <div className="w-full h-full text-xs flex items-start justify-end flex-col pb-8">
            <h3>Playlist</h3>
            <h1 className="text-8xl font-bold tracking-tighter pt-2 pb-4">
              Liked Songs
            </h1>
            <div className="flex  justify-start items-center gap-2 pt-2">
              <Image src="/logo.svg" alt="lyriks" width={24} height={24} />
              <p>LYRIKS </p>
              {favorites.length === 0 ? (
                <></>
              ) : (
                <>
                  <p>|| 2 , songs</p>
                  <p className="text-sidebar_text">about 2 hr 15 min</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center w-full p-8 gap-6">
        {favorites.length === 0 ? (
          <></>
        ) : (
          <>
            <div className="group-hover:opacity-100 duration-500">
              <button
                onClick={() => handlebutton()}
                className="w-14 h-14 rounded-full bg-spotify_green flex items-center justify-center hover:scale-105 duration-300"
              >
                {isCurrentItem === false ? (
                  <svg
                    role="img"
                    height="32"
                    width="32"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-encore-id="icon"
                  >
                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                  </svg>
                ) : (
                  <svg
                    role="img"
                    height="32"
                    width="32"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-encore-id="icon"
                  >
                    <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                  </svg>
                )}
              </button>
            </div>
            <div className="h-full flex justify-center items-center">
              <button>
                <svg
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                  className="fill-sidebar_text w-8 h-8  hover:fill-white duration-300"
                >
                  <path d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z"></path>
                </svg>
              </button>
            </div>
            <div className="h-full flex justify-center items-center">
              <button className="hover:text-white duration-300">
                <svg
                  role="img"
                  height="32"
                  width="32"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                  className="fill-sidebar_text w-8 h-8  hover:fill-white duration-300"
                >
                  <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                </svg>
              </button>
            </div>
          </>
        )}
      </div>

      <div className="px-6 w-full">
        {favorites.length === 0 ? (
          <div className="w-full h-[40vh] flex justify-center items-center flex-col gap-8">
            <svg
              role="img"
              height="72"
              width="72"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-encore-id="icon"
              className="fill-white"
            >
              <path d="M15 4v12.167a3.5 3.5 0 1 1-3.5-3.5H13V4h2zm-2 10.667h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path>
            </svg>

            <h1 className="text-3xl font-extrabold">
              Songs you like will appear here
            </h1>

            <span className="text-lg">
              Save songs by tapping the heart icon.
            </span>

            <button className="rounded-full bg-white px-8 py-3 hover:scale-105 duration-300 text-black">
              Find Songs
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-start items-center px-6 rounded-lg gap-4 h-14 text-sidebar_text">
              <p className="flex items-center justify-center h-full">#</p>

              <div className="w-full flex justify-between items-center h-full">
                <div className="flex flex-col items-start justify-center h-full min-w-[200px]">
                  <p className="text-sm">Title</p>
                </div>

                <div className="flex justify-start items-center h-full min-w-[150px]">
                  <p className="text-xs text-sidebar_text">Album</p>
                </div>

                <div className="flex justify-center items-center h-full min-w-[35px]">
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    className="text-sm fill-sidebar_text"
                  >
                    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                    <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <hr className="text-sidebar_text opacity-20 pb-4" />
            {favorites.map((item, index) => (
              <div key={item.id}>
                <LikedSingleItem item={item} index={index} />
              </div>
            ))}
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default page;
