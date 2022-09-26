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
    setSingleDeleteTripState: (state, action) => {
      const unDeleted = state.trips.filter((trip) => trip._id !== action.payload);
      state.trips = unDeleted;
    },
    setDeleteDestinationTripPage: (state, action) => {
      const unDeleted = state.destinations.filter((trip) => trip._id !== action.payload);
      state.destinations = unDeleted;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => ({ ...state, ...action.payload.trip }),
    },
  },
});
export const {
  setGetAllTripsState, setCreateTripState, setGetSingleTripState, setUpdateTripState, setDeleteTripState, setSingleDeleteTripState, setDeleteDestinationTripPage,
} = tripSlice.actions;

export const selectTripState = (state) => state.trip?.savedTrip;
export const selectSingleTripState = (state) => state.trip;
export const selectAllTripsUserState = (state) => state.trip;
export const selectAllTripsState = (state) => state.trip;

export default tripSlice.reducer;
