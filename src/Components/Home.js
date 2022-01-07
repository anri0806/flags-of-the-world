import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";

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
      <h1>Can you name the flags of the countries?</h1>
      <h3>
        Play quiz below to see if you can guess the country from the flag. Have
        fun!
      </h3>
      <NavLink to="/quiz">Play Quiz</NavLink>
    </Box>
  );
}

export default Home;
