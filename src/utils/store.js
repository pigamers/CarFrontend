// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../utils/auth/authSlice';
import themeReducer from '../utils/theme/themSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});

export default store;
