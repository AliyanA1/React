import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: localStorage.getItem("theme") === "dark", // ✅ Fix initial state
};

const themeSlice = createSlice({
  name: "theme",
  initialState, // ✅ Fix typo (was initailState)
  reducers: {
    toggleTheme: (state) => { // ✅ Fix function name (was togelTheme)
      state.darkMode = !state.darkMode;
      localStorage.setItem("theme", state.darkMode ? "dark" : "light");

      if (state.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

// ✅ Export correctly
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
