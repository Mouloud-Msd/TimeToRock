import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Box, TextField, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { sendMsg } from "../../Store/thunks/thunk";
import { NotifyMe } from "../../services/notify";
const Form = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      job: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("please, enter your email")
        .email("please, enter a valid email adress")
        .nullable(),
      firstname: Yup.string()
        .required("please, enter your Firstname")
        .min(2, "please, enter a valid Firstname")
        .nullable(),
      lastname: Yup.string()
        .required("please, enter your Lastname")
        .min(3, "please, enter a valid Lastname")
        .nullable(),
      job: Yup.string()
        .required("please, enter your Job")
        .min(3, "please, enter a valid Job")
        .nullable(),
      message: Yup.string()
        .required("please, enter your Message")
        .min(5, "message should at least contain 5 caracters")
        .max(500, "Your message should contain only 500 caracters")
        .nullable(),
    }),
    onSubmit: (values) => {
      dispatch(sendMsg())
        .unwrap()
        .then((res) => {
          if (res) {
            NotifyMe(
              "SUCCESS",
              "Thank You for contacting, we will write to you soon :)"
            );
          } else {
            NotifyMe(
              "ERROR",
              "Oups,it's like an error occured...please try again"
            );
          }
        });
    },
    validator: () => ({}),
  });
  return (
    <Container maxWidth="xl">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} sx={{ width: 1, margin: "auto" }}>
          <Grid item md={6} sx={{ width: 1, textAlign: "center" }}>
            <TextField
              sx={{ width: 3 / 4, margin: "5px" }}
              type="text"
              label="Firsname"
              variant="outlined"
              error={
                Boolean(formik.errors.firstname) &&
                Boolean(formik.touched.firstname)
              }
              helperText={
                Boolean(formik.touched.firstname) && formik.errors.firstname
              }
              {...formik.getFieldProps("firstname")}
            />
          </Grid>

          <Grid item md={6} sx={{ width: 1, textAlign: "center" }}>
            <TextField
              sx={{ width: 3 / 4, margin: "5px" }}
              type="text"
              label="lastname"
              variant="outlined"
              error={
                Boolean(formik.errors.lastname) &&
                Boolean(formik.touched.lastname)
              }
              helperText={
                Boolean(formik.touched.lastname) && formik.errors.lastname
              }
              {...formik.getFieldProps("lastname")}
            />
          </Grid>

          <Grid item md={6} sx={{ width: 1, textAlign: "center" }}>
            <TextField
              sx={{ width: 3 / 4, margin: "5px" }}
              type="text"
              label="job"
              variant="outlined"
              error={Boolean(formik.errors.job) && Boolean(formik.touched.job)}
              helperText={Boolean(formik.touched.job) && formik.errors.job}
              {...formik.getFieldProps("job")}
            />
          </Grid>

          <Grid item md={6} sx={{ width: 1, textAlign: "center" }}>
            <TextField
              sx={{ width: 3 / 4, margin: "5px" }}
              type="text"
              label="email"
              variant="outlined"
              error={
                Boolean(formik.errors.email) && Boolean(formik.touched.email)
              }
              helperText={Boolean(formik.errors.email) && formik.errors.email}
              {...formik.getFieldProps("email")}
            />
          </Grid>

          <Grid item md={12} sx={{ width: 1, textAlign: "center" }}>
            <TextField
              sx={{ width: 3 / 4, margin: "5px" }}
              multiline
              rows={3}
              type="text"
              label="Message"
              variant="outlined"
              error={
                Boolean(formik.errors.message) &&
                Boolean(formik.touched.message)
              }
              helperText={
                Boolean(formik.touched.message) && formik.errors.message
              }
              {...formik.getFieldProps("message")}
            />
          </Grid>

          <Box
            sx={{
              width: 1,
              margin: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{ backgroundColor: "#7895B2" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Send
            </Button>
          </Box>
        </Grid>
      </form>
    </Container>
  );
};
export default Form;
