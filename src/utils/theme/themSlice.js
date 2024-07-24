
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        defaultTheme: 'light',
    },
    reducers: {
        toggleTheme(state) {
            state.defaultTheme = state.defaultTheme === 'light' ? 'dark' : 'light';
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
