import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import auth from './features/auth/authSlice';
import trip from './features/trip/tripSlice';
import destination from './features/destination/destinationSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      auth,
      trip,
      destination,
    },
  });
}
export const wrapper = createWrapper(makeStore);
