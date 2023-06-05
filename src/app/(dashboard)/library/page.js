"use client";
import LibrarySingleItem from "@/components/LibrarySingleItem";
import { useSelector } from "react-redux";

const page = () => {
  const { library } = useSelector((state) => state.spotify);

  return (
    <>
      <section>
        <div className="flex items-center justify-start gap-6">
          {library.length > 0 ? (
            <>
              {library.map((item, index) => {
                return <LibrarySingleItem item={item} index={index} />;
              })}
            </>
          ) : (
            <>
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
                  playlists you've added to the library will appear here
                </h1>

                <span className="text-lg">
                  right click playlist add to library.
                </span>

                <button className="rounded-full bg-white px-8 py-3 hover:scale-105 duration-300 text-black">
                  Find playlist
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
