/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  travels: [],
};

export const uploadTravelsSlice = createSlice({
  name: 'uploadTravels',
  initialState,
  reducers: {
    setGetAlluploadTravelsState: (state, action) => action.payload,
    setCreateUploadTravelsState: (state, action) => {
      const data = action.payload;
      state.photos.push(data);
    },
    setGetSingleUploadTravelState: (state, action) => action.payload,
    setUpdateUploadTravelState: (state, action) => action.payload,
    setDeleteUploadTravelState: (state) => { state.destinations = []; },
    setSingleDeleteUploadTravelState: (state, action) => {
      const unDeleted = state.photos.filter((travel) => travel._id !== action.payload);
      state.photos = unDeleted;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => ({ ...state, ...action.payload.uploadTravels }),
    },
  },
});
export const {
  setGetAlluploadTravelsState, setCreateUploadTravelsState, setSingleDeleteUploadTravelState,
} = uploadTravelsSlice.actions;

export const selectTravelsState = (state) => state.uploadTravels;
export const selectAllPhotosState = (state) => state.uploadTravels;

export default uploadTravelsSlice.reducer;
