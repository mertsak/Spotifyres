import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../redux/spotifySlice";

const SidebarCover = () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.spotify.current);

  return (
    <div className="pt-[100%] relative bg-black group">
      <Image
        src={current.sidebar_image}
        width={300}
        height={300}
        alt="cover"
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="w-6 h-6 bg-black opacity-0  group-hover:opacity-100 duration-300 rotate-180 hover:scale-110  rounded-full absolute top-1 right-1 flex justify-center items-center"
      >
        <svg
          role="img"
          height="16"
          width="16"
          aria-hidden="true"
          viewBox="0 0 16 16"
          data-encore-id="icon"
          className="fill-white"
        >
          <path d="M.47 11.03a.75.75 0 0 0 1.06 0L8 4.56l6.47 6.47a.75.75 0 1 0 1.06-1.06L8 2.44.47 9.97a.75.75 0 0 0 0 1.06z"></path>
        </svg>
      </button>
    </div>
  );
};

export default SidebarCover;
