import React, { PureComponent } from "react";
import Tile from "./tile";
// import RandColour from "../randColour";

class Grid extends PureComponent {
  constructor(props) {
    super(props);
    const state = { data: [] };
  }


  tileConstructor = () => {
    const tiles = [];
    for (let i = 0; i < 80; i++) {
      for (let a = 0; a < 80; a++) {
        tiles.push(<Tile event={this.props.tileEvent} />);
      }
    }
    return tiles
  };

  render() {
    return <div id="grid">
      {this.tileConstructor()}
    </div>;
  }
}

export default Grid;
