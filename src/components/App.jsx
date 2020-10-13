import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "../styles/App.scss";
import Game from "./game";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Game></Game>
          <Switch>
            <Route exact path="/life" component={Game} />
          </Switch>
      </>
    );
  }
}

export default App;
