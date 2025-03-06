import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice";

// Create the store
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// ✅ Apply the theme from Redux state on page load
const darkMode = store.getState().theme.darkMode;
if (darkMode) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
