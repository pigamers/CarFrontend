// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/authSlice';
import themeReducer from '../redux/theme/themSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});

export default store;
