import React from "react";
import "../../styles/GridBoard.scss";

const GridBoard = ({ children, onKeyDown }) => {
  return (
    <div className="gridBoard" onKeyDown={onKeyDown}>
      {children}
    </div>
  );
};

export default GridBoard;
