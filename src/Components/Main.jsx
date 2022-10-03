import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Container from "@mui/material/Container";

import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../Store/thunks/thunk";

import PostDetails from "./postDetails";
import NewsLetter from "./NewsLetter";
import About from "./About";

const Main = () => {
  const dispatchPosts = useDispatch();
  useEffect(() => {
    dispatchPosts(fetchPosts({ page: 1, order: "asc", limit: 4 }));
  }, []);
  return (
    <>
      <Header sx={{ zIndex: "1000" }} />
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#E8DFCA",

          minHeight: "80vh",
        }}
      >
        <Routes>
          <Route path="Rock-Time/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/Rock-Time/home" />} />
          <Route path="Rock-Time/contact" element={<Contact />} />
          <Route path="Rock-Time/about" element={<About />} />
          <Route path="Rock-Time/post/:id" element={<PostDetails />} />
        </Routes>
        <NewsLetter />
      </Container>
    </>
  );
};

export default Main;
