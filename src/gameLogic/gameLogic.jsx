import Grid from "./grid";

class GameLogic {

constructor() {
  this.grid = new Grid();
}

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
      cell.column == this.grid.ColumnCount() - 1 ? 0 : cell.column + 1;
    let upNeighbour = cell.row == 0 ? this.grid.RowCount() - 1 : cell.row - 1;
    let downNeighbour = cell.row == this.grid.RowCount() - 1 ? 0 : cell.row + 1;

    let neighbourList = [
      new Index(cell.row, rightNeighbour),
      new Index(cell.row, leftNeighbour),

      new Index(upNeighbour, cell.column),
      new Index(downNeighbour, cell.column),

      new Index(upNeighbour, rightNeighbour),
      new Index(upNeighbour, leftNeighbour),

      new Index(downNeighbour, rightNeighbour),
      new Index(downNeighbour, leftNeighbour)
    ];

    return neighbourList;
  }

  LiveNeighbourCount(neighbourList) {
    let count = 0;

    neighbourList.forEach((cell) => {
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
          (numberOfLiveNeighbours === 3 || numberOfLiveNeighbours === 2)
        ) {
          coordinatesOfCellsToAlive.push(new Index(row, column))
        }
        if (
          !this.IsLiveCell(this.grid[(row, column)]) &&
          numberOfLiveNeighbours === 3
        ) {
          coordinatesOfCellsToAlive.push(new Index(row, column))
        }
      }
    }
    return coordinatesOfCellsToAlive;
  }

  Tick() {
    let listOfCoordinatesToMakeAlive = [] 
    listOfCoordinatesToMakeAlive = this.CellsToMakeAliveOnTick();

    listOfCoordinatesToMakeAlive.ForEach((cell) => {
      cell.isAlive = true;
      console.log("in tick");
    });
  }
}