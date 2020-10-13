import React, { PureComponent } from "react";
import Cell from "./cell";
// import RandColour from "../randColour";

class Grid extends PureComponent {
  constructor(props) {
    super(props);
    this.cells = [];
    // this.cells = {GridBuilder(){}};

    const state = { data: [] };
  }

  // GridBuilder = () => {
  //       this.cells = [];

  //    this.cells = Array(10).fill(<Cell row = {"row"} event={this.props.tileEvent}/>).map(x => Array(10).fill(<Cell column = {(x)} event={this.props.tileEvent} />));

  //   return this.cells;

  // };

  GridBuilder = (rows, columns) => {
    this.cells = [];

    for (let i = 0; i < rows; i++) {
      this.cells.push(new Array());
      for (let j = 0; j < columns; j++) {
        this.cells[i].push(
          <Cell row={(i)} column = {(j)} isAlive = {false}event={this.props.tileEvent} />
        );
      }
    }
    return this.cells;
  };

  GridSeer = () => {
    return this.cells;
  };

  render() {
    this.GridBuilder(50, 50);
    console.log(this.cells);
    return <div id="grid">{this.GridSeer()}</div>;
  }
}

export default Grid;
