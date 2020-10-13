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

  handleClick = (event) => {
    this.Visibility(event.target);
    this.setState((state) => {
      console.log(this.alive);
    });
  };

  IsLiveCell(cell) {
    if (cell.isAlive) {
      return true;
    } else {
      return false;
    }
  }

  GetListOfCoordinatesForThisCellsNeighbours(cell) {
    let leftNeighbour =
      cell.column == 0 ? this.grid.RowCount() - 1 : cell.column - 1;
    let rightNeighbour =
      cell.column == this.grid.ColumnCoun() - 1 ? 0 : cell.column + 1;
    let upNeighbour = cell.row == 0 ? this.grid.RowCount() - 1 : cell.row - 1;
    let downNeighbour = cell.row == this.grid.RowCount() - 1 ? 0 : cell.row + 1;

    let neighbourList = [
      <Cell row={cell.row} column={rightNeighbour} />,
      <Cell row={cell.row} column={leftNeighbour} />,

      <Cell row={upNeighbour} column={cell.column} />,
      <Cell row={downNeighbour} column={cell.column} />,

      <Cell row={upNeighbour} column={rightNeighbour} />,
      <Cell row={upNeighbour} column={leftNeighbour} />,

      <Cell row={downNeighbour} column={rightNeighbour} />,
      <Cell row={downNeighbour} column={leftNeighbour} />,
    ];

    return neighbourList;
  }

  LiveNeighbourCount(neighbourList) {
    let count = 0;

    neighbourList.ForEach((cell, index) => {
      if (this.IsLiveCell(this.grid[(cell.Row, cell.Column)])) {
        count++;
      }
    });

    return count;
  }

  CellsToMakeAliveOnTick() {
    let coordinatesOfCellsToAlive = [];

    for (let row = 0; row < this.grid.RowCount(); row++) {
      for (let column = 0; column < this.grid.ColumnCount(); column++) {
        let neighboursList = this.GetListOfCoordinatesForThisCellsNeighbours(
          row,
          column
        );
        let numberOfLiveNeighbours = this.LiveNeighbourCount(neighboursList);

        if (
          this.IsLiveCell(this.grid[(row, column)]) &&
          (numberOfLiveNeighbours.Equals(3) || numberOfLiveNeighbours.Equals(2))
        ) {
          coordinatesOfCellsToAlive.push(<Cell row={row} column={column} />);
        }
        if (
          !this.IsLiveCell(this.grid[(row, column)]) &&
          numberOfLiveNeighbours.Equals(3)
        ) {
          coordinatesOfCellsToAlive.push(<Cell row={row} column={column} />);
        }
      }
    }
    return coordinatesOfCellsToAlive;
  }

     Tick()
  {
    var ListOfCoordinatesToMakeAlive = this.CellsToMakeAliveOnTick();
   
   ListOfCoordinatesToMakeAlive.ForEach((cell) => {
cell.isAlive = true;
   })};

  


  render() {
    return (
      <>
        {" "}
        <div className="scoreBox">
          {" click on the cells to make alive then set start the game "}
        </div>{" "}
        <button>Start</button>
        <Grid cellEvent={this.handleClick} />
      </>
    );
  }
}

export default Game;

