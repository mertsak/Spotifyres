import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "./spotifySlice";

export const store = configureStore({
  reducer: {
    spotify: spotifyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
