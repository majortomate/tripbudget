/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setGetAllPostsState: (state, action) => action.payload,
    setGetSinglePostState: (state, action) => action.payload,

    extraReducers: {
      [HYDRATE]: (state, action) => ({ ...state, ...action.payload.trip }),
    },
  },
});
export const {
  setGetAllPostsState, setGetSinglePostState,
} = postSlice.actions;

export const selectPostsState = (state) => state.post.data.posts;

export default postSlice.reducer;
