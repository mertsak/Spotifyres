"use client";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent, addToFavorite } from "@/redux/spotifySlice";
import songPlayed from "../../public/song-played.svg";

const LikedSingleItem = ({ item, index }) => {
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

  const handleChangeHeart = (item) => {
    if (item.id === item.id) {
      dispatch(addToFavorite(item));
    }
  };

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
            <button
              className="opacity-0 group-hover:opacity-100 duration-300"
              onClick={() => handleChangeHeart(item)}
            >
              {item.heart === false ? (
                <svg
                  role="img"
                  height="16"
                  width="16"
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
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  className="text-spotify_green fill-spotify_green duration-300"
                >
                  <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
                </svg>
              )}
            </button>
            <p className="text-sm text-sidebar_text">{item.time}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikedSingleItem;
