import React, { Component } from "react";
import Grid from "./game components/grid";
import Cell from "./game components/cell";

class Game extends Component {
  constructor() {
    super();
    // this.startingState = [];
    this.grid = new Grid();
    this.alive = [];
    this.state = {};
  }

  //only cell element
  updateCellColour = (cell) => {
    if (cell.isAlive === false) {
      cell.style = "background-color: grey";
    } else {
      cell.style = "background-color: blue";
      console.log(cell.isAlive);
    }
  };
  //only cell element
  Visibility = (cell) => {
    this.alive.push(cell);
    cell.isAlive = true;
    this.updateCellColour(cell);
  };

  handleClick(event) {
    this.Visibility(event.target);
    this.setState((state) => {
      console.log(this.alive);
    });
  };

  render() {

    return (
      <>
        {" "}
        <div className="box">
          {" click on the cells to make alive then set start the game "}
        </div>{" "}
        <button onClick={() => this.Tick()}>Start!</button>
        <Grid cellEvent={(...args) => this.handleClick(...args)} />
      </>
    );
  }
}

export default Game;
