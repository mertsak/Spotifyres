"use client";
import React from "react";
import { useSelector } from "react-redux";
import CustomRange from "./CustomRange";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import Image from "next/image";

const Fullscreen = ({
  toggle,
  controls,
  state,
  handleSecondToTime,
  volumeIcon,
}) => {
  const { current } = useSelector((state) => state.spotify);

  return (
    <div className="h-full relative">
      <div
        style={{ backgroundImage: `url(${current.sidebar_image})` }}
        className="absolute inset-0 object-cover bg-center bg-cover bg-no-repeat filter blur-sm opacity-50"
      ></div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col px-4 items-center w-full absolute bottom-4"
      >
        <div className="w-[92%] flex items-center gap-2 relative">
          <div className="absolute bottom-20 left-0">
            <div className="flex justify-center items-center gap-4">
              <Image
                src={current?.sidebar_image}
                alt="sidebar_image"
                width={150}
                height={150}
                className="rounded-full hover:scale-110 animate-spin-slow"
              />

              <div className="flex flex-col justify-center items-start">
                <p className="text-white text-3xl"> {current?.music_title} </p>
                <p className="text-sidebar_text text-xl"> {current?.artist} </p>
              </div>
            </div>
          </div>

          <div className="text-xs">{handleSecondToTime(state?.time)}</div>

          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />

          <div className="text-xs"> {handleSecondToTime(state?.duration)}</div>
        </div>

        <div className="w-[90%] flex space-x-2  items-center justify-between">
          <div className="w-full"></div>

          <div className="flex w-full justify-center items-center gap-2">
            <button className="flex justify-center items-center h-8 w-8 fill-white opacity-70 hover:opacity-100 duration-300">
              <svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
              >
                <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
                <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
              </svg>
            </button>

            <button className="flex justify-center items-center h-8 w-8 fill-white opacity-70 hover:opacity-100 duration-300">
              <svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
              >
                <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
              </svg>
            </button>

            <button
              onClick={controls[state?.playing ? "pause" : "play"]}
              className="flex justify-center items-center rounded-full h-16 w-16 bg-white fill-black duration-300 hover:scale-105"
            >
              {state?.playing ? (
                <svg
                  role="img"
                  height="32"
                  width="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  class="Svg-sc-ytk21e-0 gQUQL"
                >
                  <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                </svg>
              ) : (
                <svg
                  role="img"
                  height="32"
                  width="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                >
                  <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
                </svg>
              )}
            </button>

            <button className="flex justify-center items-center h-8 w-8 fill-white opacity-70 hover:opacity-100 duration-300">
              <svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
              >
                <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
              </svg>
            </button>

            <button className="flex justify-center items-center h-8 w-8 fill-white opacity-70 hover:opacity-100 duration-300">
              <svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
              >
                <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
              </svg>
            </button>
          </div>

          <div className="flex justify-end items-center w-full gap-2">
            <button
              onClick={controls[state.muted ? "unmute" : "mute"]}
              className="flex justify-end items-center h-8 w-8 fill-white opacity-70 hover:opacity-100 duration-300"
            >
              {volumeIcon === "volumeMuted" ? (
                <svg
                  role="presentation"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  aria-label="Volume off"
                  id="volume-icon"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                >
                  <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
                  <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
                </svg>
              ) : (
                <></>
              )}

              {volumeIcon === "volumeLow" ? (
                <svg
                  role="presentation"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  aria-label="Volume low"
                  id="volume-icon"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                >
                  <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
                </svg>
              ) : (
                <></>
              )}

              {volumeIcon === "volumeNormal" ? (
                <svg
                  role="presentation"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  aria-label="Volume medium"
                  id="volume-icon"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                >
                  <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"></path>
                </svg>
              ) : (
                <></>
              )}

              {volumeIcon === "volumeFull" ? (
                <svg
                  role="presentation"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  aria-label="Volume high"
                  id="volume-icon"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                >
                  <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
                  <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
                </svg>
              ) : (
                <></>
              )}
            </button>

            <div className="w-[5.813rem] max-w-full">
              <CustomRange
                step={0.01}
                min={0}
                max={1}
                value={state.muted ? 0 : state.volume}
                onChange={(value) => {
                  controls.unmute();
                  controls.volume(value);
                }}
              />
            </div>

            <button onClick={() => toggle()}>
              <AiOutlineFullscreenExit />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fullscreen;
