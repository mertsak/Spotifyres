"use client";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "@/redux/spotifySlice";
import songPlayed from "../../public/song-played.svg";
import LikedButton from "./LikedButton";

const PlaylistSingleItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);

  const { current, playing, controls } = useSelector((state) => state.spotify);

  const handlebutton = () => {
    if (current.id === item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };

  const isCurrentItem = current?.id === item.id && playing;

  return (
    <>
      <div
        key={item.id}
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
        className="flex justify-start items-center px-6 rounded-lg gap-4 h-14 hover:bg-suggested_bg duration-300 group"
      >
        <div className="flex items-center justify-center h-full min-w-[30px]">
          {hover === true ? (
            <button onClick={() => handlebutton()}>
              {isCurrentItem === false ? (
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                  className="fill-white"
                >
                  <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                </svg>
              ) : (
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                  className="fill-white"
                >
                  <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                </svg>
              )}
            </button>
          ) : (
            <>
              {isCurrentItem === true ? (
                <Image src={songPlayed} width={16} height={16}></Image>
              ) : (
                <p>{index + 1}</p>
              )}
            </>
          )}
        </div>

        <div className="flex justify-start items-center gap-4 h-full">
          <Image src={item.sidebar_image} alt="music" width={40} height={40} />
        </div>

        <div className="w-full flex justify-between items-center h-full">
          <div className="flex flex-col items-start justify-center h-full min-w-[150px]">
            <p className="text-sm text-white">{item.music_title}</p>
            <p className="text-xs text-sidebar_text">{item.artist}</p>
          </div>

          <div className="flex justify-start items-center h-full min-w-[150px]">
            <p className="text-xs text-sidebar_text">{item.music_title}</p>
          </div>

          <div className="flex justify-center items-center h-full gap-4">
            <LikedButton item={item} />
            <p className="text-sm text-sidebar_text">{item.time}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaylistSingleItem;
