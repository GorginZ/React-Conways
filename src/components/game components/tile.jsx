import React, { useState } from "react";

const Tile = (props) => {
  const [colour, setColour] = useState(props.colour);
  // const { pairId } = props;
  return (
    <div
      style={{
        backgroundColor: "blue",
        backgroundSize: "10px",
        backgroundColor: "grey",
      }}
      onClick={props.event}
      // id={pairId}
      className="tile"
    ></div>
  );
};

export default Tile;
