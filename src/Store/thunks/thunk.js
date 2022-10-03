import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ page, order, limit }, { getState }) => {
    try {
      const { data } = await axios.get(
        `https://my-json-server.typicode.com/Mouloud-Msd/RockBase/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`
      );
      const prevState = getState().posts; //this allow us to access previous state
      return {
        items: [...prevState.posts.items, ...data],
        page: page,
        postsEnded: data.length >= limit ? false : true,
      };
    } catch (error) {
      throw error;
    }
  }
);

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async ({ id }, { getState }) => {
    try {
      const { data } = await axios.get(
        `https://my-json-server.typicode.com/Mouloud-Msd/RockBase/posts/${id}`
      );
      //const prevState = getState().posts; //this allow us to access previous state
      return {
        post: data,
      };
    } catch (error) {
      throw error;
    }
  }
);

export const fetchUserEmail = createAsyncThunk(
  "posts/fetchUserEmail",
  async (email) => {
    try {
      const { data } = await axios.get(
        `https://my-json-server.typicode.com/Mouloud-Msd/RockBase/newsletter/?email=${email}`
      );
      console.log("email", email);
      //const prevState = getState().posts; //this allow us to access previous state
      if (data.length > 0) {
        console.log("User already Subscribed");
        return { added: false };
      } else {
        console.log("thunk not  Found data", email);
        axios.post(
          "https://my-json-server.typicode.com/Mouloud-Msd/RockBase/newsletter/",
          {
            email: email,
          }
        );
        return { email: email, added: true };
      }
    } catch (error) {
      throw error;
    }
  }
);
export const sendMsg = createAsyncThunk("msg/sendMsg", async (msg) => {
  try {
    const { data } = await axios.post(
      `https://my-json-server.typicode.com/Mouloud-Msd/RockBase/contacts`,
      { msg }
    );
    //const prevState = getState().posts; //this allow us to access previous state
    return {
      msg: data,
    };
  } catch (error) {
    throw error;
  }
});
/*`http://localhost:3001/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id` */
