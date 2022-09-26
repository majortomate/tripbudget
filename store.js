import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import auth from './features/auth/authSlice';
import trip from './features/trip/tripSlice';
import destination from './features/destination/destinationSlice';
import uploadTravels from './features/upload/uploadTravelsSlice';
import post from './features/post/postSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      auth,
      trip,
      destination,
      uploadTravels,
      post,
    },
    devTools: false,
  });
}
export const wrapper = createWrapper(makeStore, { debug: false });
