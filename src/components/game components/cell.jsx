import React, { useState } from "react";

const Cell = (props) => {
  
  const [colour, setColour] = useState(props.colour);

  let { column } = props;
  let { row } = props;
  let { isAlive } = props;
  return (
    <div
      style={{
        backgroundColor: "blue",
        backgroundSize: "10px",
        backgroundColor: "grey",
      }}
      onClick={props.event}
      row={props.row}
      column={props.column}
      isAlive = {props.isAlive}
  
      className="cell"
    ></div>
  );
};

export default Cell;
