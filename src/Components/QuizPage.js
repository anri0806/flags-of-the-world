import React, { useState } from "react";

function QuizPage({ flags }) {
  const [randomFlag, setRandomFlag] = useState([]);
  //const [answers, setAnswers] = useState([]);

  function handleClick() {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => {
        // //extract one obj from array
        // setRandomFlag(data[Math.floor(Math.random() * data.length)]);
        // //extract 3 obj of array  (shuffle and get first 3 elements)
        // setAnswers(data.sort(() => Math.random() - 0.5).slice(0, 3));

        setRandomFlag(data.sort(() => Math.random() - 0.5).slice(0, 4));
      });
  }

  //fetched 4 random flags -> save obj of array in state
  //apply first element in image by randomFlags[0].map
  //shuffle and iterate and apply name

  return (
    <div>
      {randomFlag.length === 0 ? null : (
        <>
          <img src={randomFlag[0].flag} width="200px" alt={randomFlag.name} />
          <ul style={{ listStyleType: "none" }}>
            {randomFlag.sort(() => Math.random() - 0.5).map((a) => (
          <li key={a.id}>{a.name}</li>
        ))}
          </ul>
        </>
      )}
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
