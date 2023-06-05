"use client";
import SongItem from "./SongItem";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { searchPath } from "@/redux/spotifySlice";
import { useEffect } from "react";
import Suggested from "./Suggested";
import Footer from "./Footer";

const Content = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const RecentlySongs = useSelector((state) => state.spotify.recentlySongs);

  useEffect(() => {
    dispatch(searchPath(pathname));
  }, [pathname]);

  // Suggeted
  const withoutLast = RecentlySongs.slice(0, -1);

  return (
    <>
      {/* content inner  container */}
      <div className="w-full h-full p-6 flex flex-col gap-8 overflow-y-auto">
        {/*  Suggested  list*/}

        <section>
          <div className="flex justify-start items-center">
            <h2 className="font-black text-3xl tracking-tighter pb-4">
              Good Afternoon
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3  items-center justify-start gap-6">
            {withoutLast.map((RecentlySong) => {
              return <Suggested RecentlySong={RecentlySong} />;
            })}
          </div>
        </section>

        {/*  Recently played*/}
        <section>
          <div className="flex justify-between items-center">
            <h2 className="text-xl pb-4">
              <a className="hover:underline" href="">
                Recently played
              </a>
            </h2>
            <a className="text-sm text-sidebar_text hover:underline" href="#">
              Show All
            </a>
          </div>

          {/*  Recently song card list*/}
          <div className="grid grid-cols-auto_fit items-center justify-start gap-6">
            {RecentlySongs.map((RecentlySong) => {
              return <SongItem RecentlySong={RecentlySong} />;
            })}
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
};

export default Content;
