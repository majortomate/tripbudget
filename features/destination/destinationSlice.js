/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  destinations: [],
};

export const destinationSlice = createSlice({
  name: 'destination',
  initialState,
  reducers: {
    setGetAllDestinationsState: (state, action) => action.payload,
    setCreateDestinationState: (state, action) => {
      const data = action.payload;
      state.destinations.push(data);
    },
    setGetSingleDestinationState: (state, action) => action.payload,
    setUpdateDestinationState: (state, action) => action.payload,
    setDeleteDestinationState: (state, action) => action.payload,
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.destination }),
  },
});
export const {
  setGetAllDestinationsState, setCreateDestinationState, setGetSingleDestinationState, setUpdateDestinationState, setDeleteDestinationState,
} = destinationSlice.actions;

export const selectDestinationState = (state) => state.destination?.destinations;

export default destinationSlice.reducer;
