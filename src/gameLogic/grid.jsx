class Grid {

  constructor(){
    this.cellGrid = this.buildGrid();
  }

  buildGrid(rows, columns){
    const cellGrid = [];
    for (let i = 0; i < rows; i++) {
      cellGrid.push(new Array());
      for (let j = 0; j < columns; j++) {
        cellGrid[i].push(
          CellState.Dead
        );
      }
    }
    return cellGrid;
  }
}
export default Grid;

export const CellState = Object.freeze({
  Dead = 0,
  Alive = 1
});