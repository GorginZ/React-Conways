import React, { PureComponent } from "react";
import Tile from "./tile";
// import RandColour from "../randColour";

class Grid extends PureComponent {
  constructor(props) {
    super(props);
    this.cells = [];
    

    // const state = { data: [] };

  }


  TileConstructor = () => {
    let cells = [];

    // for (let i = 0; i < 80; i++) {
    //   for (let j = 0; j < 80; j++) {
    //     tiles.push(<Tile event={this.props.tileEvent} />);
    //   }
    // }
    cells = Array(20).fill(<Tile event={this.props.tileEvent}/>).map(x => Array(20).fill(<Tile event={this.props.tileEvent} />));
    return cells
  };

  render() {
    return <div id="grid">
      {this.TileConstructor()}
    </div>;
  }
}

export default Grid;
