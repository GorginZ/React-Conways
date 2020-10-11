import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "../styles/App.scss";
import AllScores from "./AllScores";
import Game from "./game";
import Landing from "./landing";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/play" component={Game} />
            <Route exact path="/scoreboard" component={AllScores} />
          </Switch>
      </>
    );
  }
}

export default App;
