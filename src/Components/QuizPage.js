import React, { useState } from "react";

function QuizPage({ flags }) {
  const quizImage = flags.map((flag) => flag.flag);
  //console.log(quizImage)

  return (
    <div>
      <img src={quizImage[0]} width="200px" />
    </div>
  );
}

export default QuizPage;
