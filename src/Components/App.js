import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom/";
import Home from "./Home";
import QuizPage from "./QuizPage";
import FlagPage from "./FlagPage";
import NavBar from "./NavBar";

function App() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => setFlags(data));
  }, []);

  function handleAddFlag(newItem) {
    setFlags([newItem, ...flags]);
  }

  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route path="/flaglist">
          <FlagPage flags={flags} onSubmitAdd={handleAddFlag} />
        </Route>
        <Route path="/quiz">
          <QuizPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
