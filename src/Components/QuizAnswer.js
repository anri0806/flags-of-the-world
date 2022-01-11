import React from "react";
import { Typography } from "@mui/material";

function QuizAnswer({ emoji, correctAnswer }) {
  return (
    <div>
      <Typography
        sx={{
          color: "white",
          fontSize: "22px",
          margin: "50px",
        }}
      >
        {emoji} The answer is {correctAnswer}!
      </Typography>
    </div>
  );
}

export default QuizAnswer;
