/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginState: (state, action) => action.payload,
    setLogoutState: () => ({
      user: null,
    }),
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.auth }),
  },
});
export const {
  setLoginState, setLogoutState,
} = authSlice.actions;

export const selectUserState = (state) => state.auth.user;

export default authSlice.reducer;
