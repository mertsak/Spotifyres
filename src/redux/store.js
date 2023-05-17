import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "./spotifySlice";
import authSlice from "./authSlice";

// //MIDDLEWARE
// const localStorageMiddleware = ({ getState }) => {
//   return (next) => (action) => {
//     const result = next(action);
//     localStorage.setItem("applicationState", JSON.stringify(getState()));
//     return result;
//   };
// };

// const reHydrateStore = () => {
//   if (localStorage.getItem("applicationState") !== null) {
//     return JSON.parse(localStorage.getItem("applicationState")); // re-hydrate the store
//   }
// };

export const store = configureStore({
  reducer: {
    spotify: spotifyReducer,
    auth: authSlice,
  },
  // preloadedState: reHydrateStore(),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware),
});
