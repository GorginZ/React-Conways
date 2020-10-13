import React, { PureComponent } from "react";
import Cell from "./cell";
// import RandColour from "../randColour";

class Grid extends PureComponent {
  constructor(props) {
    super(props);
    this.cells = [];

    const state = { data: [] };
  }

  GridBuilder = (rows, columns) => {
    this.cells = [];

    for (let i = 0; i < rows; i++) {
      this.cells.push(new Array());
      for (let j = 0; j < columns; j++) {
        this.cells[i].push(
          <Cell
            row={i}
            column={j}
            isAlive={false}
            event={this.props.cellEvent}
          />
        );
      }
    }
    return this.cells;
  };

  GridSeer = () => {
    return this.cells;
  };

  RowCount = () => {
    let rowCount = this.cells.length;
    return rowCount;
  };

  ColumnCount = () => {
    let columnCount = this.cells[0].length;
    return columnCount;
  }

  render() {
    this.GridBuilder(50, 50);
    console.log(this.cells);
    return <div id="grid">{this.GridSeer()}</div>;
  }
}

export default Grid;
