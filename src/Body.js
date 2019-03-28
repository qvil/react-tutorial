import React, { useState } from "react";

const Body = props => {
  const [number, setNumber] = useState(1);

  const handleClick = mode => () => {
    setNumber(mode === "plus" ? number + 1 : number - 1);
  };
  return (
    <div>
      <h2>Body Props Number : {props.number}</h2>
      <h2>Body State Number : {number}</h2>
      <button onClick={handleClick("plus")}>+</button>
      <button onClick={handleClick("minus")}>-</button>
    </div>
  );
};

export default Body;
