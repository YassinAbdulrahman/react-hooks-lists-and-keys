import React from "react";
import ColorItem from "./Coloritem";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colors.map((color) => {
          return <ColorItem key={color} style={{ color: color }} color={color} />;
        })}
      </ol>
    </div>
  );
}

export default ColorList;
