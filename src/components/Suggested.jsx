"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "@/redux/spotifySlice";
import Link from "next/link";

const Suggested = ({ RecentlySong }) => {
  const dispatch = useDispatch();

  const { current, playing, controls } = useSelector((state) => state.spotify);

  const handlebutton = (e) => {
    e.preventDefault();

    if (current.id === RecentlySong.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(RecentlySong));
    }
  };

  const isCurrentItem = current?.id === RecentlySong.id && playing;

  return (
    <Link
      href={`playlist/${RecentlySong.id}`}
      key={RecentlySong.id}
      className="flex justify-start items-center rounded-md bg-gray-700 group cursor-pointer bg-suggested_bg hover:bg-suggested_bg_hover duration-300"
    >
      <div className="relative w-full flex justify-start items-center">
        <Image
          src={RecentlySong.album_image}
          width={100}
          height={100}
          className="rounded-md"
          alt="Picture of the author"
        />

        <div className="pl-4 font-black tracking-tighter">
          <h2>{RecentlySong.title}</h2>
        </div>

        <div className="group-hover:opacity-100 duration-500 absolute bottom-6 right-5 opacity-0">
          <button
            onClick={(e) => handlebutton(e)}
            className="w-12 h-12 rounded-full bg-spotify_green flex items-center justify-center hover:scale-105 duration-300"
          >
            {isCurrentItem === false ? (
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
              >
                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
              </svg>
            ) : (
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
              >
                <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Suggested;
