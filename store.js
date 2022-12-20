import {configureStore} from '@reduxjs/toolkit';
import navReducer from './src/slices/NavSlice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
