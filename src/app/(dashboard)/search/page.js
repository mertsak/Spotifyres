"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { searchPath } from "@/redux/spotifySlice";
import Image from "next/image";

const Search = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.spotify.albums);

  useEffect(() => {
    dispatch(searchPath(pathname));
  }, [pathname]);

  return (
    <>
      <section>
        <div className="flex justify-start items-center">
          <h2 className="font-black text-2xl tracking-tighter pb-4">
            Browse all
          </h2>
        </div>
        <div className="grid grid-cols-auto_fit2 items-center justify-start gap-6">
          {albums.map((album) => (
            <div
              key={album.id}
              className="w-full h-full min-h-[175px] relative overflow-hidden rounded-lg cursor-pointer"
              style={{ backgroundColor: `${album.backgroundColor}` }}
            >
              <div>
                <p className="pl-4 pt-4 text-xl break-all font-black">
                  {album.title}
                </p>
              </div>

              <div className="absolute -bottom-3 -right-5 rotate-[30deg]">
                <Image
                  src={album.album_image}
                  alt={album.title}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Search;
