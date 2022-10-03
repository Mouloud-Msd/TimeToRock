import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Box } from "@mui/material";

import Spinner from "../Spinner/Spinner";
import { Container } from "@mui/system";
import Moment from "react-moment";

import { fetchPostById } from "../Store/thunks/thunk";
import { clearCurrentPost } from "../Store/reducers/posts";
import { useEffect } from "react";

const PostDetails = () => {
  const post = useSelector((state) => state.posts.post);
  console.log("post", post.Title);
  let { id } = useParams();
  id = parseInt(id);
  const dispatchPostById = useDispatch();
  useEffect(() => {
    dispatchPostById(fetchPostById({ id }));
  }, [id]);

  useEffect(() => {
    return () => {
      dispatchPostById(clearCurrentPost());
    };
  }, []);

  if (!post.Title) return <Spinner />;
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" component="h2">
        {post.Title}
      </Typography>
      <Box
        component="img"
        sx={{
          width: { xs: 3 / 4, md: 2 / 4, margin: "auto" },
          height: { xs: 150, md: 450 },
        }}
        alt="The house from the offer."
        src={post.image}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          margin: "0.5rem",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Created By</Typography> &nbsp;
        <Typography variant="subtitle2" component="p">
          {post.author}, <Moment format="DD MMMM">{post.date}</Moment>
        </Typography>
      </Box>
      <Typography variant="body1" component="p">
        &nbsp; &nbsp;{post.content}
      </Typography>
    </Container>
  );
};

export default PostDetails;
