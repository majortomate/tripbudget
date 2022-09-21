/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  user: null,
  tripName: null,
  groupSize: null,
  tripDateFrom: null,
  tripDateTo: null,
};

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    setGetAllTripsState: (state, action) => action.payload,
    setCreateTripState: (state, action) => action.payload,
    setGetSingleTripState: (state, action) => action.payload,
    setUpdateTripState: (state, action) => action.payload,
    setDeleteTripState: (state, action) => action.payload,
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.trip }),
  },
});
export const {
  setGetAllTripsState, setCreateTripState, setGetSingleTripState, setUpdateTripState, setDeleteTripState,
} = tripSlice.actions;

export const selectTripState = (state) => state.trip?.savedTrip;

export default tripSlice.reducer;
