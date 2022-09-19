import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import auth from './features/auth/authSlice';

export function makeStore() {
  return configureStore({
    reducer: { auth },
  });
}
export const wrapper = createWrapper(makeStore);
