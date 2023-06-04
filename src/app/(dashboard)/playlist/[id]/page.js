"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrent } from "@/redux/spotifySlice";
import PlaylistSingleItem from "@/components/PlaylistSingleItem";
import Footer from "@/components/Footer";
import { addToFavorite } from "@/redux/spotifySlice";

const page = ({ params }) => {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.spotify.recentlySongs);
  const album = library.filter((item) => item.id === Number(params.id));
  const playlistHeart = album[0]?.inner_album[0].heart;

  const { current, playing, controls } = useSelector((state) => state.spotify);

  const handlebutton = () => {
    if (current.id === Number(params.id)) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(album[0]));
    }
  };

  const isCurrentItem = current?.id === Number(params.id) && playing;

  const handleChangeHeart = (current) => {
    dispatch(addToFavorite(current));
  };

  return (
    <>
      <div className="h-[30vh] px-8 flex items-center">
        {album.map((item) => (
          <div className="flex justify-start items-center gap-6 w-full h-full">
            <Image
              src={item.album_image}
              alt={item.title}
              width={225}
              height={225}
            />
            <div className="w-full h-full text-xs flex items-start justify-end flex-col pb-8">
              <h3>Playlist</h3>
              <h1 className="text-8xl font-bold tracking-tighter pt-2 pb-4">
                {item.title}
              </h1>
              <p className="text-sidebar_text"> {item.description} </p>
              <div className="flex  justify-start items-center gap-2 pt-2">
                <Image
                  src="/logo.svg"
                  alt={item.title}
                  width={24}
                  height={24}
                />
                <p>LYRIKS ||</p>
                <p>{item.inner_album.length} , songs</p>
                <p className="text-sidebar_text">about 2 hr 15 min</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start items-center w-full p-8 gap-6">
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
          <button onClick={() => handleChangeHeart(album[0])}>
            {playlistHeart === false ? (
              <svg
                role="img"
                height="36"
                width="36"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
                className="fill-sidebar_text hover:fill-white duration-300"
              >
                <path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path>
              </svg>
            ) : (
              <svg
                role="img"
                height="36"
                width="36"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
                className="text-spotify_green fill-spotify_green duration-300"
              >
                <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
              </svg>
            )}
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
      </div>

      <div className="px-6 w-full">
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

        {album.map((items) => (
          <div key={items.id}>
            {items.inner_album.map((item, index) => (
              <PlaylistSingleItem item={item} index={index} />
            ))}
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default page;
