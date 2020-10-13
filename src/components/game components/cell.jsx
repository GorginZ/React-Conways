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
      row={props.row}
      column={props.column}
  
      className="cell"
    ></div>
  );
};

export default Cell;
