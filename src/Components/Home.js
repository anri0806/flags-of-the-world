import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        m: 20,
        p: 10,
        bgcolor: "white",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      }}
    >
      <Typography variant="h5">
        Can you name the flags of the countries?
      </Typography>
      <h3>
        Play quiz below to see if you can guess the country from the flag. Have
        fun!
      </h3>
      <NavLink to="/quiz">Play Quiz</NavLink>
    </Box>
  );
}

export default Home;
