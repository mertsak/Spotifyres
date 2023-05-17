import { createSlice } from "@reduxjs/toolkit";
import albumsData from "@/redux/services/search-album/search-albums";
import RecentlySongs from "@/redux/services/recently-played/recently-songs";

export const spotifySlice = createSlice({
  name: "spotify",
  initialState: {
    current: false,
    controls: false,
    playing: false,
    sidebar: false,
    searchPath: "",
    library: [],
    favorites: [],
    albums: albumsData,
    recentlySongs: RecentlySongs,
  },
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setControls: (state, action) => {
      state.controls = action.payload;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
    setSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
    searchPath: (state, action) => {
      state.searchPath = action.payload;
    },
    addToLibrary: (state, action) => {
      const { id } = action.payload;

      state.recentlySongs.map((item) => {
        if (item.id === id) {
          item.libInfo = !item.libInfo;
        }
      });

      if (state.library.find((item) => item.id === id)) {
        state.library = state.library.filter((item) => item.id !== id);
      } else {
        state.library.push({ ...action.payload, libInfo: true });
      }
    },
    addToFavorite: (state, action) => {
      const { id } = action.payload;

      state.library.map((item) => {
        item.inner_album.map((x) => {
          if (x.id === id) {
            x.heart = !x.heart;
          }
        });
      });

      if (state.favorites.find((item) => item.id === id)) {
        state.favorites = state.favorites.filter((item) => item.id !== id);
      } else {
        state.favorites.push({ ...action.payload, heart: true });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setControls,
  setCurrent,
  setPlaying,
  setSidebar,
  searchPath,
  addToLibrary,
  addToFavorite,
} = spotifySlice.actions;

export default spotifySlice.reducer;
