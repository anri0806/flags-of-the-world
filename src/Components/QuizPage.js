import React, { useState } from "react";

function QuizPage() {
  const [randomFlag, setRandomFlag] = useState("");
  const [answers, setAnswers] = useState([]);

  function handleClick() {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => {
        //extract one obj from array
        setRandomFlag(data[Math.floor(Math.random() * data.length)]);

        //extract 3 obj from array
        setAnswers(data.sort(() => Math.random() - 0.5).slice(0, 3));

        // var arr = [];
        // while (arr.length < 8) {
        //   var r = Math.floor(Math.random() * 100) + 1;
        //   if (arr.indexOf(r) === -1) arr.push(r);
        // }

        // while (answers.length < 3) {
        //   let r = Math.floor(Math.random() * data.length);
        //   if (answers.indexOf(r) === -1) answers.push(r);
        //   setAnswers([data[Math.floor(Math.random() * data.length)]]);
        // }
      });
  }

  //console.log("length: ", answers.length, "answers: ", answers);

  return (
    <div>
      <img src={randomFlag.flag} width="200px" alt={randomFlag.name} />
      <ul style={{ listStyleType: "none" }}>
        <li>{randomFlag.name}</li>
        {answers.map((a) => (
          <li key={a.id}>{a.name}</li>
        ))}
      </ul>
      <br></br>
      <button onClick={handleClick}>
        {randomFlag.length === 0 ? "Start" : "Next"}
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
