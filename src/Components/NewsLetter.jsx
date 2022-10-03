import { TextField, Typography, Box, Button } from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchUserEmail } from "../Store/thunks/thunk";

import { NotifyMe } from "../services/notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearNewsletter } from "../Store/reducers/users";

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const NewsLetter = () => {
  const inputEmail = useRef();
  const dispatchEmail = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputEmail.current.value.match(mailformat)) {
      return NotifyMe("ERROR", "Please, enter a valid Email adress");
    }
    dispatchEmail(fetchUserEmail(inputEmail.current.value))
      .unwrap()
      .then((res) => {
        if (res.added) {
          console.log("added !");
          NotifyMe("SUCCESS", "ThankYou for Subscribing to the newsletter");
        } else {
          console.log("NOT added !");
          NotifyMe(
            "ERROR",
            "It's like you have already subscribed with this email"
          );
        }
        dispatchEmail(clearNewsletter());
      });
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: 1,
        backgroundColor: "#AEBDCA",
        padding: "1.5rem",
        borderRadius: "5px",
      }}
    >
      <Typography
        variant="h1"
        component="h4"
        sx={{ fontFamily: "Passions Conflict, cursive", textAlign: "center" }}
      >
        Join our Newsletter
        <Box sx={{ display: "inline", margin: "auto" }}>
          <HistoryEduIcon
            sx={{
              width: "3em",
              height: "3em",
              color: "#F5EFE6",
            }}
          />
        </Box>
      </Typography>
      <TextField
        sx={{ width: "15rem" }}
        id="standard-basic"
        label="Example@domain.com"
        variant="standard"
        inputRef={inputEmail}
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: "#7895B2", marginTop: "0.5rem" }}
        onClick={handleSubmit}
      >
        submit
      </Button>
      <ToastContainer />
    </Box>
  );
};

export default NewsLetter;
