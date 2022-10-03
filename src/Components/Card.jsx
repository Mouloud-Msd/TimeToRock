import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
export default function ImgMediaCard({ post }) {
  const [selected, setSelected] = React.useState(false);
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          width="100%"
          image={post.image}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
            }}
          >
            <Typography variant="subtitle2" component="p">
              {post.author}, <Moment format="DD MMMM">{post.date}</Moment>
            </Typography>
          </Box>
          <Typography gutterBottom variant="h5" component="div">
            {post.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.excerpt}
          </Typography>
        </CardContent>
        <CardActions>
          <ToggleButton
            color="primary"
            sx={{ outline: "none", border: "none" }}
            size="small"
            value="check"
            selected={selected}
            onChange={() => {
              navigator.clipboard.writeText(
                `https://mouloud-msd.github.io/Rock-Time/post/${post.id}`
              );
              setSelected(true);
              setTimeout(() => {
                setSelected(false);
              }, 3000);
            }}
          >
            {selected ? "Copied !" : "Copy Link"}
          </ToggleButton>
          <Button size="small" component={Link} to={`/post/${post.id}`}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
