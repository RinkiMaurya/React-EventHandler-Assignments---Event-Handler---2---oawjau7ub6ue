import React from "react";
import "../styles/App.css";
const App = () => {
  const handleClick = (event) => {
    // use console.log
    console.log("Button id is:-button-a");
  };
  const clickB = (event) => {
    // use console.log
    console.log("Button id is:-button-b");
  };
  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button id="button-a" onClick={(event) => handleClick()}>
        Button A
      </button>
      <button id="button-b" onClick={(event) => clickB()}>
        Button B
      </button>
    </div>
  );
};

export default App;
