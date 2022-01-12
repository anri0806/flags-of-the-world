import React from "react";
import { NavLink } from "react-router-dom";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";



function Home() {
  
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: 20,
        padding: 11,
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
      <Typography>
        <a href="/flaglist" style={{ color: "#4CAF50" }}>
          See
        </a>{" "}
        the list of flags
      </Typography>
      <br />
      <br />
      <br />
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
