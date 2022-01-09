import React, { useState } from "react";
import QuizAnswer from "./QuizAnswer";

function QuizPage() {
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

  ///////START FROM HERE///////
  //Pop up message instead of alert?
  //OR how to make correct answer green when wrong answered is clicked

  function handleAnswer(e) {
    if (correctAnswer.name === e.target.textContent) {
      //e.target.textContent = `✅❌ ${e.target.textContent}`;
      setEmoji("Correct! ✅");
      setAnswered(true);
    } else {
      setEmoji("❌");
      setAnswered(true);
    }
  }

  return (
    <div>
      {randomFlags.length === 0 ? null : (
        <>
          <img
            src={correctAnswer.flag}
            width="200px"
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
                  <li onClick={handleAnswer} key={a.id}>
                    {a.name}
                  </li>
                ))}
            </ul>
          )}
        </>
      )}

      <br></br>
      <button onClick={handleClick}>
        {randomFlags.length === 0 ? "Start" : "Next"}
      </button>
    </div>
  );
}

export default QuizPage;
