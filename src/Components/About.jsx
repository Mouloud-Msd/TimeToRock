import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="lg">
      <Typography component="h5" variant="h5">
        &nbsp;&nbsp;&nbsp; ``It's ROCK Time`` is a very simple application i
        made where i give a brief presentation of my favorite Rock N Roll bands
        of All Time !!!.
        <br />
        &nbsp;&nbsp;&nbsp; I made it while learning Redux and React-Redux &
        Toolkit, using mainly create-react-app and Material-UI, but also a bench
        of third party libraries... such as Formik and Yup for forms and form
        validation, react-moment, React-toastify for the notifications, axios
        for http requests, json-server, react-masonry-css for setting up the
        posts grid, and Sass for the Loader. You can find the code Source{" "}
        <a href="https://github.com/Mouloud-Msd/Rock-Time">here</a>
      </Typography>
    </Container>
  );
};

export default About;
