import React, { useState } from "react";

function QuizPage({ flags }) {
  const [randomFlags, setRandomFlags] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  //const [answers, setAnswers] = useState([]);

  function helperFunc(data) {
    setRandomFlags(data);
    setCorrectAnswer(data[0]);
  }

  function handleClick() {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => {
        // //extract one obj from fetched data
        // setRandomFlag(data[Math.floor(Math.random() * data.length)]);
        // //extract 3 obj of fetched data  (shuffle and get first 3 elements)
        // setAnswers(data.sort(() => Math.random() - 0.5).slice(0, 3));

        //fetched 4 random flags -> save obj of array in state
        //apply first element in image  randomFlags[0]
        //for answers, shuffle 4 obj and iterate and apply name

        helperFunc(data.sort(() => Math.random() - 0.5).slice(0, 4));
        //setRandomFlags(data.sort(() => Math.random() - 0.5).slice(0, 4));
      });
  }

  ///////START FROM HERE///////
  //how to make correct answer green when wrong answered is clicked

  function handleAnswer(e) {
    //console.log(e.target.value);

    if (e.target.value === correctAnswer.name) {
      e.target.style.color = "green";
      alert(`CORRECT! The answer is ${correctAnswer.name}`);
    } else {
      e.target.style.color = "red";
      alert(`WRONG! The answer is ${correctAnswer.name}`);
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
          {randomFlags
            .sort(() => Math.random() - 0.5)
            .map((a) => (
              <button
                style={{ color: "black" }}
                onClick={handleAnswer}
                key={a.id}
                value={a.name}
              >
                {a.name}
              </button>
            ))}
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

// if(!haveIt.includes(random)) {
//   haveIt.push(random);
//   return random;
// } else {
//   if(haveIt.length < maxNr) {
//     //Recursively generate number
//    return  generateUniqueRandom(maxNr);
//   } else {
//     console.log('No more numbers available.')
//     return false;
//   }
