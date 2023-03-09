import { Container, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React from "react";

const theme = createTheme();

const LoggedIn = () => {
  return (
    <>
      <Container
        sx={{
          mt: "12vh",
          ml: "5vw",
          minHeight: "100vh",
          [theme.breakpoints.down("md")]: {
            mt: "10vh",
            ml: "10vw",
            maxWidth: "95vw",
          },
          [theme.breakpoints.down("sm")]: {
            ml: "12vw",
            maxWidth: "80vw",
          },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#063547" }}>
          <a href="/">Homepage</a>
        </Typography>
        <br />
        
      </Container>
    </>
  );
};

export default LoggedIn;
