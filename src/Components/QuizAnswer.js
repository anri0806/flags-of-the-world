import React from "react";

function QuizAnswer({ emoji, correctAnswer }) {
  return (
    <div>
      <p>
        {emoji} The answer is {correctAnswer}{" "}
      </p>
    </div>
  );
}

export default QuizAnswer;
