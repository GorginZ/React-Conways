import React, { Component } from "react";
import Grid from "./game components/grid";

class Game extends Component {
  constructor() {
    super();
    // this.startingState = [];
    this.grid = new Grid();
    this.alive = [];
    this.state = {};
  }

  updateVisibility = (cell) => {
    if (cell.style["background-color"] === "blue") {
      cell.style = "background-color: grey";
    } else {
      cell.style = "background-color: blue";
    }
  };

  Visibility = (cell) => {
   
    this.alive.push(cell);
    this.updateVisibility(cell);
  };
  //click counting?
  handleClick = (event) => {
    this.Visibility(event.target);
    this.setState((state) => {
      console.log(this.alive);
      return (state.score += 1);
    });
  };

  render() {
    return (
      <>
        {" "}
        <div className="scoreBox">
          {" click on the cells to make alive then set start the game "}
        </div>{" "}
        <Grid tileEvent={this.handleClick} />
      </>
    );
  }
}

export default Game;

//   IsLiveCell(CellState valueAtIndex)
//   {
//     if (valueAtIndex.Equals(CellState.Alive))
//     {
//       return true;

//     }
//     return false;
//   }

//  GetListOfCoordinatesForThisCellsNeighbours(int row, int column)
//   {
//     var leftNeighbour = column == 0 ? (_grid.ColumnCount - 1) : (column - 1);
//     var rightNeighbour = column == (_grid.ColumnCount - 1) ? (0) : (column + 1);
//     var upNeighbour = row == 0 ? (_grid.RowCount - 1) : (row - 1);
//     var downNeighbour = row == (_grid.RowCount - 1) ? (0) : (row + 1);

//     var neighbourList = new List<Index>
//     {
//       new Index(row, rightNeighbour), new Index(row, leftNeighbour), new Index(upNeighbour, column), new Index(downNeighbour, column), new Index(upNeighbour, rightNeighbour), new Index(upNeighbour, leftNeighbour), new Index(downNeighbour, rightNeighbour), new Index(downNeighbour, leftNeighbour)
//       };

//     return neighbourList;
//   }

//   LiveNeighbourCount(this.grid, neighbourList)
//   {
//     const count = 0;

//     foreach (Index coordinate in neighbourList)
//     {
//       if (IsLiveCell(_grid[coordinate.Row, coordinate.Column]))
//       {
//         count++;
//       }
//     }
//     return count;
//   }

//   CellsToMakeAliveOnTick()
//   {
//     var CoordinatesOfCellsToAlive = [];

//     for (int row = 0; row < _grid.RowCount; row++)
//     {
//       for (int column = 0; column < _grid.ColumnCount; column++)
//       {
//         var neighboursList = GetListOfCoordinatesForThisCellsNeighbours(row, column);
//         var numberOfLiveNeighbours = LiveNeighbourCount(_grid, neighboursList);

//         if (IsLiveCell(_grid[row, column]) && (numberOfLiveNeighbours.Equals(3) || numberOfLiveNeighbours.Equals(2)))
//         {
//           CoordinatesOfCellsToAlive.Add(new Index(row, column));
//         }
//         if (!IsLiveCell(_grid[row, column]) && numberOfLiveNeighbours.Equals(3))
//         {
//           CoordinatesOfCellsToAlive.Add(new Index(row, column));
//         }

//       }
//     }
//     return CoordinatesOfCellsToAlive;
//   }

//    Tick()
//   {
//     var ListOfCoordinatesToMakeAlive = CellsToMakeAliveOnTick();

//     this.SetMany(ListOfCoordinatesToMakeAlive, CellState.Alive);

//   }
