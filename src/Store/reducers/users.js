import { createSlice } from "@reduxjs/toolkit";
import { fetchUserEmail } from "../thunks/thunk";

const usersSlice = createSlice({
  name: "users/usersSlice",
  initialState: {
    users: [],
  },
  reducers: {
    clearNewsletter: (state) => {
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserEmail.pending, (state) => {
        console.log("newsLetterAdd request is pending...");
      })
      .addCase(fetchUserEmail.rejected, (state) => {
        console.log("newsLetterAdd request is rejected...");
      })
      .addCase(fetchUserEmail.fulfilled, (state, action) => {
        console.log("newsLetterAdd request is fulfilled...");
        state.users = action.payload;
      });
  },
});

export const { clearNewsletter } = usersSlice.actions;
export default usersSlice.reducer;
