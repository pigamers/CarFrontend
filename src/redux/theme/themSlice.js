
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        defaultTheme: localStorage.getItem('theme') || 'light',
    },
    reducers: {
        toggleTheme(state) {
            state.defaultTheme = state.defaultTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.defaultTheme);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
