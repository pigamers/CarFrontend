import { createSlice } from '@reduxjs/toolkit';

// Function to get initial theme
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        defaultTheme: getInitialTheme(),
    },
    reducers: {
        toggleTheme(state) {
            state.defaultTheme = state.defaultTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.defaultTheme);
        },
        setSystemTheme(state) {
            const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            state.defaultTheme = isDarkMode ? 'dark' : 'light';
            localStorage.setItem('theme', state.defaultTheme);
        },
    },
});

export const { toggleTheme, setSystemTheme } = themeSlice.actions;
export default themeSlice.reducer;
