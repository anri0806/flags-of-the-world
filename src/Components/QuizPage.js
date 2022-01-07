import React, { useState } from "react";

function QuizPage() {
  const [randomFlags, setRandomFlags] = useState([]);

  function handleClick() {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) =>
        setRandomFlags(data[Math.floor(Math.random() * data.length)])
      );
  }

  return (
    <div>
      <img src={randomFlags.flag} width="200px" alt={randomFlags.name} />
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
