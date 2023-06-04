"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "@/redux/spotifySlice";
import {
  ContextMenuTrigger,
  ContextMenu,
  ContextMenuItem,
  Submenu,
} from "rctx-contextmenu";
import { addToLibrary, changeCount } from "@/redux/spotifySlice";
import { useEffect } from "react";
import Link from "next/link";

const SongItem = ({ RecentlySong }) => {
  const dispatch = useDispatch();

  const { current, playing, controls } = useSelector((state) => state.spotify);

  const handlebutton = () => {
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

  useEffect(() => {
    if (current?.id === RecentlySong.id && playing) {
      dispatch(changeCount(RecentlySong.id));
    } else if (current?.id === RecentlySong.id && !playing) {
      dispatch(changeCount(RecentlySong.id));
    }
  }, [current]);

  const isCurrentItem = current?.id === RecentlySong.id && playing;

  const key = RecentlySong.id;

  const handleAddLibrary = (id, e) => {
    e.preventDefault();
    if (RecentlySong.id === id) {
      dispatch(addToLibrary(RecentlySong));
    }
  };

  return (
    <Link href={`playlist/${key}`}>
      <ContextMenuTrigger id={key}>
        <div
          key={key}
          className="group p-4 cursor-pointer flex justify-center items-center flex-col bg-bottombar_bg  rounded-md duration-300 hover:bg-bottombar_border"
        >
          <div className="relative w-full">
            <Image
              src={RecentlySong.album_image}
              width={160}
              height={160}
              className="rounded-md w-full"
              y
              alt="Picture of the author"
            />

            <div className="group-hover:opacity-100 duration-500  absolute  bottom-1 right-1 opacity-0">
              <button
                onClick={() => handlebutton()}
                className="w-10 h-10 rounded-full bg-spotify_green flex items-center justify-center hover:scale-105 duration-300"
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

          <div className="pt-4">
            <h2 className="text-sm pb-2">{RecentlySong.title}</h2>
            <p className="text-sm min-h-[50px] break-all text-sidebar_text">
              {RecentlySong.description.length > 20
                ? RecentlySong.description.substring(0, 40) + "..."
                : RecentlySong.description}
            </p>
          </div>
        </div>
      </ContextMenuTrigger>

      <ContextMenu className="bg-bottombar_border" id={key}>
        <ContextMenuItem className="hover:bg-suggested_bg duration-300">
          Add to Queue
        </ContextMenuItem>
        <ContextMenuItem className="hover:bg-suggested_bg duration-300">
          Go to playlist radio
        </ContextMenuItem>
        <ContextMenuItem className="hover:bg-suggested_bg duration-300">
          Report
        </ContextMenuItem>
        <ContextMenuItem
          onClick={(e) => handleAddLibrary(RecentlySong.id, e)}
          className="hover:bg-suggested_bg duration-300"
        >
          {RecentlySong.libInfo === false
            ? "Add to your Library"
            : "Remove from Your Library"}
        </ContextMenuItem>
        <Submenu title="Share" className="my-context-menu-submenu">
          <ContextMenuItem className="hover:bg-suggested_bg text-xs duration-300 font-black">
            Copy Link to playlist
          </ContextMenuItem>
          <ContextMenuItem className="hover:bg-suggested_bg text-xs duration-300  font-black">
            Embed Playlist
          </ContextMenuItem>
        </Submenu>
      </ContextMenu>
    </Link>
  );
};

export default SongItem;
