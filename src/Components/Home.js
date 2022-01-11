import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

//START FROM HERE//
//1. link "see" the list of flags in Home.js
//2. style quiz and list page

function Home() {
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: 20,
        padding: 7,
        borderRadius: 2,
        backgroundColor: "rgba(0, 6, 3, 0.5)",
        color: "white",
      }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: 47 }}>
        Can you name the flags of the countries?
      </Typography>
      <Typography sx={{ fontSize: 19 }}>
        Play quiz below to see if you can guess the country from the flag. Have
        fun!
      </Typography>
      <Typography>See the list of flags</Typography>
      <br></br>
      <br></br>
      <br></br>
      <NavLink
        to="/quiz"
        style={{
          color: "white",
          textDecoration: "none",
          backgroundColor: "#4CAF50",
          padding: "14px 25px",
          border: "none",
          borderRadius: 2,
        }}
      >
        Play Quiz
      </NavLink>
    </Box>
  );
}

export default Home;
