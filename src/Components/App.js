import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom/";

import Home from "./Home";
import QuizPage from "./QuizPage";
import FlagPage from "./FlagPage";
import NavBar from "./NavBar";


function App() {
  const [flags, setFlags] = useState([]);

  ////////  Fetches flag data from db.json & stores data  ////////
  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => setFlags(data));
  }, []);

  function handleAddFlag(newItem) {
    setFlags([newItem, ...flags]);
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/flaglist">
          <FlagPage flags={flags} onSubmitAdd={handleAddFlag} />
        </Route>
        <Route path="/quiz">
          <QuizPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
