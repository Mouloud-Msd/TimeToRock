import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, fetchPostById } from "../thunks/thunk";
const postsSlice = createSlice({
  name: "posts/postsSlice",
  initialState: {
    isLoading: false,
    postsEnded: false,
    page: 1,
    post: {},
    posts: {
      items: [],
    },
  },
  reducers: {
    clearCurrentPost: (state) => {
      state.post = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        console.log("getPosts request is pending...");
        state.isLoading = true;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false;
        console.log("getPosts request is rejected :(");
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        console.log(" getPostsrequest success :)");
        state.isLoading = false;
        state.page = action.payload.page;
        state.posts.items = action.payload.items;
        state.postsEnded = action.payload.postsEnded;
      })
      .addCase(fetchPostById.pending, (state) => {
        state.isLoading = true;
        console.log("getPostById request is pending...");
      })
      .addCase(fetchPostById.rejected, (state) => {
        state.isLoading = false;
        console.log("getPostById request is rejected :(");
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("getPostById request is fulfilled :)");
        state.post = action.payload.post;
      });
  },
});

export const { clearCurrentPost } = postsSlice.actions;
export default postsSlice.reducer;
