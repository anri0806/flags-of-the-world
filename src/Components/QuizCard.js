import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import QuizAnswer from "./QuizAnswer";

function QuizCard() {
  const [randomFlags, setRandomFlags] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answered, setAnswered] = useState(false);
  const [emoji, setEmoji] = useState("");

  function helperFunc(data) {
    setRandomFlags(data);
    setCorrectAnswer(data[0]);
  }

  function handleClick() {
    setAnswered(false);
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => {
        helperFunc(data.sort(() => Math.random() - 0.5).slice(0, 4));
      });
  }

  function handleAnswer(e) {
    if (correctAnswer.name === e.target.textContent) {
      setEmoji("Correct ✅");
      setAnswered(true);
    } else {
      setEmoji("Wrong ❌");
      setAnswered(true);
    }
  }

  return (
    <Card
      variant="outlined"
      sx={{
        display: "block",
        margin: "auto",
        marginTop: "30px",
        padding: "20px",
        width: "70%",
        backgroundColor: "rgba(0, 6, 3, 0.5)",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      {randomFlags.length === 0 ? (
        <>
          <Typography sx={{ color: "white", fontSize: "30px", margin: "20px" }}>
            Click start to begin!
          </Typography>
        </>
      ) : (
        <CardContent>
          <Typography
            sx={{ color: "white", fontWeight: "bold", fontSize: "35px" }}
          >
            Which Country's flag is this?
          </Typography>
          <br />
          <img
            src={correctAnswer.flag}
            width="300px"
            alt={correctAnswer.name}
          />
          <br />
          {answered ? (
            <QuizAnswer emoji={emoji} correctAnswer={correctAnswer.name} />
          ) : (
            <ul style={{ listStyleType: "none" }}>
              {randomFlags
                .sort(() => Math.random() - 0.5)
                .map((a) => (
                  <Typography
                    onClick={handleAnswer}
                    key={a.id}
                    sx={{
                      color: "white",
                      fontSize: "22px",
                      border: "1px solid white",
                      borderRadius: "5px",
                      margin: "14px 10px",
                      padding: "9px",
                      width: "300px",
                      cursor: "pointer",
                      display: "inline-block",
                    }}
                  >
                    {a.name}
                  </Typography>
                ))}
            </ul>
          )}
        </CardContent>
      )}
      <button
        onClick={handleClick}
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "20px",
          backgroundColor: "#FFA557",
          padding: "13px 25px",
          marginBottom: "20px",
          border: "none",
          borderRadius: 2,
          cursor: "pointer",
        }}
      >
        {randomFlags.length === 0 ? "START" : "Next"}
      </button>
      <br />
      <br />
      {randomFlags.length === 0 ? null : (
        <NavLink to="/" style={{ color: "#087035", fontSize: "17px" }}>
          Exit
        </NavLink>
      )}
    </Card>
  );
}

export default QuizCard;
