import React, { useState } from "react";

const Cell = (props) => {
  
  const [colour, setColour] = useState(props.colour);

  let { column } = props;
  let { row } = props;
  return (
    <div
      style={{
        backgroundColor: "blue",
        backgroundSize: "10px",
        backgroundColor: "grey",
      }}
      onClick={props.event}
      // id={props.x}
      //do not rename tile
      className="tile"
    ></div>
  );
};

export default Cell;
