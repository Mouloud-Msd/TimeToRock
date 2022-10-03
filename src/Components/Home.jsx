import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Masonry from "react-masonry-css";
import { useSelector, useDispatch } from "react-redux";

import { fetchPosts } from "../Store/thunks/thunk";
import Spinner from "../Spinner/Spinner";
import Card from "./Card";
import { Button } from "@mui/material";

const Home = () => {
  const posts = useSelector((state) => state.posts.posts.items);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const postsEnded = useSelector((state) => state.posts.postsEnded);
  const page = useSelector((state) => state.posts.page);
  const dispatchPosts = useDispatch();

  const handleLoadPosts = () => {
    const newPage = page + 1;
    dispatchPosts(fetchPosts({ page: newPage, order: "asc", limit: 4 }));
  };

  return (
    <Container maxWidth="lg">
      <Grid
        className="ParentGrid"
        container
        spacing={0}
        sx={{ paddingY: "2rem", paddingX: "auto" }}
      >
        <Masonry
          breakpointCols={{ default: 4, 1000: 3, 750: 2, 500: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {posts
            ? posts.map((post, index) => {
                return <Card key={index} post={post} />;
              })
            : null}
        </Masonry>
        {isLoading ? <Spinner /> : null}
        {!postsEnded && !isLoading ? (
          <Button
            sx={{ backgroundColor: "#7895B2" }}
            type="button"
            onClick={handleLoadPosts}
            variant="contained"
          >
            Load More...
          </Button>
        ) : null}
      </Grid>
    </Container>
  );
};

export default Home;
