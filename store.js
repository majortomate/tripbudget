import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import auth from './features/auth/authSlice';
import trip from './features/trip/tripSlice';
import destination from './features/destination/destinationSlice';
import uploadTravels from './features/upload/uploadTravelsSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      auth,
      trip,
      destination,
      uploadTravels,
    },
  });
}
export const wrapper = createWrapper(makeStore);
